from flask import Flask, request
from flask_cors import CORS
from flask_socketio import *
from moviepy.editor import *
import datetime as dt
import json
import os

from predict import predict_on_video
from download_video import download_youtube_video

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

UPLOAD_FOLDER = './uploads'
OUTPUT_FOLDER = './output'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER
CORS(app)

@socketio.on("connect")
def connected():
    print("connection has been established")

@socketio.on("disconnect")
def disconnected():
    print("disconnected")

@socketio.on("message")
def handle_message(message):
    emit("message", "Hello JAVASCRIPT", to=request.sid)
    print(message, id, request.sid)

@socketio.on("viaVideo")
def viaVideo(videobuffer):
    buffer = videobuffer.removeprefix(b'!')
    activity, buffer = buffer.split(b',', maxsplit=1)
    activity = activity.decode(encoding='utf-8')
    fileMetadataBuffer, fileBuffer = buffer.split(b'\r\n\r\n', maxsplit=1)
    fileMetadataBuffer = json.loads(fileMetadataBuffer.decode(encoding='utf-8'))
    fname = fileMetadataBuffer["name"]
    fileextension = os.path.splitext(fname)[1]
    filename = dt.datetime.now().strftime("%d%m%Y%H%M%S%f")
    video_file_path = os.path.join(app.config['UPLOAD_FOLDER'], f'{filename}{fileextension}')

    with open(video_file_path, "wb") as binary_file:
        binary_file.write(fileBuffer)

    window_size = 25
    output_video_file_path = os.path.join(app.config['OUTPUT_FOLDER'], f'{filename}{fileextension}')
    predict_on_video(video_file_path, output_video_file_path, window_size, activity, request.sid)
    emit('end_process', to=request.sid)

@socketio.on("viaURL")
def viaURL(videoURL, activity):
    print(videoURL)
    filename = filename = dt.datetime.now().strftime("%d%m%Y%H%M%S%f")
    fileextension = '.mp4'

    message = download_youtube_video(videoURL, app.config['UPLOAD_FOLDER'], f'{filename}{fileextension}')
    if message["error"] == True:
        emit('message', message, to=request.sid)
        return
    video_file_path = os.path.join(app.config['UPLOAD_FOLDER'], f'{filename}{fileextension}')

    window_size = 25
    output_video_file_path = os.path.join(app.config['OUTPUT_FOLDER'], f'{filename}{fileextension}')
    predict_on_video(video_file_path, output_video_file_path, window_size, activity, request.sid)
    emit('end_process', to=request.sid)

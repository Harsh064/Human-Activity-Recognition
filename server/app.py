from flask import Flask, request, jsonify, Response, send_from_directory
from werkzeug.utils import secure_filename
from flask_cors import CORS
from moviepy.editor import *
import datetime as dt
import os

from predict import predict_on_video
from download_video import download_youtube_video

app = Flask(__name__)
UPLOAD_FOLDER = './uploads'
OUTPUT_FOLDER = './output'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER
CORS(app)

@app.route("/")
def Hello():
    return "Welcome!"

@app.route("/upload/video", methods=["POST"])
def viaVideo():
    file = request.files['video']
    f = secure_filename(file.filename)
    fileextension = os.path.splitext(f)[1]
    filename = dt.datetime.now().strftime("%d%m%Y%H%M%S%f")
    video_file_path = os.path.join(app.config['UPLOAD_FOLDER'], f'{filename}{fileextension}')
    file.save(video_file_path)

    window_size = 25
    output_video_file_path = os.path.join(app.config['OUTPUT_FOLDER'], f'{filename}{fileextension}')
    predict_on_video(video_file_path, output_video_file_path, window_size)
    return send_from_directory(app.config['OUTPUT_FOLDER'], f'{filename}{fileextension}')
    # return jsonify({ "success": True, "description": "file received" })

@app.route("/upload/url", methods=["POST"])
def viaURL():
    print("Uploaded URL: ", request.form["url"])
    url = request.form["url"]
    filename = filename = dt.datetime.now().strftime("%d%m%Y%H%M%S%f")
    fileextension = '.mp4'

    message = download_youtube_video(url, app.config['UPLOAD_FOLDER'], f'{filename}{fileextension}')
    if message["error"] == True:
        return jsonify(message)
    video_file_path = os.path.join(app.config['UPLOAD_FOLDER'], f'{filename}{fileextension}')

    window_size = 25
    output_video_file_path = os.path.join(app.config['OUTPUT_FOLDER'], f'{filename}{fileextension}')
    predict_on_video(video_file_path, output_video_file_path, window_size)
    return send_from_directory(app.config['OUTPUT_FOLDER'], f'{filename}{fileextension}')
    # return jsonify({ "success": True, "description": "url received" })
from pytube import YouTube

def download_youtube_video(link, input_directory, input_video_filename):
    youtubeObject = YouTube(link)
    youtubeObject = youtubeObject.streams.get_highest_resolution()
    try:
        youtubeObject.download(input_directory, input_video_filename)
    except:
        print("An error has occurred")
    print("Download is completed successfully")
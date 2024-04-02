from pytube import YouTube

def download_youtube_video(link, input_directory, input_video_filename):
    try:
        youtubeObject = YouTube(link)
        youtubeObject = youtubeObject.streams.get_highest_resolution()
        youtubeObject.download(input_directory, input_video_filename)
    except:
        print("An error has occurred")
        return { "error": True, "description": "Youtube URL invalid for download" }
    print("Download is completed successfully")
    return { "error": False, "description": "Download is completed successfully" }
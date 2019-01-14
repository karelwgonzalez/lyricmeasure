import requests
import json

musixmatch_api_key = 'b9fe5ec5fdeaab28b3bca94e01cc7bff'

tracklist = json.load(open("tracklist.json", "r"))
request_uri = 'https://api.musixmatch.com/ws/1.1/'

for track in tracklist:
    track_name = tracklist[track]['title']
    track_artist = tracklist[track]['artist']
    parameters = {
        "apikey": musixmatch_api_key,
        "q_track": track_name,
        "q_artist": track_artist,
        "f_has_lyrics": 1,
        "page_size": 1,
        "page": 1,
        "s_track_release_date": "ASC"
    }
    musixmatch_track = requests.get(request_uri + "track.search", params=parameters)
    musixmatch_track_id = musixmatch_track.json()['message']['body']['track_list'][0]['track']['track_id']
    
    musixmatch_lyrics = requests.get(request_uri + 'track.lyrics.get', params={"apikey": musixmatch_api_key, "track_id": musixmatch_track_id})
    musixmatch_lyrics_body = musixmatch_lyrics.json()['message']['body']['lyrics']['lyrics_body']

    open('./lyrics/' + track_artist + "-" + track_name + ".txt", "w").write(musixmatch_lyrics_body)
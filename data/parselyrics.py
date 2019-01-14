import json
import re

tracklist = json.load(open("tracklist.json", "r"))

def reduce_lyrics(lyrics):
    if len(lyrics) > 0:
        del lyrics[-3:]
        for lyric in lyrics:
            pos = lyrics.index(lyric)
            lyrics[pos] = lyric.rstrip()
        lyrics_string = " ".join(lyrics).lower()
        lyrics_string = re.sub('[^a-z0-9\s]+', '', lyrics_string)
        lyrics_set = set(lyrics_string.split())
        return lyrics_set
    else:
        return {}

for track in tracklist:
    track_name = tracklist[track]['title']
    track_artist = tracklist[track]['artist']
    lyric_file_name = ("./lyrics/%s-%s.txt" % (track_artist, track_name))
    track_lyrics = open(lyric_file_name, "r").readlines()
    track_set = reduce_lyrics(track_lyrics)
    tracklist[track]['uniques'] = len(track_set)

with open("tracklist_alldata.json", "w") as outfile:
    json.dump(tracklist, outfile)
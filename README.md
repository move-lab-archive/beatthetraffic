### Running in Dev mode

```
npm install
npm run dev
open localhost:3000 in browser
```

### Export a static version of the app

> Require node.js >=9.2.0

```
npm run export
npm run static
open localhost:5000 in browser
```

## How to add or edit a city in the game

### 1. Fill the gameconfig.json file

You can configure the cities and levels of the game in the `gameconfig.json`
file.

To add a city, you should add the city id in the array `availableCities`, this
city id will also be the URL to access it:
`https://beatthetraffic.moovellab.com/{cityId}`

You should also specify the default selected city in case the geolocation
doesn't work.

```json
{
  "defaultSelectedCity": "stuttgart1",
  "availableCities": ["stuttgart1", "stuttgart2"],
  "availableVideos": [...]
}
```

Then for each city you need to specify 3 levels, that you will add to the
`availableVideos` array. The order doesn't matter, but for readability it is
better to add the things in order 😉

```json
{
  "name": "stuttgart2-level3", // Respect the convention: $CITYNAME-$LEVELNB
  "city": "stuttgart1",
  "cityName": "Stuttgart", // Label for the city
  "level": 1, // Should be 1, 2 or 3
  "levelName": "Stuttgart STR.", // Label that is displayed in the game
  "videoFPS": 30, // The video FPS
  "trackerAndDetectionsFPS": 30, // The FPS of the YOLO / Tracker data, should be the same as the videoFPS
  "originalResolution": {
    // The resolution on which we ran the YOLO detections and tracker
    "w": 1920,
    "h": 1080
  },
  "videoMobileOffset": {
    // The offset for mobile device to scroll to the interesting part of the video. In pixels of the original video resolution
    "x": 350,
    "y": 0
  },
  "disappearAreas": [
    {
      "x": 0,
      "y": 641.77,
      "w": 1650,
      "h": 412
    }
  ],

  "sources": {
    // The urls of the video, please read https://help.vimeo.com/hc/en-us/articles/224823567-Direct-links to know how to get those links, or use your own server
    "hd": "https://player.vimeo.com/external/{vimeoId}.hd.mp4?s=XXXXXXX"
  }
}
```

### 2. Generate the tracking data

#### 2.a Run node-yolo to generate the detections

#### 2.b Run node-tracker-by-detections to generate the tracking data

### 3. Export level specific assets

In addition to the tracking data, the game needs two level specific assets:

* firstframe.jpg
* average.jpg

#### First frame

`firstframe.jpg` is the first frame of the video, it is useful when we load a
new level to avoid a black screen while the video is loading. To generate it,
please first download the video from vimeo _(they do an extra compression step
that may alter the colors a bit)_ , and then you can use ffmpeg for example:

`ffmpeg -i prototype_level_1.mp4 -r 1/1 $filename%03d.bmp`

Kill the process after 1 sec overwise it will extract all the frames of the
video. (or change with a command that just extract the first frame 😝)

Then you need to convert it to jpeg and copy it to the following folder:

`/static/levels/${cityname}-level${levelNb}/firstframe.jpg`

#### Average image

The average image is the video scene without moving traffic, it is used to mask
the cars once when they are clicked.

For example:

![average image](https://user-images.githubusercontent.com/533590/33700711-24c35c7c-db1b-11e7-9a40-aac09b0611e7.jpg)

To produce that image, a variety of techniques are possible, for prototyping and
validating videos, you can use a semi-automated methods with this python script:

```python
# http://opencvpython.blogspot.de/2012/07/background-extraction-using-running.html

import cv2
import numpy as np
import time

video = cv2.VideoCapture("pathtoyourmp4file.mp4")
_,frame = video.read()
avg = np.float32(frame)

while(video.isOpened()):
    _,frame = video.read()
    cv2.accumulateWeighted(frame,avg,0.007)
    res = cv2.convertScaleAbs(avg)
    cv2.imshow('avg1',res)

    k = cv2.waitKey(20)
    if k == 115: # s key
        timestr = time.strftime("%Y%m%d-%H%M%S")
        cv2.imwrite(timestr + ".png", res)
    if k == 27: # ESC key
        break

cv2.destroyAllWindows()
video.release()
```

But for the best results nothing beats a manual process. Ganerate some frames of
the video with ffmpeg:

`ffmpeg -i prototype_level_1.mp4 -r 1/1 $filename%03d.bmp`

And then stich the non moving parts together.

When you have your average image, copy it to the following directory:

`/static/levels/${cityname}-level${levelNb}/average.jpg`

#### Image optimisation

Before commiting those assets, don't forget to optimize them, you can do it for
example with https://imageoptim.com, or http://www.jpegmini.com/ (paid but
better compression for jpeg)

And if you feel to learn about compression techniques, this is your goldmine:
https://images.guide/

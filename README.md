# Beat the traffic 🚚 🚗 🏍

> TODO write intro

## 🏛 General architecture

Beat the traffic runs with:

* A node.js app (using express.js) that serves the front-end (this repo), the
  front-end based on React.js using Next.js

You need node.js installed on the machine in order to run the project.

## 🛠 Development notes

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

### Export static production version of the app and deploy it

> Require node.js >=9.2.0

**Using now.sh**

Create an account: https://zeit.co/now and install command line tool (https://zeit.co/download), login with it on your now account.

You could use the Free OSS plan as it allows static deployment and this code will be open sourced at the end of the day.

Then run:

```bash
npm run export
npm run deploy
#Now will give you an url like: https://traffic-cam-qqwjiiwsai.now.sh/
```

### Build and run production build with geolocation redirects and DB

> Require node.js >=9.2.0
> and Require mongodb installed

This exports the static pages on the server, and run the production server.js file. It's not a static deployment, it's a node instance but it serve static exports for some routes.

```bash
npm run now-build
npm run now-start
```

**Using docker to set-up node and mongodb env**

```bash
# Create the docker image
docker-compose build
# Run the image on port 80
docker-compose up
```

## 🏙 How to add / edit you own level / city

### 1. Fill the gameconfig.json file

You can configure the cities and levels of the game in the `gameconfig.json`
file.

To add a city, you should add the city id in the array `availableCities`, this
city id will also be the URL to access it:
`https://beatthetraffic.moovellab.com/{cityId}`

You should also specify the default selected city in case the geolocation
doesn't work.

```javascript
{
  "defaultSelectedCity": "stuttgart1",
  "availableCities": {
    "stuttgart": {
      "location": [9.1829321, 48.7758459]  // Longitude , Latitude
      "label": "Stuttgart"
    },
    "berlin": {
      "location": [9.1829321, 48.7758459] // Longitude , Latitude
      "label": "Berlin"
    }
  }
  "availableVideos": [...]
}
```

Then for each city you need to specify 3 levels, that you will add to the
`availableVideos` array. The order doesn't matter, but for readability it is
better to add the things in order 😉

```javascript
{
  "name": "stuttgart-level3", // Respect the convention: $CITYNAME-$LEVELNB
  "city": "stuttgart",
  "level": 3, // Should be 1, 2 or 3
  "levelName": "Stuttgart STR.", // Label that is displayed in the game
  "playbackRate": 1.2, // OPTIONAL FIELD (default: 1) If you want to speed up the video
  "videoFPS": 30, // OPTIONAL FIELD (default: 30) The video FPS
  "trackerAndDetectionsFPS": 30, // OPTIONAL FIELD (default: 30) The FPS of the YOLO / Tracker data, should be the same as the videoFPS
  "originalResolution": {
    // OPTIONAL FIELD : The resolution on which we ran the YOLO detections and tracker
    // Default to 1920x1080
    "w": 1920,
    "h": 1080
  },
  "videoMobileOffset": {
    // The offset for mobile device to scroll to the interesting part of the video. In pixels of the original video resolution
    "x": 350,
    "y": 0
  },
  "sources": {
    // The urls of the video, please read https://help.vimeo.com/hc/en-us/articles/224823567-Direct-links to know how to get those links, or use your own server
    // hd: 1280x720
    // sd: 960x540
    // hls: HTTP Live Streaming
    "hd": "https://player.vimeo.com/external/{vimeoId}.hd.mp4?s=XXXXXXX"
    "sd": "https://player.vimeo.com/external/{vimeoId}.sd.mp4?s=XXXXXXX"
    "hls": "https://player.vimeo.com/external/{vimeoId}.m3u8?s=XXXXXXX"
  }
}
```

### 2. Generate the tracking data

Create a folder for the level data in : `/static/levels/${cityname}-level${levelNb}`

#### 2.a Prerequisites

Requires:

* Modern Node and NPM versions (tested with latest LTS release Node v6.., npm 3.., supposed to work with the newer versions as well)
* OpenCV (version 2, for example, 2.4.9.1) to be installed on your system.
  Installing with Brew on MacOS:

```
$ brew install opencv@2
$ sudo chown -R $(whoami):admin /usr/local
$ brew link --force opencv@2
```

* If you are on a mac: macOS 10.12 Sierra or newer, Apple LLVM version 8.0.0 (xcode 8.2, check version with clang -v). For GPU support, Nvidia [CUDA Toolkit](https://developer.nvidia.com/cuda-downloads) (you need to have Nvidia CUDA GPU graphic card)

First, you need to compile this [fork](https://github.com/OrKoN/darknet) of darknet with OpenCV support (optionally, with CUDA support):

```
$ git clone https://github.com/OrKoN/darknet
$ cd darknet
$ make OPENCV=1 # optionally GPU=1
$ make install # by default installed to /usr/local
```

#### 2.b Install and run the darknet-CLI to generate the detections

```
$ git clone https://github.com/moovel/lab-beat-the-traffic.git
$ cd tools/darknet-CLI
$ npm install
```

Now you have to download the pre-trained weight file [here](http://pjreddie.com/media/files/yolo.weights) (258 MB). Or just run this:

```
$ wget http://pjreddie.com/media/files/yolo.weights
```

After this add your video to `/data/videos/yourvideo.MP4`. Then run:

```
$ node darknet-video --mode video --in ./data/videos/yourvideo.MP4 --out ./detections/
```

Once you have the detections.txt generated by YOLO, you need to copy it to the level folder previously created and name it `rawdetections.txt`

Ex: `/static/levels/stuttgart-level1/rawdetections.txt`

#### 2.c Run node-moving-things-tracker to generate the tracking data

```bash
# 1. Install node-tracker-by-detections command line tool (>= 0.4.1)

npm install -g node-moving-things-tracker

# 2. Generate the tracker.json file from the rawdetections.txt detections file

node-moving-things-tracker --mode=beatthetraffic --input /static/assets/levels/$cityname-level$levelNb/rawdetections.txt

# This outputs a tracker.json file in the same directory

# 2-bis You can use the script generateTrackingData.js to generate all cities of the gameconfig.json at once

node generateTrackingData.js
```

#### 2.d Censor license plates (lab linux machine only)

See [this guide](./lpc_howto.md)

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

The final asset must be 1280x720 size, and you should use image optim https://imageoptim.com/online before copying the asset.

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

But for the best results nothing beats a manual process. Generate some frames of
the video with ffmpeg:

`ffmpeg -i prototype_level_1.mp4 -r 1/1 $filename%03d.bmp`

And then stich the non moving parts together.

The final asset must be 1280x720 size, and you should use image optim https://imageoptim.com/online before copying the asset.

When you have your average image, copy it to the following directory:

`/static/levels/${cityname}-level${levelNb}/average-1280.jpg`

#### Image optimisation

Before commiting those assets, don't forget to optimize them, you can do it for
example with https://imageoptim.com, or http://www.jpegmini.com/ (paid but
better compression for jpeg)

And if you feel to learn about compression techniques, this is your goldmine:
https://images.guide/

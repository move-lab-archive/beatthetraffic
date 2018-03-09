## Licence plate censoring How-To

on the lab linux machine is the tool to censor the license plates (it's a slightly modified version of thibaults fork). You can find it under `/home/lab/license-plate-censoring`. 

#### Censoring

To start the censoring process start the tool via:

```
python predict.py -c config.json -w full_yolo_license_plate.h5 -i /home/lab/licence-plate-censoring/lvl-3.mp4 --areaAllowedToBlur 0:1920:800:1080
```

`-i` defines the path to the video file which should be censored.

`--areaAllowedToBlur` defines the active area where `0:1920` defines the __width__ and `800:1080` defines the __height__ of the area. So in the example above the full width and the lower third of every videoframe will be analyzed.

The tool exports every frame into a epoch timestamped folder (`./export/<timestamp>`) with a 7 digits naming scheme with leading zeros (`0000002.png` = second frame of the video).

#### Concatenate

To create a video file out of the single frames we can use `ffmpeg`.

Go inside the folder with the censored frames (`./export/<timestamp>`) and use the following command to create the video file:

```
ffmpeg -framerate 30 -i %07d.png output.mp4 -vcodec libx264
```

Be sure to use the same framerate as the original video file!

#### Cleanup

After the video generation is finished you can delete the folder inside of `./export` by using:

```
rm -rf ./export/<timestamp>
```




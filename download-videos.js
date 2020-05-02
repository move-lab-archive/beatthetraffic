const { exec } = require('child_process')

var gameconfig = require('./gameconfig.json')

gameconfig.availableVideos.forEach((video) => {
    exec(`wget -O static/videos/${video.name}.mp4 ${video.sources.hd}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})
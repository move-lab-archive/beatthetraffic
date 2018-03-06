var fs = require('fs')
var exec = require('child_process').exec

fs.readFile(`./gameconfig.json`, function (err, f) {
  var gameconfig = JSON.parse(f)
  gameconfig.availableVideos.forEach(video => {
    exec(
      `node-moving-things-tracker --mode=beatthetraffic --input ./static/levels/${
        video.name
      }/rawdetections.txt`,
      (error, stdout) => {
        console.log(stdout)
      }
    )
  })
})

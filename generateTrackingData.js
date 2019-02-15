var fs = require('fs')
var exec = require('child_process').exec

fs.readFile(`./gameconfig.json`, function (err, f) {
  if (err) {
    console.log('error')
    return
  }

  var gameconfig = JSON.parse(f)
  gameconfig.availableVideos.forEach(video => {
    var busastruck = ''
    var personasmotorbike = ''

    if (video.busastruck) {
      console.log('bus as truck for ' + video.name)
      busastruck += '--busastruck'
    }

    if (video.personasmotorbike) {
      console.log('persons as motorbike for ' + video.name)
      personasmotorbike += ' --personasmotorbike'
    }

    exec(
      `node-moving-things-tracker --mode=beatthetraffic ${busastruck} ${personasmotorbike} --input /static/levels/${
      video.name
      }/rawdetections.txt`,
      (error, stdout) => {
        if (error) {
          console.log('error')
        }
        console.log(stdout)
      }
    )
  })
})

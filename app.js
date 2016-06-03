  var altrun = 0;
  var fs = require('fs');
  var prvarerState = {
      extruderTemp: 215,
      bedTemp: 85,
      x: 100,
      y: 100,
      z: 100,
      xMin: 000,
      xMax: 400,
      yMin: 000,
      yMax: 500,
      zMin: 000,
      zMax: 800,
      extruderSteps: 0

  }

  function readGcodeFile(file) {
      var gcodefile = "gcode/" + file + ".gcode";
      var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream(gcodefile)
      });

      lineReader.on('line', function(line) {
          var tokens = line.split(" ");
          // console.log(tokens);
          if (altrun = 0;) {
              parseGcode(tokens)
          }
          if (altrun = 1){
            parseG1(tokens)
          }
      });
  }
  readGcodeFile("teensy")


  function parseGcode(code) {


      if (code = "G28") {
          //orgin
      }
      if (code = "G1") {
          console.log("G1");
          altrun = 1;

      }
      if (code = "G92") {
          //set position
      }
      if (code = "M84") {
          //stop idle hold
      }
      if (code = "M107") {
          //fan off
      }
      if (code = "G90") {
          //set to absolute position
      }
      if (code = "m104") {
          // set exxtuder temperature
      }

  }
function nextToken() {

}

function parseG1() {

}
function parseTempSet() {

}

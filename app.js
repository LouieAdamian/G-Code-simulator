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
  var location = 0


  readGcodeFile("teensy")
  console.log("finished");


  function readGcodeFile(file) {
      var gcodefile = "gcode/" + file + ".gcode";
      var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream(gcodefile)
      });

      lineReader.on('line', function(line) {
          var tokens = line.split(" ");
          // console.log(tokens);

          var code = tokens[location]
          parseGcode(code);

      });
  }

  function parseGcode(code) {

      if (code = "G28") {
          //orgin
      }
      if (code = "G1") {
          console.log("G1");
          nextToken()
          parseG1(code)
      } else if (code = "G92") {
          //set position
      } else if (code = "M84") {
          //stop idle hold
      } else if (code = "M107") {
          //fan off
      } else if (code = "G90") {
          //set to absolute position
      } else if (code = "m104") {
          // set exxtuder temperature
      } else if (code = ";") {

      } else {

      }
  }

  function nextToken() {
 location = location++
  }

  function parseG1(code) {
    var one = code.substring(0,0)
    if(one = "X"){

    }

    if (one = "Y"){

    }
    if (one = "Z"){

    }

  }


  function parseM104() {
      // set exxtuder temperature
     var one = code.substring(0,0)
     if(one = "s"){


     }
     else{
       console.log("no temperature ");
}
}

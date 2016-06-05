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
  var location = -1


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
          parseGcode(tokens);
          resToken();
      });
  }

  function parseGcode(tokens) {
      var code = nextToken(tokens);
      //console.log(code)
      if (code == "G28") {
          //orgin
      }
      if (code == "G1") {
          parseG1(tokens);
      } else if (code == "G92") {
          //set position
      } else if (code == "M84") {
          //stop idle hold
      } else if (code == "M107") {
          //fan off
      } else if (code == "G90") {
          //set to absolute position
      } else if (code == "m104") {
          // set exxtuder temperature
      } else if (code == ";") {

      } else {

      }
  }

  function hasTokens(tokens) {
      if (location < tokens.length - 1) {
          return true;
      } else {
          return false;
      }
  }

  function resToken() {
      location = -1;
  }

  function nextToken(tokens) {
      location++;
      return tokens[location]
  }

  function parseG1(tokens) {
      while (hasTokens(tokens)) {
          var code = nextToken(tokens);
          //console.log("code: ",code);
          // console.log("G1");
          var one = code.substring(0, 1)
          var two = code.substring(1)
          if (one == "X") {
              var x = two
              console.log("X", two);
          }
          if (one == "Y") {
              var y = two
              console.log("Y", two);
          }
          if (one == "Z") {
              var z = two
              console.log("z", two);
          }
      }
      distanceCalc(x, y, z, px, py, pz, 100, 50)

      var px = x;
      var py = y;
      var pz = z;

  }

  function distanceCalc(x, y, z, px, py, pz, speedXY, speedZ) {
      var disX;
      var disY;
      var disZ;

      disX = x - px;
      disY = y - py;
      disZ = z - pz;
      timeX = disX / speedXY;
      timeY = disY / speedXY;
      timeZ = disZ / speedZ;

      console.log(timeX);
      console.log(timeY);
      console.log(timeZ);

  }

  function parseM104() {
      // set exxtuder temperature
      var one = code.substring(0, 0)
      if (one = "s") {


      } else {
          console.log("no extruder temperature");
      }
  }

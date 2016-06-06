  var altrun = 0;
  var fs = require('fs');
  var state = {
      distmode: true, // true = abs, false = rel
      extruderTemp: 215,
      bedTemp: 85,
      x: 0,
      y: 0,
      z: 0,
      xMin: 000,
      xMax: 400,
      yMin: 000,
      yMax: 500,
      zMin: 000,
      zMax: 800,
      extruderSteps: 0
  }
  var location = -1
  var elapsedtime = 0;


  estGcodeFileTime("teensy")
  console.log("finished");


  function estGcodeFileTime(file) {
      var gcodefile = "gcode/" + file + ".gcode";
      var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream(gcodefile)
      });

      elapsedtime = 0;
      lineReader.on('line', function(line) {
          var tokens = line.split(" ");
          // console.log(tokens);
          parseGcode(tokens);
          resToken();
      });
      lineReader.on('close', function(){
        console.log("elapsed time:",elapsedtime,"seconds");
      });

  }

  function parseGcode(tokens) {
      var code = nextToken(tokens);
      //console.log(code)
      if (code == "G28") {
          //orgin
          state.x = 0;
          state.y = 0;
          state.z = 0;
      }
      if (code == "G1") {
        elapsedtime += parseG1(tokens);
      } else if (code == "G90") {
        //set to absolute position
        state.distmode = true;
      } else if (code == "G91") {
        //set to relative position
        state.distmode = false;
      } else if (code == "G92") {
          //set position
      } else if (code == "M84") {
          //stop idle hold
      } else if (code == "M107") {
          //fan off
      } else if (code == "m104") {
          // set exxtuder temperature
      } else if (code == ";") {

      } else {
        console.log("skipping", code);
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
      var x;
      var y;
      var z;
      var e;
      var f;
      //console.log(tokens)
      while (hasTokens(tokens)) {
          var code = nextToken(tokens);
          //console.log("code: ",code);
          // console.log("G1");
          var axis = code.substring(0, 1)
          var dist = parseFloat(code.substring(1))
          if (axis == "X") {
              x = dist
              //console.log("X", dist);
          }
          if (axis == "Y") {
              y = dist
              //console.log("Y", dist);
          }
          if (axis == "Z") {
              z = dist
              //console.log("Z", dist);
          }
      }
      var time = 0;
      if (x != undefined && y != undefined) {
        if(state.distmode){
          // absolute distance mode
          var px = state.x;
          var py = state.y;
          time = timeCalcXY(x, y, px, py, 50);
          state.x = x;
          state.y = y;
        }else{
          // relative distance mode
          time = timeCalcXY(x, y, 0, 0, 50);
          state.x += x;
          state.y += y;
        }
      } else if (z != undefined) {
        if(state.distmode){
          // absolute distance mode
          var pz = state.z;
          time = timeCalcZ(z, pz, 10);
          state.z = z;
        }else{
          // relative distance mode
          time = timeCalcZ(z, 0, 10);
          state.z += z;
        }
      } else {
          console.log("error",tokens);
          time = 0;
      }
      return time;
  }

  function timeCalcXY(x, y, px, py, speedXY) { //speedXY is in mm/s
      var disX = x - px;
      var disY = y - py;
      return Math.sqrt(disX * disX + disY * disY) / speedXY;
  }

  function timeCalcZ(z, pz, speedZ) {
      return Math.abs(z - pz) / speedZ;
  }

  function parseM104() {
      // set extuder  temperature
      var one = code.substring(0, 0)
      if (one = "s") {


      } else {
          console.log("no extruder temperature");
      }
  }

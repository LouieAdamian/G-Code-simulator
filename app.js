  var fs = require('fs');
  
  function ParseGcode() {
    while (gcode) {
        var code = {}
        if (code = G28) {}
        if (code = G1) {}
        if (code = G92) {}
        if (code = M84) {}
        if (code = M107) {}
        if (code = G90) {}
    }
    var printersState = {
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
  }

  function readGcodeFile(file) {
      var gcodefile = "gcode/" + file + ".gcode";
      var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream(gcodefile)
      });

      lineReader.on('line', function(line) {
          console.log(line);

      if (code = Z) {
          var Z = code
      }
      if (code = E) {
          var E = code
      }
      if (code = F) {}
  }

  function G92(code) {
      if (code = X) {}
      if (code = Y) {}
      if (code = Z) {}
      if (code = E) {}
  }

  function M106(code) {
      if (code = S) {}
      if (code = P1) {
      }
  }

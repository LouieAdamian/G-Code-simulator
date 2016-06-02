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
  var file = "teensy"
  fs.readFile("/gode/" + file + ".gcode", "utf8", function(err) {
      if (err) {
          console.log(err);
      }
  })

  while (!eof(file)) {
      var code = f.readline()
      if (code = G1) {}
      if (code = G28) {}
      if (code = G92) {}
      if (code = M84) {}
      if (code = M107) {}
  }

  function G1(code) {
      if (code = X) {
          var X = code;
      }
      if (code = Y) {
          var Y = code;
      }
      if (code = Z) {
          var Z = code
      }
      if (code  = E) {
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

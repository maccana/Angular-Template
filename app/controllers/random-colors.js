'use strict';

/* Random Color Ctrl */

templates.controller('ColorCtrl', function($scope) {

 $scope.pageTitle = 'Random Colors';

  $scope.colorTap = function(){
    var tapper = document.getElementById("tapper");
    var display = document.getElementById("hex-val");
    var hexColor = '#'+hex()+hex()+hex();
    tapper.style.backgroundColor = hexColor;
    display.innerHTML = hexColor;

    function hex(){
      var hexchars = "0123456789abcedf";
      var hexval = Math.floor(16 * Math.random());
      //console.log(hexchars[hexval]);
      return (hexchars[hexval]);
    }
  }
})

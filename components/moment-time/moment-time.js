var Polymer = require("polymer")
var moment = require("moment")

Polymer("moment-time", {
  ready: function() {
    var $this = this
    setInterval(function(){
      $this.time = moment().format($this.format)
    }, 1000);
  }
});

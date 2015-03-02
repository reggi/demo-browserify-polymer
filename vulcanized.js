var Polymer = require("polymer")
var moment = require("moment")

Polymer("moment-format", {
  ready: function() {
    this.time = moment(this.getAttribute("date-string"), this.getAttribute("given-format")).format(this.format)
  }
});
;
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

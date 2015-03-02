# Polymer & Browserify

## Why? 

Build better web components!

## What happens?

* write a polymer web component using commonjs like this:

```javascript
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
```

* add your component to a master file / list of all the components you use `components.html` using `link`.
* run `npm run vulcanizeify`
	* vulcanize will pull all the `html` and `js` out of your component tree and put them into two separate files.
	* rmscript will remove the `<script>` tag from the bottom of the `vulcanized.html` file. I chose to do this happens because browserify can't replace it's own input file, and so I'd rather just have the control of adding it manually within `index.html`.
	

## Links

I've been trying painstakingly hard to get this demo to run babelify and es6 code, but alas I cannot. 

Here's the resting place for those failed experiments:

* https://github.com/reggi/demo-systemjs-polymer-es6
* https://github.com/reggi/demo-webpack-polymer-es6
* https://github.com/reggi/demo-browserify-polymer-es6

Here's a list of the many conversations with very generous and polite people that helped along the way:

* https://github.com/reggi/demo-browserify-polymer-es6/issues/1
* https://github.com/Polymer/polymer/issues/1238
* https://github.com/Polymer/polymer/pull/1237
* https://github.com/Polymer/polymer/issues/1236
* https://github.com/babel/babelify/issues/56
* https://github.com/thlorenz/browserify-shim/issues/145


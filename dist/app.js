/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n   new wowjs.WOW().init(); \r\n});\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/button.js":
/*!**************************!*\
  !*** ./js/app/button.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\r\n\r\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\r\n\r\nvar LiquidButton = function () {\r\n  function LiquidButton(svg) {\r\n    _classCallCheck(this, LiquidButton);\r\n\r\n    var options = svg.dataset;\r\n    this.id = this.constructor.id || (this.constructor.id = 1);\r\n    this.constructor.id++;\r\n    this.xmlns = 'http://www.w3.org/2000/svg';\r\n    this.tension = options.tension * 1 || 0.4;\r\n    this.width = options.width * 1 || 200;\r\n    this.height = options.height * 1 || 50;\r\n    this.margin = options.margin || 40;\r\n    this.hoverFactor = options.hoverFactor || -0.1;\r\n    this.gap = options.gap || 5;\r\n    this.debug = options.debug || false;\r\n    this.forceFactor = options.forceFactor || 0.2;\r\n    this.color1 = options.color1 || '#36DFE7';\r\n    this.color2 = options.color2 || '#8F17E1';\r\n    this.color3 = options.color3 || '#BF09E6';\r\n    this.textColor = options.textColor || '#FFFFFF';\r\n    this.text = options.text || 'Button';\r\n    this.svg = svg;\r\n    this.layers = [{\r\n      points: [],\r\n      viscosity: 0.5,\r\n      mouseForce: 100,\r\n      forceLimit: 2\r\n    }, {\r\n      points: [],\r\n      viscosity: 0.8,\r\n      mouseForce: 150,\r\n      forceLimit: 3\r\n    }];\r\n    for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\r\n      var layer = this.layers[layerIndex];\r\n      layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;\r\n      layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;\r\n      layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;\r\n      layer.path = document.createElementNS(this.xmlns, 'path');\r\n      this.svg.appendChild(layer.path);\r\n    }\r\n    this.wrapperElement = options.wrapperElement || document.body;\r\n    if (!this.svg.parentElement) {\r\n      this.wrapperElement.append(this.svg);\r\n    }\r\n\r\n    this.svgText = document.createElementNS(this.xmlns, 'text');\r\n    this.svgText.setAttribute('x', '50%');\r\n    this.svgText.setAttribute('y', '50%');\r\n    this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');\r\n    this.svgText.setAttribute('font-size', '.875rem');\r\n    this.svgText.style.fontFamily = 'GothamPro-Medium';\r\n    this.svgText.setAttribute('text-anchor', 'middle');\r\n    this.svgText.setAttribute('pointer-events', 'none');\r\n    this.svg.appendChild(this.svgText);\r\n\r\n    this.svgDefs = document.createElementNS(this.xmlns, 'defs');\r\n    this.svg.appendChild(this.svgDefs);\r\n\r\n    this.touches = [];\r\n    this.noise = options.noise || 0;\r\n    document.body.addEventListener('touchstart', this.touchHandler);\r\n    document.body.addEventListener('touchmove', this.touchHandler);\r\n    document.body.addEventListener('touchend', this.clearHandler);\r\n    document.body.addEventListener('touchcancel', this.clearHandler);\r\n    this.svg.addEventListener('mousemove', this.mouseHandler);\r\n    this.svg.addEventListener('mouseout', this.clearHandler);\r\n    this.initOrigins();\r\n    this.animate();\r\n  }\r\n\r\n  _createClass(LiquidButton, [{\r\n    key: 'distance',\r\n    value: function distance(p1, p2) {\r\n      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));\r\n    }\r\n  }, {\r\n    key: 'update',\r\n    value: function update() {\r\n      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\r\n        var layer = this.layers[layerIndex];\r\n        var points = layer.points;\r\n        for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {\r\n          var point = points[pointIndex];\r\n          var dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;\r\n          var dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;\r\n          var d = Math.sqrt(dx * dx + dy * dy);\r\n          var f = d * this.forceFactor;\r\n          point.vx += f * (dx / d || 0);\r\n          point.vy += f * (dy / d || 0);\r\n          for (var touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {\r\n            var touch = this.touches[touchIndex];\r\n            var mouseForce = layer.mouseForce;\r\n            if (touch.x > this.margin && touch.x < this.margin + this.width && touch.y > this.margin && touch.y < this.margin + this.height) {\r\n              mouseForce *= -this.hoverFactor;\r\n            }\r\n            var mx = point.x - touch.x;\r\n            var my = point.y - touch.y;\r\n            var md = Math.sqrt(mx * mx + my * my);\r\n            var mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, mouseForce * touch.force / md));\r\n            point.vx += mf * (mx / md || 0);\r\n            point.vy += mf * (my / md || 0);\r\n          }\r\n          point.vx *= layer.viscosity;\r\n          point.vy *= layer.viscosity;\r\n          point.x += point.vx;\r\n          point.y += point.vy;\r\n        }\r\n        for (var _pointIndex = 0; _pointIndex < points.length; _pointIndex++) {\r\n          var prev = points[(_pointIndex + points.length - 1) % points.length];\r\n          var _point = points[_pointIndex];\r\n          var next = points[(_pointIndex + points.length + 1) % points.length];\r\n          var dPrev = this.distance(_point, prev);\r\n          var dNext = this.distance(_point, next);\r\n\r\n          var line = {\r\n            x: next.x - prev.x,\r\n            y: next.y - prev.y\r\n          };\r\n          var dLine = Math.sqrt(line.x * line.x + line.y * line.y);\r\n\r\n          _point.cPrev = {\r\n            x: _point.x - line.x / dLine * dPrev * this.tension,\r\n            y: _point.y - line.y / dLine * dPrev * this.tension\r\n          };\r\n          _point.cNext = {\r\n            x: _point.x + line.x / dLine * dNext * this.tension,\r\n            y: _point.y + line.y / dLine * dNext * this.tension\r\n          };\r\n        }\r\n      }\r\n    }\r\n  }, {\r\n    key: 'animate',\r\n    value: function animate() {\r\n      var _this = this;\r\n\r\n      this.raf(function () {\r\n        _this.update();\r\n        _this.draw();\r\n        _this.animate();\r\n      });\r\n    }\r\n  }, {\r\n    key: 'draw',\r\n    value: function draw() {\r\n      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\r\n        var layer = this.layers[layerIndex];\r\n        if (layerIndex === 1) {\r\n          if (this.touches.length > 0) {\r\n            while (this.svgDefs.firstChild) {\r\n              this.svgDefs.removeChild(this.svgDefs.firstChild);\r\n            }\r\n            for (var touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {\r\n              var touch = this.touches[touchIndex];\r\n              var gradient = document.createElementNS(this.xmlns, 'radialGradient');\r\n              gradient.id = 'liquid-gradient-' + this.id + '-' + touchIndex;\r\n              var start = document.createElementNS(this.xmlns, 'stop');\r\n              start.setAttribute('stop-color', this.color3);\r\n              start.setAttribute('offset', '0%');\r\n              var stop = document.createElementNS(this.xmlns, 'stop');\r\n              stop.setAttribute('stop-color', this.color2);\r\n              stop.setAttribute('offset', '100%');\r\n              gradient.appendChild(start);\r\n              gradient.appendChild(stop);\r\n              this.svgDefs.appendChild(gradient);\r\n              gradient.setAttribute('cx', touch.x / this.svgWidth);\r\n              gradient.setAttribute('cy', touch.y / this.svgHeight);\r\n              gradient.setAttribute('r', touch.force);\r\n              layer.path.style.fill = 'url(#' + gradient.id + ')';\r\n            }\r\n          } else {\r\n            layer.path.style.fill = 'url(#linear-gradient)';\r\n          }\r\n        } else {\r\n          layer.path.style.fill = this.color1;\r\n        }\r\n        var points = layer.points;\r\n        var commands = [];\r\n        commands.push('M', points[0].x, points[0].y);\r\n        for (var pointIndex = 1; pointIndex < points.length; pointIndex += 1) {\r\n          commands.push('C', points[(pointIndex + 0) % points.length].cNext.x, points[(pointIndex + 0) % points.length].cNext.y, points[(pointIndex + 1) % points.length].cPrev.x, points[(pointIndex + 1) % points.length].cPrev.y, points[(pointIndex + 1) % points.length].x, points[(pointIndex + 1) % points.length].y);\r\n        }\r\n        commands.push('Z');\r\n        layer.path.setAttribute('d', commands.join(' '));\r\n      }\r\n      this.svgText.textContent = this.text;\r\n      this.svgText.style.fill = this.textColor;\r\n    }\r\n  }, {\r\n    key: 'createPoint',\r\n    value: function createPoint(x, y) {\r\n      return {\r\n        x: x,\r\n        y: y,\r\n        ox: x,\r\n        oy: y,\r\n        vx: 0,\r\n        vy: 0\r\n      };\r\n    }\r\n  }, {\r\n    key: 'initOrigins',\r\n    value: function initOrigins() {\r\n      this.svg.setAttribute('width', this.svgWidth);\r\n      this.svg.setAttribute('height', this.svgHeight);\r\n      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\r\n        var layer = this.layers[layerIndex];\r\n        var points = [];\r\n        for (var x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {\r\n          points.push(this.createPoint(x + this.margin, this.margin));\r\n        }\r\n        for (var alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {\r\n          var angle = Math.PI / ~~(this.height * 1.25) * alpha;\r\n          points.push(this.createPoint(Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2, Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));\r\n        }\r\n        for (var _x = this.width - ~~(this.height / 2) - 1; _x >= ~~(this.height / 2); _x -= this.gap) {\r\n          points.push(this.createPoint(_x + this.margin, this.margin + this.height));\r\n        }\r\n        for (var _alpha = 0; _alpha <= ~~(this.height * 1.25); _alpha += this.gap) {\r\n          var _angle = Math.PI / ~~(this.height * 1.25) * _alpha;\r\n          points.push(this.createPoint(this.height - Math.sin(_angle) * this.height / 2 + this.margin - this.height / 2, Math.cos(_angle) * this.height / 2 + this.margin + this.height / 2));\r\n        }\r\n        layer.points = points;\r\n      }\r\n    }\r\n  }, {\r\n    key: 'mouseHandler',\r\n    get: function get() {\r\n      var _this2 = this;\r\n\r\n      return function (e) {\r\n        _this2.touches = [{\r\n          x: e.offsetX,\r\n          y: e.offsetY,\r\n          force: 1\r\n        }];\r\n      };\r\n    }\r\n  }, {\r\n    key: 'touchHandler',\r\n    get: function get() {\r\n      var _this3 = this;\r\n\r\n      return function (e) {\r\n        _this3.touches = [];\r\n        var rect = _this3.svg.getBoundingClientRect();\r\n        for (var touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {\r\n          var touch = e.changedTouches[touchIndex];\r\n          var x = touch.pageX - rect.left;\r\n          var y = touch.pageY - rect.top;\r\n          if (x > 0 && y > 0 && x < _this3.svgWidth && y < _this3.svgHeight) {\r\n            _this3.touches.push({ x: x, y: y, force: touch.force || 1 });\r\n          }\r\n        }\r\n        e.preventDefault();\r\n      };\r\n    }\r\n  }, {\r\n    key: 'clearHandler',\r\n    get: function get() {\r\n      var _this4 = this;\r\n\r\n      return function (e) {\r\n        _this4.touches = [];\r\n      };\r\n    }\r\n  }, {\r\n    key: 'raf',\r\n    get: function get() {\r\n      return this.__raf || (this.__raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {\r\n        setTimeout(callback, 10);\r\n      }).bind(window));\r\n    }\r\n  }, {\r\n    key: 'svgWidth',\r\n    get: function get() {\r\n      return this.width + this.margin * 2;\r\n    }\r\n  }, {\r\n    key: 'svgHeight',\r\n    get: function get() {\r\n      return this.height + this.margin * 2;\r\n    }\r\n  }]);\r\n\r\n  return LiquidButton;\r\n}();\r\n\r\nvar redraw = function redraw() {\r\n  button.initOrigins();\r\n};\r\n\r\nvar buttons = document.getElementsByClassName('liquid-button');\r\nfor (var buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {\r\n  var _button = buttons[buttonIndex];\r\n  _button.liquidButton = new LiquidButton(_button);\r\n}\n\n//# sourceURL=webpack:///./js/app/button.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./js/app/app.js ./js/app/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/button.js */\"./js/app/button.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/button.js?");

/***/ })

/******/ });

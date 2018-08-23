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

eval("$(document).ready(function () {\n    if ($(window).width() > 1200) {\n        new wowjs.WOW().init();\n    };\n\n    $('.phone-button').click(function () {\n        var value = $('.phone_input').val(),\n            phone_form = $('#phone_form').serialize();\n        if (value.length < 19) {\n            $('.phone_input').addClass('error');\n        } else {\n            $('.phone_input').removeClass('error');\n            console.log(phone_form);\n            $.ajax({\n                type: 'POST',\n                url: 'send-phone.php',\n                data: phone_form,\n                success: function () {\n                    window.location.href = 'thanks.html';\n                }\n            });\n        }\n    });\n\n    $('.modal_form_btn').click(function (event) {\n        event.preventDefault();\n        $('body').addClass('modal-open');\n        $('.locker').fadeIn();\n        $('.modal_form').fadeIn();\n    });\n\n    $('.close_form_btn').click(function (event) {\n        event.preventDefault();\n        $('body').removeClass('modal-open');\n        $('.locker').fadeOut();\n        $('.modal_form').fadeOut();\n    });\n\n    $('#name_form').validate({\n        errorPlacement: function (error, element) {\n            return true;\n        },\n        submitHandler: function (form) {\n            var form = $('#name_form').serialize();\n            $.ajax({\n                type: 'POST',\n                url: 'send-name.php',\n                data: form,\n                success: function () {\n                    window.location.href = 'thanks.html';\n                }\n            });\n        }\n    });\n\n    $('.test-button').click(function (event) {\n        event.preventDefault();\n        $('body').addClass('modal-open');\n        $('.locker').fadeIn();\n        $('.modal_test').fadeIn();\n    });\n\n    $('.close_test_btn').click(function (event) {\n        event.preventDefault();\n        $('body').removeClass('modal-open');\n        $('.locker').fadeOut();\n        $('.modal_test').fadeOut();\n    });\n\n    $('#test_form').validate({\n        errorPlacement: function (error, element) {\n            return true;\n        },\n        submitHandler: function (form) {\n            var form = $('#test_form').serialize();\n            $.ajax({\n                type: 'POST',\n                url: 'send-test.php',\n                data: form,\n                success: function () {\n                   window.location.href = 'thanks.html';\n                }\n            });\n        }\n    });\n    $('.locker').click(function () {\n        $('body').removeClass('modal-open');\n        $('.locker').fadeOut();\n        $('.modal_test').fadeOut();\n        $('.modal_form').fadeOut();\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/button.js":
/*!**************************!*\
  !*** ./js/app/button.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LiquidButton = function () {\n  function LiquidButton(svg) {\n    _classCallCheck(this, LiquidButton);\n\n    var options = svg.dataset;\n    this.id = this.constructor.id || (this.constructor.id = 1);\n    this.constructor.id++;\n    this.xmlns = 'http://www.w3.org/2000/svg';\n    this.tension = options.tension * 1 || 0.4;\n    this.width = options.width * 1 || 200;\n    this.height = options.height * 1 || 50;\n    this.margin = options.margin || 40;\n    this.hoverFactor = options.hoverFactor || -0.1;\n    this.gap = options.gap || 5;\n    this.debug = options.debug || false;\n    this.forceFactor = options.forceFactor || 0.2;\n    this.color1 = options.color1 || '#36DFE7';\n    this.color2 = options.color2 || '#8F17E1';\n    this.color3 = options.color3 || '#BF09E6';\n    this.textColor = options.textColor || '#FFFFFF';\n    this.text = options.text || 'Button';\n    this.svg = svg;\n    this.layers = [{\n      points: [],\n      viscosity: 0.5,\n      mouseForce: 100,\n      forceLimit: 2\n    }, {\n      points: [],\n      viscosity: 0.8,\n      mouseForce: 150,\n      forceLimit: 3\n    }];\n    for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\n      var layer = this.layers[layerIndex];\n      layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;\n      layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;\n      layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;\n      layer.path = document.createElementNS(this.xmlns, 'path');\n      this.svg.appendChild(layer.path);\n    }\n    this.wrapperElement = options.wrapperElement || document.body;\n    if (!this.svg.parentElement) {\n      this.wrapperElement.append(this.svg);\n    }\n\n    this.svgText = document.createElementNS(this.xmlns, 'text');\n    this.svgText.setAttribute('x', '50%');\n    this.svgText.setAttribute('y', '50%');\n    this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');\n    this.svgText.setAttribute('font-size', '.875rem');\n    this.svgText.style.fontFamily = 'GothamPro-Medium';\n    this.svgText.setAttribute('text-anchor', 'middle');\n    this.svgText.setAttribute('pointer-events', 'none');\n    this.svg.appendChild(this.svgText);\n\n    this.svgDefs = document.createElementNS(this.xmlns, 'defs');\n    this.svg.appendChild(this.svgDefs);\n\n    this.touches = [];\n    this.noise = options.noise || 0;\n    document.body.addEventListener('touchstart', this.touchHandler);\n    document.body.addEventListener('touchmove', this.touchHandler);\n    document.body.addEventListener('touchend', this.clearHandler);\n    document.body.addEventListener('touchcancel', this.clearHandler);\n    this.svg.addEventListener('mousemove', this.mouseHandler);\n    this.svg.addEventListener('mouseout', this.clearHandler);\n    this.initOrigins();\n    this.animate();\n  }\n\n  _createClass(LiquidButton, [{\n    key: 'distance',\n    value: function distance(p1, p2) {\n      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\n        var layer = this.layers[layerIndex];\n        var points = layer.points;\n        for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {\n          var point = points[pointIndex];\n          var dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;\n          var dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;\n          var d = Math.sqrt(dx * dx + dy * dy);\n          var f = d * this.forceFactor;\n          point.vx += f * (dx / d || 0);\n          point.vy += f * (dy / d || 0);\n          for (var touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {\n            var touch = this.touches[touchIndex];\n            var mouseForce = layer.mouseForce;\n            if (touch.x > this.margin && touch.x < this.margin + this.width && touch.y > this.margin && touch.y < this.margin + this.height) {\n              mouseForce *= -this.hoverFactor;\n            }\n            var mx = point.x - touch.x;\n            var my = point.y - touch.y;\n            var md = Math.sqrt(mx * mx + my * my);\n            var mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, mouseForce * touch.force / md));\n            point.vx += mf * (mx / md || 0);\n            point.vy += mf * (my / md || 0);\n          }\n          point.vx *= layer.viscosity;\n          point.vy *= layer.viscosity;\n          point.x += point.vx;\n          point.y += point.vy;\n        }\n        for (var _pointIndex = 0; _pointIndex < points.length; _pointIndex++) {\n          var prev = points[(_pointIndex + points.length - 1) % points.length];\n          var _point = points[_pointIndex];\n          var next = points[(_pointIndex + points.length + 1) % points.length];\n          var dPrev = this.distance(_point, prev);\n          var dNext = this.distance(_point, next);\n\n          var line = {\n            x: next.x - prev.x,\n            y: next.y - prev.y\n          };\n          var dLine = Math.sqrt(line.x * line.x + line.y * line.y);\n\n          _point.cPrev = {\n            x: _point.x - line.x / dLine * dPrev * this.tension,\n            y: _point.y - line.y / dLine * dPrev * this.tension\n          };\n          _point.cNext = {\n            x: _point.x + line.x / dLine * dNext * this.tension,\n            y: _point.y + line.y / dLine * dNext * this.tension\n          };\n        }\n      }\n    }\n  }, {\n    key: 'animate',\n    value: function animate() {\n      var _this = this;\n\n      this.raf(function () {\n        _this.update();\n        _this.draw();\n        _this.animate();\n      });\n    }\n  }, {\n    key: 'draw',\n    value: function draw() {\n      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\n        var layer = this.layers[layerIndex];\n        if (layerIndex === 1) {\n          if (this.touches.length > 0) {\n            while (this.svgDefs.firstChild) {\n              this.svgDefs.removeChild(this.svgDefs.firstChild);\n            }\n            for (var touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {\n              var touch = this.touches[touchIndex];\n              var gradient = document.createElementNS(this.xmlns, 'radialGradient');\n              gradient.id = 'liquid-gradient-' + this.id + '-' + touchIndex;\n              var start = document.createElementNS(this.xmlns, 'stop');\n              start.setAttribute('stop-color', this.color3);\n              start.setAttribute('offset', '0%');\n              var stop = document.createElementNS(this.xmlns, 'stop');\n              stop.setAttribute('stop-color', this.color2);\n              stop.setAttribute('offset', '100%');\n              gradient.appendChild(start);\n              gradient.appendChild(stop);\n              this.svgDefs.appendChild(gradient);\n              gradient.setAttribute('cx', touch.x / this.svgWidth);\n              gradient.setAttribute('cy', touch.y / this.svgHeight);\n              gradient.setAttribute('r', touch.force);\n              layer.path.style.fill = 'url(#' + gradient.id + ')';\n            }\n          } else {\n            layer.path.style.fill = 'url(#linear-gradient)';\n          }\n        } else {\n          layer.path.style.fill = this.color1;\n        }\n        var points = layer.points;\n        var commands = [];\n        commands.push('M', points[0].x, points[0].y);\n        for (var pointIndex = 1; pointIndex < points.length; pointIndex += 1) {\n          commands.push('C', points[(pointIndex + 0) % points.length].cNext.x, points[(pointIndex + 0) % points.length].cNext.y, points[(pointIndex + 1) % points.length].cPrev.x, points[(pointIndex + 1) % points.length].cPrev.y, points[(pointIndex + 1) % points.length].x, points[(pointIndex + 1) % points.length].y);\n        }\n        commands.push('Z');\n        layer.path.setAttribute('d', commands.join(' '));\n      }\n      this.svgText.textContent = this.text;\n      this.svgText.style.fill = this.textColor;\n    }\n  }, {\n    key: 'createPoint',\n    value: function createPoint(x, y) {\n      return {\n        x: x,\n        y: y,\n        ox: x,\n        oy: y,\n        vx: 0,\n        vy: 0\n      };\n    }\n  }, {\n    key: 'initOrigins',\n    value: function initOrigins() {\n      this.svg.setAttribute('width', this.svgWidth);\n      this.svg.setAttribute('height', this.svgHeight);\n      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {\n        var layer = this.layers[layerIndex];\n        var points = [];\n        for (var x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {\n          points.push(this.createPoint(x + this.margin, this.margin));\n        }\n        for (var alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {\n          var angle = Math.PI / ~~(this.height * 1.25) * alpha;\n          points.push(this.createPoint(Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2, Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));\n        }\n        for (var _x = this.width - ~~(this.height / 2) - 1; _x >= ~~(this.height / 2); _x -= this.gap) {\n          points.push(this.createPoint(_x + this.margin, this.margin + this.height));\n        }\n        for (var _alpha = 0; _alpha <= ~~(this.height * 1.25); _alpha += this.gap) {\n          var _angle = Math.PI / ~~(this.height * 1.25) * _alpha;\n          points.push(this.createPoint(this.height - Math.sin(_angle) * this.height / 2 + this.margin - this.height / 2, Math.cos(_angle) * this.height / 2 + this.margin + this.height / 2));\n        }\n        layer.points = points;\n      }\n    }\n  }, {\n    key: 'mouseHandler',\n    get: function get() {\n      var _this2 = this;\n\n      return function (e) {\n        _this2.touches = [{\n          x: e.offsetX,\n          y: e.offsetY,\n          force: 1\n        }];\n      };\n    }\n  }, {\n    key: 'touchHandler',\n    get: function get() {\n      var _this3 = this;\n\n      return function (e) {\n        _this3.touches = [];\n        var rect = _this3.svg.getBoundingClientRect();\n        for (var touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {\n          var touch = e.changedTouches[touchIndex];\n          var x = touch.pageX - rect.left;\n          var y = touch.pageY - rect.top;\n          if (x > 0 && y > 0 && x < _this3.svgWidth && y < _this3.svgHeight) {\n            _this3.touches.push({ x: x, y: y, force: touch.force || 1 });\n          }\n        }\n        e.preventDefault();\n      };\n    }\n  }, {\n    key: 'clearHandler',\n    get: function get() {\n      var _this4 = this;\n\n      return function (e) {\n        _this4.touches = [];\n      };\n    }\n  }, {\n    key: 'raf',\n    get: function get() {\n      return this.__raf || (this.__raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {\n        setTimeout(callback, 10);\n      }).bind(window));\n    }\n  }, {\n    key: 'svgWidth',\n    get: function get() {\n      return this.width + this.margin * 2;\n    }\n  }, {\n    key: 'svgHeight',\n    get: function get() {\n      return this.height + this.margin * 2;\n    }\n  }]);\n\n  return LiquidButton;\n}();\n\nvar redraw = function redraw() {\n  button.initOrigins();\n};\n\nvar buttons = document.getElementsByClassName('liquid-button');\nfor (var buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {\n  var _button = buttons[buttonIndex];\n  _button.liquidButton = new LiquidButton(_button);\n}\n\n\n//# sourceURL=webpack:///./js/app/button.js?");

/***/ }),

/***/ "./js/app/mask.js":
/*!************************!*\
  !*** ./js/app/mask.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    var telInp = $('.phone_input, .form_phone_input, .test_phone_input');\r\n\r\n    telInp.each(function () {\r\n        $(this).mask('+375 (99) 999-99-99');\r\n\r\n        $(this).click(function () {\r\n            if ($(this).val() == '+375 (__) ___-__-__') {\r\n                $(this).setCursorPosition(6);\r\n            }\r\n        });\r\n    });\r\n\r\n    // set cursore position \r\n    $.fn.setCursorPosition = function (pos) {\r\n        if ($(this).get(0).setSelectionRange) {\r\n            $(this).get(0).setSelectionRange(pos, pos);\r\n        } else if ($(this).get(0).createTextRange) {\r\n            var range = $(this).get(0).createTextRange();\r\n\r\n            range.collapse(true);\r\n            range.moveEnd('character', pos);\r\n            range.moveStart('character', pos);\r\n            range.select();\r\n        }\r\n    };\r\n});\n\n//# sourceURL=webpack:///./js/app/mask.js?");

/***/ }),

/***/ "./js/app/sliders.js":
/*!***************************!*\
  !*** ./js/app/sliders.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.desc-slider').slick();\r\n\r\n    $('.employees_slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        slidesToShow: 4,\r\n        swipeToSlide: true,\r\n        responsive: [\r\n            {\r\n                breakpoint: 1024,\r\n                settings: {\r\n                    slidesToShow: 3\r\n                }\r\n    },\r\n            {\r\n                breakpoint: 900,\r\n                settings: {\r\n                    slidesToShow: 2\r\n                }\r\n    },\r\n            {\r\n                breakpoint: 501,\r\n                settings: {\r\n                    slidesToShow: 1\r\n                }\r\n    }]\r\n    });\r\n\r\n    $('.review_slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        slidesToShow: 4,\r\n        swipeToSlide: true,\r\n        responsive: [\r\n            {\r\n                breakpoint: 1024,\r\n                settings: {\r\n                    slidesToShow: 3\r\n                }\r\n    },\r\n            {\r\n                breakpoint: 900,\r\n                settings: {\r\n                    slidesToShow: 2\r\n                }\r\n    },\r\n            {\r\n                breakpoint: 501,\r\n                settings: {\r\n                    slidesToShow: 1\r\n                }\r\n    }]\r\n    });\r\n\r\n    $('.photo_slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        slidesToShow: 4,\r\n        swipeToSlide: true,\r\n        responsive: [\r\n            {\r\n                breakpoint: 1024,\r\n                settings: {\r\n                    slidesToShow: 3\r\n                }\r\n    },\r\n            {\r\n                breakpoint: 900,\r\n                settings: {\r\n                    slidesToShow: 2\r\n                }\r\n    },\r\n            {\r\n                breakpoint: 501,\r\n                settings: {\r\n                    slidesToShow: 1\r\n                }\r\n    }]\r\n    });\r\n});\n\n//# sourceURL=webpack:///./js/app/sliders.js?");

/***/ }),

/***/ "./js/app/test.js":
/*!************************!*\
  !*** ./js/app/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var currentQuestion;\n    $('.next_question').click(function () {\n        currentQuestion = $('.question_active').index();\n        var text = $('.question').eq(currentQuestion).find('input[type=radio]:checked').parent('.label').text();\n        $('.question_active').removeClass('question_active');\n        $('.question').eq(++currentQuestion).addClass('question_active');\n        $('.question_' + currentQuestion).val(text);\n        if (currentQuestion > 0) {\n            $('.prev_question').addClass('button_visible');\n        }\n        if (currentQuestion == $('.question').length - 1) {\n            $('.next_question, .prev_question').css('display', 'none');\n            }\n    });\n\n      $('.prev_question').click(function () {\n          $('.question_active').removeClass('question_active');\n           $('.question').eq(--currentQuestion).addClass('question_active');\n          if (currentQuestion == 0) {\n              $('.prev_question').removeClass('button_visible');\n          }\n      });\n});\n\n\n//# sourceURL=webpack:///./js/app/test.js?");

/***/ }),

/***/ "./js/app/ymaps.js":
/*!*************************!*\
  !*** ./js/app/ymaps.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var mapBlock = document.getElementById('map');\n\n    if (mapBlock) {\n        ymaps.ready(init);\n        var map,\n            Placemark;\n\n        function init() {\n            map = new ymaps.Map(\"map\", {\n                center: [53.88847683, 27.529],\n                zoom: 12\n            });\n\n            map.behaviors.disable('scrollZoom');\n            if ($(this).width() < 1200) {\n                map.behaviors.disable('drag');\n            }\n\n            Placemark = new ymaps.Placemark([53.888250, 27.517059], {\n                hintContent: 'TerGlobo',\n                balloonContent: 'TerGlobo'\n            }, {\n                iconLayout: 'default#image',\n                iconImageHref: 'img/ymaps-placemark.png',\n                iconImageSize: [52, 76],\n                iconImageOffset: [-26, -76]\n            });\n\n            map.geoObjects.add(Placemark);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/ymaps.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/button.js ./js/app/mask.js ./js/app/sliders.js ./js/app/test.js ./js/app/ymaps.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/button.js */\"./js/app/button.js\");\n__webpack_require__(/*! ./js/app/mask.js */\"./js/app/mask.js\");\n__webpack_require__(/*! ./js/app/sliders.js */\"./js/app/sliders.js\");\n__webpack_require__(/*! ./js/app/test.js */\"./js/app/test.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/ymaps.js */\"./js/app/ymaps.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/button.js_./js/app/mask.js_./js/app/sliders.js_./js/app/test.js_./js/app/ymaps.js?");

/***/ })

/******/ });

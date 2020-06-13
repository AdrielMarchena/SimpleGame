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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/Animation/Animation.ts":
/*!***********************************!*\
  !*** ./ts/Animation/Animation.ts ***!
  \***********************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\nvar Animation = /** @class */ (function () {\r\n    function Animation(sprite, ctx, keyboard) {\r\n        this._sprites = sprite;\r\n        this._ctx = ctx;\r\n        this._ctx.canvas.style.cssText = \"background-color: aqua;\";\r\n        this._clearCanvas = true;\r\n        this._keyboard = keyboard;\r\n        this._specialKeysOn = true;\r\n    }\r\n    Animation.prototype.addSprite = function (sprite) {\r\n        this._sprites.push(sprite);\r\n    };\r\n    Animation.prototype.popSprite = function (sprite) {\r\n        var ind = this._sprites.indexOf(sprite);\r\n        this._sprites.splice(ind, 1);\r\n    };\r\n    Animation.prototype.nextFrame = function () {\r\n        var _this = this;\r\n        //Check if this is to be running\r\n        if (!this._on)\r\n            return;\r\n        //Clear the screen\r\n        if (this._clearCanvas)\r\n            this.clearScreen();\r\n        //Update Sprites\r\n        for (var i in this._sprites) {\r\n            this._sprites[i].update();\r\n        }\r\n        //Draw sprites\r\n        for (var i in this._sprites) {\r\n            this._sprites[i].draw();\r\n        }\r\n        if (this._specialKeysOn)\r\n            this.specialKeys();\r\n        //Call  next frame\r\n        requestAnimationFrame(function () { return _this.nextFrame(); });\r\n    };\r\n    Animation.prototype.specialKeys = function () {\r\n        var thisAnimation = this;\r\n        this._keyboard.clickedKey(this._keyboard.R_KEY, function () {\r\n            thisAnimation.clearScreen();\r\n        });\r\n        if (this._keyboard.pressKey(this._keyboard.P_KEY)) {\r\n            if (this._clearCanvas)\r\n                this.cleanOff();\r\n        }\r\n        if (this._keyboard.pressKey(this._keyboard.O_KEY)) {\r\n            if (!this._clearCanvas)\r\n                this.cleanOn();\r\n        }\r\n    };\r\n    Animation.prototype.clearScreen = function () {\r\n        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);\r\n    };\r\n    Animation.prototype.cleanOn = function () {\r\n        this._clearCanvas = true;\r\n    };\r\n    Animation.prototype.cleanOff = function () {\r\n        this._clearCanvas = false;\r\n    };\r\n    Animation.prototype.turnOn = function () {\r\n        this._on = true;\r\n        this.nextFrame();\r\n    };\r\n    Animation.prototype.turnOff = function () {\r\n        this._on = false;\r\n    };\r\n    Object.defineProperty(Animation.prototype, \"sprites\", {\r\n        get: function () {\r\n            return this._sprites;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Animation.prototype, \"specialKeysOn\", {\r\n        get: function () {\r\n            return this._specialKeysOn;\r\n        },\r\n        set: function (on) {\r\n            this._specialKeysOn = on;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Animation;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Animation/Animation.ts?");

/***/ }),

/***/ "./ts/Canvas/Canvas.ts":
/*!*****************************!*\
  !*** ./ts/Canvas/Canvas.ts ***!
  \*****************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\nvar Canvas = /** @class */ (function () {\r\n    function Canvas() {\r\n        this._canvas = document.querySelector('canvas');\r\n        if (this._canvas == null || this._canvas == undefined) {\r\n            this._canvas = document.createElement('canvas');\r\n        }\r\n        this._ctx = this._canvas.getContext('2d');\r\n    }\r\n    Canvas.prototype.resizeCanvas = function (width, height) {\r\n        this._canvas.width = width;\r\n        this._canvas.height = height;\r\n    };\r\n    Object.defineProperty(Canvas.prototype, \"canvas\", {\r\n        get: function () {\r\n            return this._canvas;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Canvas.prototype, \"ctx\", {\r\n        get: function () {\r\n            return this._ctx;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Canvas;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Canvas/Canvas.ts?");

/***/ }),

/***/ "./ts/KeyBoard/KeyBoard.ts":
/*!*********************************!*\
  !*** ./ts/KeyBoard/KeyBoard.ts ***!
  \*********************************/
/*! exports provided: KeyBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyBoard\", function() { return KeyBoard; });\nvar KeyBoard = /** @class */ (function () {\r\n    function KeyBoard(element) {\r\n        //keys\r\n        this.SPACE_BAR = 32;\r\n        this.ARROW_LEFT = 37;\r\n        this.ARROW_UP = 38;\r\n        this.ARROW_RIGHT = 39;\r\n        this.ARROW_DOWN = 40;\r\n        this.G_KEY = 71;\r\n        this.O_KEY = 79;\r\n        this.P_KEY = 80;\r\n        this.R_KEY = 82;\r\n        this.PLUS_NUMKEY = 107;\r\n        this.MINUS_NUMKEY = 109;\r\n        this._pressKeys = [];\r\n        this._clicked = [];\r\n        this._clickFunction = [];\r\n        var keyboard = this;\r\n        element.addEventListener('keydown', function (event) {\r\n            var key = event.keyCode;\r\n            keyboard._pressKeys[key] = true;\r\n            if (keyboard._clickFunction[key] &&\r\n                !keyboard._clicked[key]) {\r\n                keyboard._clicked[key] = true;\r\n                keyboard._clickFunction[key]();\r\n                //console.log(key);\r\n            }\r\n        });\r\n        element.addEventListener('keyup', function (event) {\r\n            keyboard._pressKeys[event.keyCode] = false;\r\n            keyboard._clicked[event.keyCode] = false;\r\n        });\r\n    }\r\n    KeyBoard.prototype.pressKey = function (key) {\r\n        return this._pressKeys[key];\r\n    };\r\n    KeyBoard.prototype.clickedKey = function (key, callback) {\r\n        this._clickFunction[key] = callback;\r\n    };\r\n    return KeyBoard;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/KeyBoard/KeyBoard.ts?");

/***/ }),

/***/ "./ts/Obj/Formats/Ball.ts":
/*!********************************!*\
  !*** ./ts/Obj/Formats/Ball.ts ***!
  \********************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _Renderizable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderizable */ \"./ts/Obj/Formats/Renderizable.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * Class to represent a Ball\r\n *\r\n */\r\nvar Ball = /** @class */ (function (_super) {\r\n    __extends(Ball, _super);\r\n    /**\r\n     * contructor for the class ball; x,y,dx,dy set to zero,\r\n     * radius set to 10, color is 'black'\r\n     * @param ctx the context where de ball will be draw\r\n     */\r\n    function Ball(ctx) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._x = 0;\r\n        _this._y = 0;\r\n        _this._dx = 0;\r\n        _this._dy = 0;\r\n        _this._radius = 10;\r\n        _this._color = 'black';\r\n        return _this;\r\n    }\r\n    Ball.prototype.update = function () {\r\n        console.log(\"Override this method to update\");\r\n    };\r\n    Ball.prototype.draw = function () {\r\n        console.log(\"Override this method to update\");\r\n    };\r\n    Object.defineProperty(Ball.prototype, \"radius\", {\r\n        //Get's & Set's\r\n        get: function () {\r\n            return this._radius;\r\n        },\r\n        set: function (radius) {\r\n            this._radius = radius;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Ball;\r\n}(_Renderizable__WEBPACK_IMPORTED_MODULE_0__[\"Renderizable\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Formats/Ball.ts?");

/***/ }),

/***/ "./ts/Obj/Formats/Renderizable.ts":
/*!****************************************!*\
  !*** ./ts/Obj/Formats/Renderizable.ts ***!
  \****************************************/
/*! exports provided: Renderizable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderizable\", function() { return Renderizable; });\nvar Renderizable = /** @class */ (function () {\r\n    /**\r\n     * contructor for the class;\r\n     * x,y,dx,dy set to zero,\r\n     * color is 'black'\r\n     * @param ctx the context where de Obj will be draw\r\n     */\r\n    function Renderizable(ctx) {\r\n        this._ctx = ctx;\r\n        this._x = 0;\r\n        this._y = 0;\r\n        this._dx = 0;\r\n        this._dy = 0;\r\n        this._color = 'black';\r\n    }\r\n    Renderizable.prototype.update = function () {\r\n        console.log('Override this method for Update your obj');\r\n    };\r\n    Renderizable.prototype.draw = function () {\r\n        console.log('Override this method for Draw your obj');\r\n    };\r\n    Object.defineProperty(Renderizable.prototype, \"x\", {\r\n        //Get's & Set's\r\n        get: function () {\r\n            return this._x;\r\n        },\r\n        set: function (x) {\r\n            this._x = x;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Renderizable.prototype, \"y\", {\r\n        get: function () {\r\n            return this._y;\r\n        },\r\n        set: function (y) {\r\n            this._y = y;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Renderizable.prototype, \"dx\", {\r\n        get: function () {\r\n            return this._dx;\r\n        },\r\n        set: function (dx) {\r\n            this._dx = dx;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Renderizable.prototype, \"dy\", {\r\n        get: function () {\r\n            return this._dy;\r\n        },\r\n        set: function (dy) {\r\n            this._dy = dy;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Renderizable.prototype, \"color\", {\r\n        get: function () {\r\n            return this._color;\r\n        },\r\n        set: function (color) {\r\n            this._color = color;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Renderizable;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Formats/Renderizable.ts?");

/***/ }),

/***/ "./ts/Obj/Formats/Square.ts":
/*!**********************************!*\
  !*** ./ts/Obj/Formats/Square.ts ***!
  \**********************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony import */ var _Renderizable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderizable */ \"./ts/Obj/Formats/Renderizable.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar colorArray = [\r\n    '#0A1747',\r\n    '#0029FA',\r\n    '#8D07F6',\r\n    '#FFFF05',\r\n    '#D4DBF5',\r\n];\r\nvar Square = /** @class */ (function (_super) {\r\n    __extends(Square, _super);\r\n    /**\r\n     * contructor for the class;\r\n     * x,y,dx,dy set to zero,\r\n     * color is 'black'\r\n     * @param ctx the context where de Obj will be draw\r\n     */\r\n    function Square(ctx) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._width = 50;\r\n        _this._height = 50;\r\n        _this._maxHeight = 125;\r\n        _this._minHeight = 20;\r\n        _this._maxWidth = 125;\r\n        _this._minWidth = 20;\r\n        return _this;\r\n    }\r\n    Square.prototype.update = function () {\r\n        console.log('Override this method to implement update');\r\n    };\r\n    Square.prototype.draw = function () {\r\n        console.log('Override this method to implement draw');\r\n    };\r\n    Object.defineProperty(Square.prototype, \"width\", {\r\n        get: function () {\r\n            return this._width;\r\n        },\r\n        set: function (width) {\r\n            this._width = width;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"height\", {\r\n        get: function () {\r\n            return this._height;\r\n        },\r\n        set: function (height) {\r\n            this._height = height;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"maxHeight\", {\r\n        get: function () {\r\n            return this._maxHeight;\r\n        },\r\n        set: function (maxHeight) {\r\n            this._maxHeight = maxHeight;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"minHeight\", {\r\n        get: function () {\r\n            return this._minHeight;\r\n        },\r\n        set: function (minHeight) {\r\n            this._minHeight = minHeight;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"maxWidth\", {\r\n        get: function () {\r\n            return this._maxWidth;\r\n        },\r\n        set: function (maxWidth) {\r\n            this._maxWidth = maxWidth;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"minWidth\", {\r\n        get: function () {\r\n            return this._minWidth;\r\n        },\r\n        set: function (minWidth) {\r\n            this._minWidth = minWidth;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Square;\r\n}(_Renderizable__WEBPACK_IMPORTED_MODULE_0__[\"Renderizable\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Formats/Square.ts?");

/***/ }),

/***/ "./ts/Obj/Player.ts":
/*!**************************!*\
  !*** ./ts/Obj/Player.ts ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _Formats_Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formats/Square */ \"./ts/Obj/Formats/Square.ts\");\n/* harmony import */ var _Shot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shot */ \"./ts/Obj/Shot.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    //public soundShot:HTMLAudioElement;\r\n    function Player(ctx, keybord, animation) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this.O_LEFT = 1;\r\n        _this.O_RIGHT = 2;\r\n        _this.O_UP = 3;\r\n        _this.O_DOWN = 4;\r\n        _this._keyboard = keybord;\r\n        _this._animation = animation;\r\n        _this.orientation = _this.O_RIGHT;\r\n        return _this;\r\n        //this.soundShot = document.createElement('audio');\r\n        //this.soundShot.src =\"\";\r\n    }\r\n    Player.prototype.update = function () {\r\n        this.checkInputs();\r\n    };\r\n    Player.prototype.draw = function () {\r\n        this._ctx.save();\r\n        this._ctx.beginPath();\r\n        this._ctx.rect(this._x, this._y, this._width, this._height);\r\n        //this._ctx.strokeStyle = this._color;\r\n        this._ctx.fillStyle = this._color;\r\n        //this._ctx.stroke();\r\n        this._ctx.fill();\r\n        this._ctx.restore();\r\n    };\r\n    Player.prototype.shoot = function () {\r\n        var shot = new _Shot__WEBPACK_IMPORTED_MODULE_1__[\"Shot\"](this._ctx, this._animation);\r\n        shot.x = this._x + this._width / 2;\r\n        shot.y = this._y + this.height / 2;\r\n        shot.radius = 2;\r\n        shot.color = 'red';\r\n        if (this.orientation == this.O_LEFT)\r\n            shot.dx = -20;\r\n        else if (this.orientation == this.O_RIGHT)\r\n            shot.dx = 20;\r\n        else if (this.orientation == this.O_UP)\r\n            shot.dy = -20;\r\n        else if (this.orientation == this.O_DOWN)\r\n            shot.dy = 20;\r\n        else\r\n            throw new Error(\"The orientation to player obj do not exist\");\r\n        this._animation.addSprite(shot);\r\n    };\r\n    Player.prototype.checkInputs = function () {\r\n        // X movement  \r\n        if (this._keyboard.pressKey(this._keyboard.ARROW_LEFT) && this._x > 0) {\r\n            this._x -= this._dx;\r\n            this.orientation = this.O_LEFT;\r\n        }\r\n        if (this._keyboard.pressKey(this._keyboard.ARROW_RIGHT)) {\r\n            if (this._x + this._width < this._ctx.canvas.width) {\r\n                this.x += this._dx;\r\n                this.orientation = this.O_RIGHT;\r\n            }\r\n        }\r\n        // Y movement\r\n        if (this._keyboard.pressKey(this._keyboard.ARROW_UP) && this._y > 0) {\r\n            this._y -= this._dy;\r\n            this.orientation = this.O_UP;\r\n        }\r\n        if (this._keyboard.pressKey(this._keyboard.ARROW_DOWN)) {\r\n            if (this._y + this._height < this._ctx.canvas.height) {\r\n                this._y += this._dy;\r\n                this.orientation = this.O_DOWN;\r\n            }\r\n        }\r\n        //Need this to access the player obj on the event\r\n        var thisPlayer = this;\r\n        //let thisShotSound = this.soundShot;\r\n        //Space bar interaction\r\n        this._keyboard.clickedKey(this._keyboard.SPACE_BAR, function () {\r\n            thisPlayer.shoot();\r\n        });\r\n    };\r\n    return Player;\r\n}(_Formats_Square__WEBPACK_IMPORTED_MODULE_0__[\"Square\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Player.ts?");

/***/ }),

/***/ "./ts/Obj/Shot.ts":
/*!************************!*\
  !*** ./ts/Obj/Shot.ts ***!
  \************************/
/*! exports provided: Shot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shot\", function() { return Shot; });\n/* harmony import */ var _Formats_Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formats/Ball */ \"./ts/Obj/Formats/Ball.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Shot = /** @class */ (function (_super) {\r\n    __extends(Shot, _super);\r\n    function Shot(ctx, animation) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._animation = animation;\r\n        _this._inBounds = true;\r\n        return _this;\r\n    }\r\n    Shot.prototype.update = function () {\r\n        if (!this._inBounds) {\r\n            this._animation.popSprite(this);\r\n            return;\r\n        }\r\n        this.accelerate();\r\n        this.isInBounds();\r\n    };\r\n    Shot.prototype.isInBounds = function () {\r\n        if (this._x - this._radius > this._ctx.canvas.width ||\r\n            this._x + this._radius < 0 ||\r\n            this._y - this._radius > this._ctx.canvas.height ||\r\n            this._y + this._radius < 0) {\r\n            this._inBounds = false;\r\n        }\r\n        else\r\n            this._inBounds = true;\r\n    };\r\n    Shot.prototype.accelerate = function () {\r\n        //Acelerate the ball\r\n        this._x += this.dx;\r\n        this._y += this.dy;\r\n    };\r\n    Shot.prototype.draw = function () {\r\n        if (this._inBounds) {\r\n            this._ctx.save();\r\n            this._ctx.beginPath();\r\n            this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);\r\n            //this._ctx.strokeStyle = this._color;\r\n            this._ctx.fillStyle = this._color;\r\n            //this._ctx.stroke();\r\n            this._ctx.fill();\r\n            this._ctx.restore();\r\n        }\r\n    };\r\n    return Shot;\r\n}(_Formats_Ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Shot.ts?");

/***/ }),

/***/ "./ts/Utils/RandomMe.ts":
/*!******************************!*\
  !*** ./ts/Utils/RandomMe.ts ***!
  \******************************/
/*! exports provided: randomMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomMe\", function() { return randomMe; });\nfunction randomMe(min, max, negative) {\r\n    if (min > max)\r\n        throw new Error('min can not be higher than max');\r\n    var randomNumber = min + (Math.random() * max);\r\n    if (negative) {\r\n        if (randomNumber < min + Math.random() * max)\r\n            return -randomNumber;\r\n    }\r\n    return randomNumber;\r\n}\r\n\n\n//# sourceURL=webpack:///./ts/Utils/RandomMe.ts?");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/Canvas */ \"./ts/Canvas/Canvas.ts\");\n/* harmony import */ var _Animation_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation/Animation */ \"./ts/Animation/Animation.ts\");\n/* harmony import */ var _Obj_Formats_Ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Obj/Formats/Ball */ \"./ts/Obj/Formats/Ball.ts\");\n/* harmony import */ var _Utils_RandomMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils/RandomMe */ \"./ts/Utils/RandomMe.ts\");\n/* harmony import */ var _Obj_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Obj/Player */ \"./ts/Obj/Player.ts\");\n/* harmony import */ var _KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KeyBoard/KeyBoard */ \"./ts/KeyBoard/KeyBoard.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n//Create a obj for canvas\r\nvar canvas = new _Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"]();\r\nvar keyboard = new _KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_5__[\"KeyBoard\"](document);\r\n//Obj array to pass for the Animator\r\nvar objArray = [];\r\n//Create a bunch of balls and put in objArray;\r\n//createBalls();\r\n//Create the Animation Obj\r\nvar animation = new _Animation_Animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"](objArray, canvas.ctx, keyboard);\r\ncanvas.resizeCanvas(window.innerWidth, window.innerHeight);\r\nanimation.addSprite(createSquare());\r\nanimation.turnOn();\r\nanimation.nextFrame();\r\nwindow.addEventListener('resize', function () {\r\n    canvas.resizeCanvas(window.innerWidth, window.innerHeight);\r\n});\r\nfunction createSquare() {\r\n    var newSquare = new _Obj_Player__WEBPACK_IMPORTED_MODULE_4__[\"Player\"](canvas.ctx, keyboard, animation);\r\n    newSquare.color = 'black';\r\n    newSquare.x = canvas.canvas.width / 2;\r\n    newSquare.y = canvas.canvas.height / 2;\r\n    newSquare.width = 50;\r\n    newSquare.height = 75;\r\n    newSquare.minWidth = 20;\r\n    newSquare.maxWidth = 125;\r\n    newSquare.minHeight = 50;\r\n    newSquare.maxHeight = 150;\r\n    newSquare.dx = 10;\r\n    newSquare.dy = 10;\r\n    return newSquare;\r\n}\r\nfunction createBalls() {\r\n    for (var i = 0; i < 1; i++) {\r\n        var newBall = new _Obj_Formats_Ball__WEBPACK_IMPORTED_MODULE_2__[\"Ball\"](canvas.ctx);\r\n        newBall.radius = Object(_Utils_RandomMe__WEBPACK_IMPORTED_MODULE_3__[\"randomMe\"])(15, 35);\r\n        newBall.x = Object(_Utils_RandomMe__WEBPACK_IMPORTED_MODULE_3__[\"randomMe\"])(0 + newBall.radius, canvas.canvas.width - newBall.radius * 2);\r\n        newBall.y = Object(_Utils_RandomMe__WEBPACK_IMPORTED_MODULE_3__[\"randomMe\"])(0 + newBall.radius, canvas.canvas.height - newBall.radius * 2);\r\n        newBall.dx = 10;\r\n        newBall.dy = 10;\r\n        //newBall.color = colorArray[Math.floor(randomMe(0,colorArray.length))];\r\n        objArray.push(newBall);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./ts/main.ts?");

/***/ })

/******/ });
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\n/* harmony import */ var _KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../KeyBoard/KeyBoard */ \"./ts/KeyBoard/KeyBoard.ts\");\n\r\nvar Animation = /** @class */ (function () {\r\n    function Animation(sprite, ctx, keyboard) {\r\n        this._sprites = sprite;\r\n        this._ctx = ctx;\r\n        this._ctx.canvas.style.cssText = \"background-color: aqua;\";\r\n        this._clearCanvas = true;\r\n        this._keyboard = keyboard;\r\n        this._specialKeysOn = true;\r\n    }\r\n    Animation.prototype.addSprite = function (sprite) {\r\n        this._sprites.push(sprite);\r\n    };\r\n    Animation.prototype.popSprite = function (sprite) {\r\n        var ind = this._sprites.indexOf(sprite);\r\n        this._sprites.splice(ind, 1);\r\n    };\r\n    Animation.prototype.nextFrame = function () {\r\n        var _this = this;\r\n        //Check if this is to be running\r\n        if (!this._on)\r\n            return;\r\n        //Clear the screen\r\n        if (this._clearCanvas)\r\n            this.clearScreen();\r\n        //Update Sprites\r\n        for (var i in this._sprites) {\r\n            this._sprites[i].update();\r\n        }\r\n        //Draw sprites\r\n        for (var i in this._sprites) {\r\n            this._sprites[i].draw();\r\n        }\r\n        if (this._specialKeysOn)\r\n            this.specialKeys();\r\n        //Call  next frame\r\n        requestAnimationFrame(function () { return _this.nextFrame(); });\r\n    };\r\n    Animation.prototype.specialKeys = function () {\r\n        var _this = this;\r\n        this._keyboard.clickedKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_0__[\"KeyBoard\"].R_KEY, function () {\r\n            _this.clearScreen();\r\n        });\r\n        this._keyboard.clickedKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_0__[\"KeyBoard\"].P_KEY, function () {\r\n            if (_this._clearCanvas)\r\n                _this.cleanOff();\r\n        });\r\n        this._keyboard.clickedKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_0__[\"KeyBoard\"].O_KEY, function () {\r\n            if (!_this._clearCanvas)\r\n                _this.cleanOn();\r\n        });\r\n    };\r\n    Animation.prototype.clearScreen = function () {\r\n        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);\r\n    };\r\n    Animation.prototype.cleanOn = function () {\r\n        this._clearCanvas = true;\r\n    };\r\n    Animation.prototype.cleanOff = function () {\r\n        this._clearCanvas = false;\r\n    };\r\n    Animation.prototype.turnOn = function () {\r\n        this._on = true;\r\n        this.nextFrame();\r\n    };\r\n    Animation.prototype.turnOff = function () {\r\n        this._on = false;\r\n    };\r\n    Object.defineProperty(Animation.prototype, \"sprites\", {\r\n        get: function () {\r\n            return this._sprites;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Animation.prototype, \"specialKeysOn\", {\r\n        get: function () {\r\n            return this._specialKeysOn;\r\n        },\r\n        set: function (on) {\r\n            this._specialKeysOn = on;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Animation;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Animation/Animation.ts?");

/***/ }),

/***/ "./ts/Canvas/Canvas.ts":
/*!*****************************!*\
  !*** ./ts/Canvas/Canvas.ts ***!
  \*****************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\nvar Canvas = /** @class */ (function () {\r\n    function Canvas() {\r\n        //Search for canvas element on html file\r\n        this._canvas = document.querySelector('canvas');\r\n        //Test to see if html actually have a canvas element\r\n        //If not, creates one and put after de body begin\r\n        if (this._canvas == null || this._canvas == undefined) {\r\n            this._canvas = document.createElement('canvas');\r\n            document.body.insertAdjacentElement('afterbegin', this._canvas);\r\n        }\r\n        //Get the context 2d of the canvas\r\n        this._ctx = this._canvas.getContext('2d');\r\n        this.defaultWidth = 600;\r\n        this.defaultHeight = 600;\r\n    }\r\n    /**\r\n     * Resize the canvas with the given values\r\n     * @param width The width of canvas; Default = 600 (can be changed)\r\n     * @param height The height of canvas; Default = 600 (can be changed)\r\n     */\r\n    Canvas.prototype.resizeCanvas = function (width, height) {\r\n        if (width === void 0) { width = this.defaultWidth; }\r\n        if (height === void 0) { height = this.defaultHeight; }\r\n        this._canvas.width = width;\r\n        this._canvas.height = height;\r\n    };\r\n    Object.defineProperty(Canvas.prototype, \"canvas\", {\r\n        get: function () {\r\n            return this._canvas;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Canvas.prototype, \"ctx\", {\r\n        get: function () {\r\n            return this._ctx;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Canvas;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Canvas/Canvas.ts?");

/***/ }),

/***/ "./ts/KeyBoard/KeyBoard.ts":
/*!*********************************!*\
  !*** ./ts/KeyBoard/KeyBoard.ts ***!
  \*********************************/
/*! exports provided: KeyBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyBoard\", function() { return KeyBoard; });\nvar KeyBoard = /** @class */ (function () {\r\n    function KeyBoard(element) {\r\n        this._pressKeys = [];\r\n        this._clicked = [];\r\n        this._clickFunction = [];\r\n        var keyboard = this;\r\n        element.addEventListener('keydown', function (event) {\r\n            var key = event.keyCode;\r\n            keyboard._pressKeys[key] = true;\r\n            if (keyboard._clickFunction[key] &&\r\n                !keyboard._clicked[key]) {\r\n                keyboard._clicked[key] = true;\r\n                keyboard._clickFunction[key]();\r\n                //console.log(key);\r\n            }\r\n        });\r\n        element.addEventListener('keyup', function (event) {\r\n            keyboard._pressKeys[event.keyCode] = false;\r\n            keyboard._clicked[event.keyCode] = false;\r\n        });\r\n    }\r\n    /**\r\n     * Use for continues press od a key\r\n     * @param key The actual key, use static attribute of this class to get them\r\n     */\r\n    KeyBoard.prototype.pressKey = function (key) {\r\n        return this._pressKeys[key];\r\n    };\r\n    /**\r\n     * Use if you just want one click of the key\r\n     * @param key The actual key, use static attribute of this class to get them\r\n     * @param callback The function that will be executed when the key be pressed\r\n     */\r\n    KeyBoard.prototype.clickedKey = function (key, callback) {\r\n        this._clickFunction[key] = callback;\r\n    };\r\n    //keys\r\n    KeyBoard.SPACE_BAR = 32;\r\n    KeyBoard.ARROW_LEFT = 37;\r\n    KeyBoard.ARROW_UP = 38;\r\n    KeyBoard.ARROW_RIGHT = 39;\r\n    KeyBoard.ARROW_DOWN = 40;\r\n    KeyBoard.G_KEY = 71;\r\n    KeyBoard.O_KEY = 79;\r\n    KeyBoard.P_KEY = 80;\r\n    KeyBoard.R_KEY = 82;\r\n    KeyBoard.PLUS_NUMKEY = 107;\r\n    KeyBoard.MINUS_NUMKEY = 109;\r\n    return KeyBoard;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/KeyBoard/KeyBoard.ts?");

/***/ }),

/***/ "./ts/Obj/Formats/Ball.ts":
/*!********************************!*\
  !*** ./ts/Obj/Formats/Ball.ts ***!
  \********************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./ts/Obj/Formats/Entity.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * Class to represent a Ball\r\n *\r\n */\r\nvar Ball = /** @class */ (function (_super) {\r\n    __extends(Ball, _super);\r\n    /**\r\n     * contructor for the class ball; x,y,dx,dy set to zero,\r\n     * radius set to 10, color is 'black'\r\n     * @param ctx the context where de ball will be draw\r\n     */\r\n    function Ball(ctx) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._x = 0;\r\n        _this._y = 0;\r\n        _this._dx = 0;\r\n        _this._dy = 0;\r\n        _this._radius = 10;\r\n        _this._color = 'black';\r\n        return _this;\r\n    }\r\n    Ball.prototype.update = function () {\r\n        console.log(\"Override this method to update\");\r\n    };\r\n    Ball.prototype.draw = function () {\r\n        console.log(\"Override this method to update\");\r\n    };\r\n    Object.defineProperty(Ball.prototype, \"radius\", {\r\n        //Get's & Set's\r\n        get: function () {\r\n            return this._radius;\r\n        },\r\n        set: function (radius) {\r\n            this._radius = radius;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Ball;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Formats/Ball.ts?");

/***/ }),

/***/ "./ts/Obj/Formats/Entity.ts":
/*!**********************************!*\
  !*** ./ts/Obj/Formats/Entity.ts ***!
  \**********************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\nvar Entity = /** @class */ (function () {\r\n    /**\r\n     * contructor for the class;\r\n     * x,y,dx,dy set to zero,\r\n     * color is 'black'\r\n     * @param ctx the context where de Obj will be draw\r\n     */\r\n    function Entity(ctx) {\r\n        this._ctx = ctx;\r\n        this._x = 0;\r\n        this._y = 0;\r\n        this._dx = 0;\r\n        this._dy = 0;\r\n        this._color = 'black';\r\n    }\r\n    Entity.prototype.update = function () {\r\n        console.log('Override this method for Update your obj');\r\n    };\r\n    Entity.prototype.draw = function () {\r\n        console.log('Override this method for Draw your obj');\r\n    };\r\n    Object.defineProperty(Entity.prototype, \"x\", {\r\n        //Get's & Set's\r\n        get: function () {\r\n            return this._x;\r\n        },\r\n        set: function (x) {\r\n            this._x = x;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Entity.prototype, \"y\", {\r\n        get: function () {\r\n            return this._y;\r\n        },\r\n        set: function (y) {\r\n            this._y = y;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Entity.prototype, \"dx\", {\r\n        get: function () {\r\n            return this._dx;\r\n        },\r\n        set: function (dx) {\r\n            this._dx = dx;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Entity.prototype, \"dy\", {\r\n        get: function () {\r\n            return this._dy;\r\n        },\r\n        set: function (dy) {\r\n            this._dy = dy;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Entity.prototype, \"color\", {\r\n        get: function () {\r\n            return this._color;\r\n        },\r\n        set: function (color) {\r\n            this._color = color;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Entity;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Formats/Entity.ts?");

/***/ }),

/***/ "./ts/Obj/Formats/Square.ts":
/*!**********************************!*\
  !*** ./ts/Obj/Formats/Square.ts ***!
  \**********************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./ts/Obj/Formats/Entity.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Square = /** @class */ (function (_super) {\r\n    __extends(Square, _super);\r\n    /**\r\n     * contructor for the class;\r\n     * x,y,dx,dy set to zero,\r\n     * color is 'black'\r\n     * @param ctx the context where de Obj will be draw\r\n     */\r\n    function Square(ctx) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._width = 50;\r\n        _this._height = 50;\r\n        _this._maxHeight = 125;\r\n        _this._minHeight = 20;\r\n        _this._maxWidth = 125;\r\n        _this._minWidth = 20;\r\n        return _this;\r\n    }\r\n    Square.prototype.update = function () {\r\n        console.log('Override this method to implement update');\r\n    };\r\n    Square.prototype.draw = function () {\r\n        console.log('Override this method to implement draw');\r\n    };\r\n    Object.defineProperty(Square.prototype, \"width\", {\r\n        get: function () {\r\n            return this._width;\r\n        },\r\n        set: function (width) {\r\n            this._width = width;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"height\", {\r\n        get: function () {\r\n            return this._height;\r\n        },\r\n        set: function (height) {\r\n            this._height = height;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"maxHeight\", {\r\n        get: function () {\r\n            return this._maxHeight;\r\n        },\r\n        set: function (maxHeight) {\r\n            this._maxHeight = maxHeight;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"minHeight\", {\r\n        get: function () {\r\n            return this._minHeight;\r\n        },\r\n        set: function (minHeight) {\r\n            this._minHeight = minHeight;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"maxWidth\", {\r\n        get: function () {\r\n            return this._maxWidth;\r\n        },\r\n        set: function (maxWidth) {\r\n            this._maxWidth = maxWidth;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Square.prototype, \"minWidth\", {\r\n        get: function () {\r\n            return this._minWidth;\r\n        },\r\n        set: function (minWidth) {\r\n            this._minWidth = minWidth;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Square;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Formats/Square.ts?");

/***/ }),

/***/ "./ts/Obj/Player.ts":
/*!**************************!*\
  !*** ./ts/Obj/Player.ts ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _Formats_Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formats/Square */ \"./ts/Obj/Formats/Square.ts\");\n/* harmony import */ var _Shot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shot */ \"./ts/Obj/Shot.ts\");\n/* harmony import */ var _KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../KeyBoard/KeyBoard */ \"./ts/KeyBoard/KeyBoard.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    //public soundShot:HTMLAudioElement;\r\n    function Player(ctx, keybord, animation) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._keyboard = keybord;\r\n        _this._animation = animation;\r\n        _this.orientation = Player.O_RIGHT;\r\n        return _this;\r\n    }\r\n    Player.prototype.update = function () {\r\n        this.checkInputs();\r\n    };\r\n    Player.prototype.draw = function () {\r\n        this._ctx.save();\r\n        this._ctx.beginPath();\r\n        this._ctx.rect(this._x, this._y, this._width, this._height);\r\n        //this._ctx.strokeStyle = this._color;\r\n        this._ctx.fillStyle = this._color;\r\n        //this._ctx.stroke();\r\n        this._ctx.fill();\r\n        this._ctx.restore();\r\n    };\r\n    Player.prototype.shoot = function () {\r\n        var shot = new _Shot__WEBPACK_IMPORTED_MODULE_1__[\"Shot\"](this._ctx, this._animation);\r\n        shot.x = this._x + this._width / 2;\r\n        shot.y = this._y + this.height / 2;\r\n        shot.radius = 2;\r\n        shot.color = 'red';\r\n        if (this.orientation == Player.O_LEFT)\r\n            shot.dx = -20;\r\n        else if (this.orientation == Player.O_RIGHT)\r\n            shot.dx = 20;\r\n        else if (this.orientation == Player.O_UP)\r\n            shot.dy = -20;\r\n        else if (this.orientation == Player.O_DOWN)\r\n            shot.dy = 20;\r\n        else\r\n            throw new Error(\"The orientation to player obj do not exist\");\r\n        this._animation.addSprite(shot);\r\n    };\r\n    Player.prototype.checkInputs = function () {\r\n        var _this = this;\r\n        // X movement  \r\n        if (this._keyboard.pressKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_2__[\"KeyBoard\"].ARROW_LEFT) && this._x > 0) {\r\n            this._x -= this._dx;\r\n            this.orientation = Player.O_LEFT;\r\n        }\r\n        if (this._keyboard.pressKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_2__[\"KeyBoard\"].ARROW_RIGHT)) {\r\n            if (this._x + this._width < this._ctx.canvas.width) {\r\n                this.x += this._dx;\r\n                this.orientation = Player.O_RIGHT;\r\n            }\r\n        }\r\n        // Y movement\r\n        if (this._keyboard.pressKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_2__[\"KeyBoard\"].ARROW_UP) && this._y > 0) {\r\n            this._y -= this._dy;\r\n            this.orientation = Player.O_UP;\r\n        }\r\n        if (this._keyboard.pressKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_2__[\"KeyBoard\"].ARROW_DOWN)) {\r\n            if (this._y + this._height < this._ctx.canvas.height) {\r\n                this._y += this._dy;\r\n                this.orientation = Player.O_DOWN;\r\n            }\r\n        }\r\n        //Space bar interaction\r\n        // Use Arrow function here, that way\r\n        // no variable is needed to access the Player instance\r\n        this._keyboard.clickedKey(_KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_2__[\"KeyBoard\"].SPACE_BAR, function () {\r\n            _this.shoot();\r\n        });\r\n    };\r\n    Player.O_LEFT = 1;\r\n    Player.O_RIGHT = 2;\r\n    Player.O_UP = 3;\r\n    Player.O_DOWN = 4;\r\n    return Player;\r\n}(_Formats_Square__WEBPACK_IMPORTED_MODULE_0__[\"Square\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Player.ts?");

/***/ }),

/***/ "./ts/Obj/Shot.ts":
/*!************************!*\
  !*** ./ts/Obj/Shot.ts ***!
  \************************/
/*! exports provided: Shot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shot\", function() { return Shot; });\n/* harmony import */ var _Formats_Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formats/Ball */ \"./ts/Obj/Formats/Ball.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Shot = /** @class */ (function (_super) {\r\n    __extends(Shot, _super);\r\n    function Shot(ctx, animation) {\r\n        var _this = _super.call(this, ctx) || this;\r\n        _this._animation = animation;\r\n        _this._inBounds = true;\r\n        return _this;\r\n    }\r\n    Shot.prototype.update = function () {\r\n        if (!this._inBounds) {\r\n            this._animation.popSprite(this);\r\n            return;\r\n        }\r\n        this.accelerate();\r\n        this.isInBounds();\r\n    };\r\n    /**\r\n     * Check to see if the shoot still in Bounds (inside of Canvas)\r\n     */\r\n    Shot.prototype.isInBounds = function () {\r\n        if (this._x - this._radius > this._ctx.canvas.width ||\r\n            this._x + this._radius < 0 ||\r\n            this._y - this._radius > this._ctx.canvas.height ||\r\n            this._y + this._radius < 0) {\r\n            this._inBounds = false;\r\n        }\r\n    };\r\n    Shot.prototype.accelerate = function () {\r\n        //Acelerate the ball\r\n        this._x += this.dx;\r\n        this._y += this.dy;\r\n    };\r\n    Shot.prototype.draw = function () {\r\n        if (this._inBounds) {\r\n            this._ctx.save();\r\n            this._ctx.beginPath();\r\n            this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);\r\n            //this._ctx.strokeStyle = this._color;\r\n            this._ctx.fillStyle = this._color;\r\n            //this._ctx.stroke();\r\n            this._ctx.fill();\r\n            this._ctx.restore();\r\n        }\r\n    };\r\n    return Shot;\r\n}(_Formats_Ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ts/Obj/Shot.ts?");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/Canvas */ \"./ts/Canvas/Canvas.ts\");\n/* harmony import */ var _Animation_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation/Animation */ \"./ts/Animation/Animation.ts\");\n/* harmony import */ var _Obj_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Obj/Player */ \"./ts/Obj/Player.ts\");\n/* harmony import */ var _KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyBoard/KeyBoard */ \"./ts/KeyBoard/KeyBoard.ts\");\n\r\n\r\n\r\n\r\n//Create a obj for canvas\r\nvar canvas = new _Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"]();\r\nvar keyboard = new _KeyBoard_KeyBoard__WEBPACK_IMPORTED_MODULE_3__[\"KeyBoard\"](document);\r\n//Obj array to pass for the Animator\r\nvar objArray = [];\r\n//Create the Animation Obj\r\nvar animation = new _Animation_Animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"](objArray, canvas.ctx, keyboard);\r\n//You can pass the weight and height that you want to resizeCanvas\r\n//Pass nothing and the Default value is 600x600\r\ncanvas.resizeCanvas();\r\nanimation.addSprite(createSquare());\r\nanimation.turnOn();\r\nconsole.log(\"Some Special Keys:\\n'P': disable the clean of canvas\\n'O' enable the clean of canvas\\n'R' clean the canvas once\");\r\nanimation.nextFrame();\r\n//Discoment this to resize the canvas for full \r\n//every time the window of browser resize\r\n/*\r\nwindow.addEventListener('resize',function(){\r\n    canvas.resizeCanvas(window.innerWidth,window.innerHeight);\r\n});*/\r\nfunction createSquare() {\r\n    var newSquare = new _Obj_Player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"](canvas.ctx, keyboard, animation);\r\n    newSquare.color = 'black';\r\n    newSquare.x = canvas.canvas.width / 2;\r\n    newSquare.y = canvas.canvas.height / 2;\r\n    newSquare.width = 50;\r\n    newSquare.height = 75;\r\n    newSquare.minWidth = 20;\r\n    newSquare.maxWidth = 125;\r\n    newSquare.minHeight = 50;\r\n    newSquare.maxHeight = 150;\r\n    newSquare.dx = 10;\r\n    newSquare.dy = 10;\r\n    return newSquare;\r\n}\r\n\n\n//# sourceURL=webpack:///./ts/main.ts?");

/***/ })

/******/ });
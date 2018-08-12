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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector_1 = __webpack_require__(/*! ./vector */ \"./src/vector.ts\");\nvar v1 = new vector_1.Vector(70, 120);\nconsole.log(v1);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Vector = /** @class */ (function () {\n    function Vector(vectorX, vectorY) {\n        this.x = 0;\n        this.y = 0;\n        this.x = vectorX;\n        this.y = vectorY;\n    }\n    Vector.prototype.getAngle = function () {\n        return Math.atan2(this.y, this.x);\n    };\n    Vector.prototype.getLength = function () {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    };\n    Vector.prototype.setAngle = function (angle) {\n        var length = this.getLength();\n        this.x = Math.cos(angle) * length;\n        this.y = Math.sin(angle) * length;\n        return this;\n    };\n    Vector.prototype.setLength = function (length) {\n        var angle = this.getAngle();\n        this.x = Math.cos(angle) * length;\n        this.y = Math.sin(angle) * length;\n        return this;\n    };\n    Vector.prototype.add = function (vector) {\n        return new Vector(this.x + vector.x, this.y + vector.y);\n    };\n    Vector.prototype.substract = function (vector) {\n        return new Vector(this.x - vector.x, this.y - vector.y);\n    };\n    Vector.prototype.substractFrom = function (vector) {\n        return new Vector(vector.x - this.x, vector.y - this.y);\n    };\n    Vector.prototype.multiply = function (value) {\n        return new Vector(this.x * value, this.y * value);\n    };\n    Vector.prototype.divide = function (value) {\n        return new Vector(this.x / value, this.y / value);\n    };\n    Vector.prototype.clamp = function (min, max) {\n        return new Vector(this.x = (this.x < min.x) ? min.x : (this.x > max.x) ? max.x : this.x, this.y = (this.y < min.y) ? min.y : (this.y > max.y) ? max.y : this.y);\n    };\n    Vector.prototype.lerp = function (vector, coef) {\n        if (coef === void 0) { coef = 0; }\n        return new Vector(this.x + (vector.x - this.x) * coef, this.y + (vector.y - this.y) * coef);\n    };\n    return Vector;\n}());\nexports.Vector = Vector;\n;\n\n\n//# sourceURL=webpack:///./src/vector.ts?");

/***/ })

/******/ });
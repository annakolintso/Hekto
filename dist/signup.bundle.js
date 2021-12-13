/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/signup.js":
/*!**************************!*\
  !*** ./src/js/signup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_signup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../style/signup.scss */ \"./src/style/signup.scss\");\n\nvar form = document.querySelector('.signup__form');\nvar inputs = form.querySelectorAll('.form-group__input');\nvar successText = document.querySelector('.signup__success');\n\nvar validationField = function validationField(el) {\n  var formGroup = el.closest('.form-group');\n  var result = true;\n  var re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  var invalidEmail = el.getAttribute('name') === 'email' && el.value && !re.test(el.value);\n  formGroup.classList.remove('has-error');\n  formGroup.classList.remove(\"required\");\n  formGroup.classList.remove(\"pattern\");\n\n  if (el.value === '' || invalidEmail) {\n    formGroup.classList.add('has-error');\n    formGroup.classList.add(invalidEmail ? \"pattern\" : \"required\");\n    result = false;\n  }\n\n  return result;\n};\n\nvar validation = function validation() {\n  var countError = 0;\n  inputs.forEach(function (el) {\n    var validateField = validationField(el);\n    !validateField && countError++;\n  });\n  return !countError;\n};\n\nvar getFormData = function getFormData() {\n  var data = {};\n  inputs.forEach(function (el) {\n    var key = el.name;\n    var value = el.value;\n    data[key] = value;\n  });\n  return data;\n};\n\nvar clearForm = function clearForm() {\n  inputs.forEach(function (el) {\n    return el.value = '';\n  });\n};\n\ninputs.forEach(function (el) {\n  el.addEventListener('blur', function () {\n    validationField(el);\n  });\n});\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var validated = validation();\n  var formData = getFormData();\n\n  if (validated) {\n    fetch('http://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json;charset=utf-8'\n      },\n      body: JSON.stringify(formData)\n    }).then(function () {\n      document.cookie = 'formData=' + JSON.stringify(formData);\n      successText.classList.add('active');\n      setTimeout(function () {\n        successText.classList.remove('active');\n      }, 2000);\n      clearForm();\n    })[\"catch\"](function (err) {\n      console.error(err);\n    });\n  }\n});\n\n//# sourceURL=webpack://hekto/./src/js/signup.js?");

/***/ }),

/***/ "./src/style/signup.scss":
/*!*******************************!*\
  !*** ./src/style/signup.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hekto/./src/style/signup.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/signup.js");
/******/ 	
/******/ })()
;
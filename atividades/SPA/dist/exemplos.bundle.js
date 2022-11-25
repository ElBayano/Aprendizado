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

/***/ "./src/Conteudo.js":
/*!*************************!*\
  !*** ./src/Conteudo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Conteudo\": () => (/* binding */ Conteudo)\n/* harmony export */ });\nclass Conteudo {\n    constructor(tittle, content){\n        this.tittle = tittle\n        this.content = content\n    }\n}\n\n\n\n//# sourceURL=webpack://spa/./src/Conteudo.js?");

/***/ }),

/***/ "./src/exemplos.js":
/*!*************************!*\
  !*** ./src/exemplos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exemplos\": () => (/* binding */ exemplos)\n/* harmony export */ });\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conteudo */ \"./src/Conteudo.js\");\n\n\nconst titulo = \"Exemplos de Single Page Applications\"\nconst conteudo = `<p>As SPAs são um tipo de implementação bastante comum em redes sociais, produtos de entretenimento (como streaming de vídeo e música), ferramentas de comunicação e produtividade, etc.</p>\n<p>É possível notar o seguinte padrão: a incapacidade de indexação do conteúdo de Single Page Applications em mecanismos de busca torna seu uso restrito a produtos que não dependam de SEO (Search Engine Optimization) para ter sucesso.</p>\n<ul>\n  <li>Trello;</li>\n  <li>Netflix;</li>\n  <li>Slack;</li>\n  <li>Discord;</li>\n  <li>Facebook;</li>\n  <li>Youtube;</li>\n  <li>Gmail;</li>\n  <li>Twitter;</li>\n  <li>Evernote;</li>\n  <li>Pinterest;</li>\n  <li>Google Maps.</li>\n</ul>`\nconst exemplos = new _Conteudo__WEBPACK_IMPORTED_MODULE_0__.Conteudo(titulo, conteudo)\n\n\n//# sourceURL=webpack://spa/./src/exemplos.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/exemplos.js");
/******/ 	
/******/ })()
;
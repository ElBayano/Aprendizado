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

/***/ "./src/definicao.js":
/*!**************************!*\
  !*** ./src/definicao.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"definicao\": () => (/* binding */ definicao)\n/* harmony export */ });\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conteudo */ \"./src/Conteudo.js\");\n\n\nconst titulo = \"O que é SPA\"\n\nconst conteudo = `\n<p>Chamamos de single page application (SPA) as aplicações web em que o usuário interage com uma única página. Esta página tem as informações de seu body dinamicamente reescritas para exibir informação atualizada.</p>\n<p>Uma vez baixada a Single Page Application, o arquivo da página conterá as informações de HTML, JavaScript e CSS para responder a todas as possíveis interações do usuário, necessitando apenas receber do servidor o conteúdo a ser exibido.</p>\n<p>Quando o usuário envia uma solicitação ao web server, os dados recebidos são utilizados para atualizar componentes da página do app com a nova informação. Essa comunicação é feita através de uma API, como XMLHttpRequest ou Fetch.</p>\n<p>Interagir com uma Single Page Application traz uma sensação de unidade e fluidez à experiência de usuário, comparável àquela encontrada em apps nativos — um notório ganho em Experiência do Usuário.</p>\n<p>Além disso, é menos complexo responder a numerosas chamadas de API do que enviar páginas constantemente a cada usuário.</p>\n`\n\nconst definicao = new _Conteudo__WEBPACK_IMPORTED_MODULE_0__.Conteudo(titulo, conteudo)\n\n\n\n//# sourceURL=webpack://spa/./src/definicao.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/definicao.js");
/******/ 	
/******/ })()
;
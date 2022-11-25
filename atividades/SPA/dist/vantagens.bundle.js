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

/***/ "./src/vantagens.js":
/*!**************************!*\
  !*** ./src/vantagens.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vantagens\": () => (/* binding */ vantagens)\n/* harmony export */ });\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conteudo */ \"./src/Conteudo.js\");\n\n\nconst titulo = \"Vantagens das SPAs\"\nconst conteudo = `\n<p>Para os produtos pouco afetados pelas limitações de uma aplicação Single Page, as vantagens trazidas por este tipo de implementação são bastante interessantes. Confira:</p>\n<ul>\n<li><p>Performance: após o carregamento inicial, o tráfego de dados entre o servidor e o usuário é bastante reduzido, pois a página contém todas as informações necessárias para exibir os dados enviados em pacotes padronizados e simplificados. O tamanho reduzido dos dados trafegados ajuda a garantir tempos de resposta baixos;</p></li>\n<li>\n<p>Experiência do Usuário: para o usuário, interagir com uma superfície persistente, porém dinâmica, oferece uma experiência de uso intuitiva e de baixa fricção. A persistência da superfície do app traz a sensação de coesão e imersão.</p>\n<p>Além disso, permite que o usuário construa familiaridade com a interface rapidamente;</p>\n</li>\n<li><p>Data caching: uma vez que tenha sido baixada, a página pode ser armazenada no cache do navegador. Isso agiliza o carregamento da aplicação, pois é somente necessário solicitar o conteúdo atualizado ao server. Além disso, páginas armazenadas no cache podem funcionar offline a partir dos dados já recebidos;</p></li>\n<li><p>Agilidade de desenvolvimento: SPAs são desenvolvidas em frameworks conhecidos e requerem menos trabalho de implementação e testes, já que se trata de uma única página. Pelo seu tamanho enxuto e por serem baseadas em frameworks muito populares, as SPAs não apresentam grandes desafios de debugging.</p></li>\n</ul>`\nconst vantagens = new _Conteudo__WEBPACK_IMPORTED_MODULE_0__.Conteudo(titulo, conteudo)\n\n\n//# sourceURL=webpack://spa/./src/vantagens.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/vantagens.js");
/******/ 	
/******/ })()
;
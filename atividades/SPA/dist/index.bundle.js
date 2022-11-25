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

/***/ }),

/***/ "./src/desvantagens.js":
/*!*****************************!*\
  !*** ./src/desvantagens.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"desvantagens\": () => (/* binding */ desvantagens)\n/* harmony export */ });\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conteudo */ \"./src/Conteudo.js\");\n\n\nconst titulo = \"Desvantagens\"\nconst conteudo = `<p>Os mesmos fatores que tornam as SPAs uma escolha inteligente para muitas aplicações, também podem representar obstáculos. Confira:</p>\n<ul>\n<li><p>SEO: como as SPAs atualizam a mesma página para exibir diversas informações, não é gerada uma URL para cada conteúdo. Sem URLs únicas, os mecanismos de busca não conseguem detectar ou indexar este conteúdo;</p></li>\n<li><p>Tempo de carregamento: SPAs costumam ter um carregamento inicial ligeiramente mais lento do que páginas estáticas. Além da diferença no tamanho do arquivo, a quantidade de conteúdo a ser renderizado pode significar um tempo de carregamento maior, mesmo quando a página está armazenada no cache.</p></li>\n</ul>\nTambém é importante lembrar que SPAs utilizam JavaScript, portanto, requerem que o usuário tenha o recurso habilitado em seu sistema.\n`\nconst desvantagens = new _Conteudo__WEBPACK_IMPORTED_MODULE_0__.Conteudo(titulo, conteudo)\n\n\n//# sourceURL=webpack://spa/./src/desvantagens.js?");

/***/ }),

/***/ "./src/exemplos.js":
/*!*************************!*\
  !*** ./src/exemplos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exemplos\": () => (/* binding */ exemplos)\n/* harmony export */ });\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conteudo */ \"./src/Conteudo.js\");\n\n\nconst titulo = \"Exemplos de Single Page Applications\"\nconst conteudo = `<p>As SPAs são um tipo de implementação bastante comum em redes sociais, produtos de entretenimento (como streaming de vídeo e música), ferramentas de comunicação e produtividade, etc.</p>\n<p>É possível notar o seguinte padrão: a incapacidade de indexação do conteúdo de Single Page Applications em mecanismos de busca torna seu uso restrito a produtos que não dependam de SEO (Search Engine Optimization) para ter sucesso.</p>\n<ul>\n  <li>Trello;</li>\n  <li>Netflix;</li>\n  <li>Slack;</li>\n  <li>Discord;</li>\n  <li>Facebook;</li>\n  <li>Youtube;</li>\n  <li>Gmail;</li>\n  <li>Twitter;</li>\n  <li>Evernote;</li>\n  <li>Pinterest;</li>\n  <li>Google Maps.</li>\n</ul>`\nconst exemplos = new _Conteudo__WEBPACK_IMPORTED_MODULE_0__.Conteudo(titulo, conteudo)\n\n\n//# sourceURL=webpack://spa/./src/exemplos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definicao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definicao */ \"./src/definicao.js\");\n/* harmony import */ var _exemplos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exemplos */ \"./src/exemplos.js\");\n/* harmony import */ var _vantagens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vantagens */ \"./src/vantagens.js\");\n/* harmony import */ var _desvantagens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desvantagens */ \"./src/desvantagens.js\");\n/* harmony import */ var _paginaNaoEncontrada__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginaNaoEncontrada */ \"./src/paginaNaoEncontrada.js\");\n\n\n\n\n\n\n\n\nconst menu = window.document.querySelector(\".menu\")\nconst header = window.document.querySelector(\"header\")\n\nmenu.addEventListener(\"click\", ()=> {\n    let click = header.classList.toggle(\"on\")\n})\n\n\nwindow.addEventListener(\"load\", ()=>{console.log(\"hash carregada\")})\nwindow.addEventListener(\"hashchange\", refresh)\n\n\n\nfunction refresh() {\n    const conteudo = window.document.querySelector(\"#content\")\n    const titulo = window.document.querySelector(\"main h1\")\n    const hash = window.location.hash\n    switch(hash) {\n        case \"#definicao\": titulo.innerHTML = _definicao__WEBPACK_IMPORTED_MODULE_0__.definicao.tittle\n            conteudo.innerHTML = _definicao__WEBPACK_IMPORTED_MODULE_0__.definicao.content\n            console.log(\"Definição\")\n            break\n        case \"#exemplos\": titulo.innerHTML = _exemplos__WEBPACK_IMPORTED_MODULE_1__.exemplos.tittle\n            conteudo.innerHTML = _exemplos__WEBPACK_IMPORTED_MODULE_1__.exemplos.content\n            console.log(\"Exemplos\")\n            break\n        case \"#vantagens\": titulo.innerHTML = _vantagens__WEBPACK_IMPORTED_MODULE_2__.vantagens.tittle\n            conteudo.innerHTML = _vantagens__WEBPACK_IMPORTED_MODULE_2__.vantagens.content\n            console.log(\"Vantagens\")\n            break\n        case \"#desvantagens\": titulo.innerHTML = _desvantagens__WEBPACK_IMPORTED_MODULE_3__.desvantagens.tittle\n        conteudo.innerHTML = _desvantagens__WEBPACK_IMPORTED_MODULE_3__.desvantagens.content\n        console.log(\"Desvantagens\")\n            break\n        default: titulo.innerHTML = _paginaNaoEncontrada__WEBPACK_IMPORTED_MODULE_4__.paginaNaoEncontrada.tittle\n        conteudo.innerHTML = _paginaNaoEncontrada__WEBPACK_IMPORTED_MODULE_4__.paginaNaoEncontrada.content\n        console.log(\"Erro\")\n    }\n}\n\n\n//# sourceURL=webpack://spa/./src/index.js?");

/***/ }),

/***/ "./src/paginaNaoEncontrada.js":
/*!************************************!*\
  !*** ./src/paginaNaoEncontrada.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paginaNaoEncontrada\": () => (/* binding */ paginaNaoEncontrada)\n/* harmony export */ });\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conteudo */ \"./src/Conteudo.js\");\n\n\nconst titulo = \"Erro 404\"\nconst conteudo = `<h3>Pagina não encontrada.</h3>\n<p>Por favor, verifique se o link da página está correto</p>`\nconst paginaNaoEncontrada = new _Conteudo__WEBPACK_IMPORTED_MODULE_0__.Conteudo(titulo, conteudo)\n\n\n//# sourceURL=webpack://spa/./src/paginaNaoEncontrada.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
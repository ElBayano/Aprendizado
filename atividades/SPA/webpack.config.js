const path = require("path")

module.exports = {
    entry: {
        index: "./src/index.js",
        definicao: "./src/definicao.js",
        exemplos: "./src/exemplos.js",
        vantagens: "./src/vantagens.js",
        desvantagens: "./src/desvantagens.js",
        Conteudo: "./src/Conteudo.js",
        notFund: "./src/paginaNaoEncontrada.js"

    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        index: "index.html",
        port: 9000,
        watchContentBase: true,
        liveReload: true
    },
}
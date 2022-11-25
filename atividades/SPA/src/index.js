import { definicao } from './definicao'
import { exemplos } from './exemplos'
import {vantagens} from './vantagens'
import { desvantagens } from './desvantagens'
import { paginaNaoEncontrada } from './paginaNaoEncontrada'



const menu = window.document.querySelector(".menu")
const header = window.document.querySelector("header")

menu.addEventListener("click", ()=> {
    let click = header.classList.toggle("on")
})


window.addEventListener("load", ()=>{console.log("hash carregada")})
window.addEventListener("hashchange", refresh)



function refresh() {
    const conteudo = window.document.querySelector("#content")
    const titulo = window.document.querySelector("main h1")
    const hash = window.location.hash
    switch(hash) {
        case "#definicao": titulo.innerHTML = definicao.tittle
            conteudo.innerHTML = definicao.content
            console.log("Definição")
            break
        case "#exemplos": titulo.innerHTML = exemplos.tittle
            conteudo.innerHTML = exemplos.content
            console.log("Exemplos")
            break
        case "#vantagens": titulo.innerHTML = vantagens.tittle
            conteudo.innerHTML = vantagens.content
            console.log("Vantagens")
            break
        case "#desvantagens": titulo.innerHTML = desvantagens.tittle
        conteudo.innerHTML = desvantagens.content
        console.log("Desvantagens")
            break
        default: titulo.innerHTML = paginaNaoEncontrada.tittle
        conteudo.innerHTML = paginaNaoEncontrada.content
        console.log("Erro")
    }
}

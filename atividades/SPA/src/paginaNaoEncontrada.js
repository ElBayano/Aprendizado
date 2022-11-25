import { Conteudo } from "./Conteudo"

const titulo = "Erro 404"
const conteudo = `<h3>Pagina não encontrada.</h3>
<p>Por favor, verifique se o link da página está correto</p>`
const paginaNaoEncontrada = new Conteudo(titulo, conteudo)
export {paginaNaoEncontrada}
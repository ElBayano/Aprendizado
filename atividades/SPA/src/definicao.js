import { Conteudo } from "./Conteudo"

const titulo = "O que é SPA"

const conteudo = `
<p>Chamamos de single page application (SPA) as aplicações web em que o usuário interage com uma única página. Esta página tem as informações de seu body dinamicamente reescritas para exibir informação atualizada.</p>
<p>Uma vez baixada a Single Page Application, o arquivo da página conterá as informações de HTML, JavaScript e CSS para responder a todas as possíveis interações do usuário, necessitando apenas receber do servidor o conteúdo a ser exibido.</p>
<p>Quando o usuário envia uma solicitação ao web server, os dados recebidos são utilizados para atualizar componentes da página do app com a nova informação. Essa comunicação é feita através de uma API, como XMLHttpRequest ou Fetch.</p>
<p>Interagir com uma Single Page Application traz uma sensação de unidade e fluidez à experiência de usuário, comparável àquela encontrada em apps nativos — um notório ganho em Experiência do Usuário.</p>
<p>Além disso, é menos complexo responder a numerosas chamadas de API do que enviar páginas constantemente a cada usuário.</p>
`

const definicao = new Conteudo(titulo, conteudo)

export {definicao}
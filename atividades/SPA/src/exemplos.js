import { Conteudo } from "./Conteudo"

const titulo = "Exemplos de Single Page Applications"
const conteudo = `<p>As SPAs são um tipo de implementação bastante comum em redes sociais, produtos de entretenimento (como streaming de vídeo e música), ferramentas de comunicação e produtividade, etc.</p>
<p>É possível notar o seguinte padrão: a incapacidade de indexação do conteúdo de Single Page Applications em mecanismos de busca torna seu uso restrito a produtos que não dependam de SEO (Search Engine Optimization) para ter sucesso.</p>
<ul>
  <li>Trello;</li>
  <li>Netflix;</li>
  <li>Slack;</li>
  <li>Discord;</li>
  <li>Facebook;</li>
  <li>Youtube;</li>
  <li>Gmail;</li>
  <li>Twitter;</li>
  <li>Evernote;</li>
  <li>Pinterest;</li>
  <li>Google Maps.</li>
</ul>`
const exemplos = new Conteudo(titulo, conteudo)
export {exemplos}
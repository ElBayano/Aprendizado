// Aula string
console.log(`1 ___________ String`)
{const escola = "cod3r";
console.log("Sentença de código");

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("r"));
console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log("Escola ".concat(escola).concat("!!"));
console.log(escola.replace(3, "R"));
console.log("Ana,Maria,Pedro".split(","));
}
// Aula Boolean
console.log(`2 ___________ Boolean`)
{
let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);
console.log(`  A ___________`)
isAtivo = 1;
console.log(!isAtivo); //Exclamação significa negação
console.log(!!isAtivo); /* Duas exclamações está negando duas vezes
então acaba aformando */
console.log(`  B ___________`)
console.log("os verdadeiros...") 
// Todos os valores inteiros não "True", menos o zero
console.log(!!3)
console.log(!!-3)

console.log(!!-1)
console.log(!!" ")
console.log(!![]) // Array vazio
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null) // Valor nulo
console.log(!!NaN) // "Not a number"
console.log(!!undefined)
console.log(!!'' || null || 0 || 'epa')

// Retorna o primeiro valor verdadeiro 
let nome = ""
console.log(!! nome || "Desconhecido")
}
// Aula Array
console.log(`3 ___________ Array`)
{
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[1], valores[3])
console.log(valores[2])
valores[4] = 10
console.log(valores[4])
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, true, "Teste", null)
console.log(valores)
console.log(valores.pop())
// retirou o ultimo valor de "valores"
console.log(valores)
console.log(valores.length)
delete valores[8]
console.log(valores)
}
// Aula Objeto
console.log(`4 ___________ Objeto`)
{
  const prod1 = {}
prod1.nome = "Iphone 13 Max 2022"
prod1.preco = 4950.94
prod1["Descotonto de"] = 0.4
/* Não é recomendado usar espaço no atributo do objeto
*/
console.log(prod1)

const prod2 = {
  nome: "Camisa polo",
  preco: 79.80,
  tamanho: 80
  }
console.log(prod2)
}

// Aula Função
console.log(`5 ___________ Função`)
{
  function imprimirSoma (a, b) {
  console.log(a+b)
};

imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2,3,4,5,7,8,9);
console.log(`
SEPARAÇÃO
`)
function soma (a, b = 0) {
  return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
function parimp(n) { 
  if (n%2==0) { return "par"
  } else {
    return "ímpar"
  }
}
let res = parimp(11)
console.log(res)

function paridade(n) {
  if (n%2==0) {return "Par"} else {return "Ímpar"}
}
console.log(paridade(7))
}

// Aula loop var
console.log(`6 ___________ loop var`)
{
  var nome = "numero"
  for (var i = 0; i<10; i++) {console.log(i)}
console.log(i) // resultado é 10

}

for (let a = 0; a< 10; a++) {console.log(a)}

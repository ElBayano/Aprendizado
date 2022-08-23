/*const escola = "cod3r";
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
*/
let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);
console.log(`1 ___________`)
isAtivo = 1;
console.log(!isAtivo); //Exclamação significa negação
console.log(!!isAtivo); /* Duas exclamações está negando duas vezes
então acaba aformando */
console.log(`2 ___________`)
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

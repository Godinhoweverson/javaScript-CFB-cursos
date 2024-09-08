let nome = new String("Bruno Pinho Campos 1978")
let email = "weverson@gmail.com"
let numeros = '1, 10, 100, 1000'

console.log(nome)

console.log(nome.search(/pinho/i))

console.log(nome.match(/o/ig))

console.log(nome.replace(/o/ig, 'Teste'))

console.log(nome.match(/[oh]/ig))

console.log(nome.match(/[a-m|0-9]/ig))

// METACARACTERES

console.log(nome.match(/\d/ig)) //Numeros

console.log(nome.match(/\s/ig)) // Spaces

console.log(nome.match(/\bP/ig)) //Dword

///QUATIFIERS

console.log(nome.match(/o+/ig))

console.log(nome.match(/o+|s+/ig))

console.log(nome.match(/no*/ig))

console.log(numeros.match(/10/ig))

console.log(numeros.match(/10+/gi));

console.log(numeros.match(/10*/gi));

console.log(numeros.match(/10?/gi));
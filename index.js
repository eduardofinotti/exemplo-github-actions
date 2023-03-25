const generate = require('gerador-validador-cpf')

console.log('*************************')
console.log('CPF: ', generate.generate({ format: true }))
console.log('*************************')
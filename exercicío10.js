let valorGasto
let lirtoConsumido
let preçoDoLitro
 
lirtroConsumido = prompt('informe a quantidade de litros consumidos')
preçoDoLitro = prompt('informe o preço do litro em R$')

lirtroConsumido = parseFloat(lirtroConsumido)
preçoDoLitro = parseFloat(preçoDoLitro)
valorGasto = lirtroConsumido * preçoDoLitro 

alert('O valor gasto é R$ ' + valorGasto)
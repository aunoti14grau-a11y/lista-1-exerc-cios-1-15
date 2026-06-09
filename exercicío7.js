let valor
let produto
let descontoAplicado

valor = prompt("informe o valor do produto")

produto = prompt("infrome a quantidade do produto")

valor = parseFloat(valor)
produto = parseFloat(produto)

descontoAplicado = (valor * produto) / 100
alert('O valor do desconto aplicado é de R$ ' + descontoAplicado)

let valorPago
let quantidadesDeDias
let ValorCobradoPorDia

quantidadesDeDias = prompt('informe a quantidade de dias')
ValorCobradoPorDia = prompt('informe o avlor cobrado por dia em R$')

quantidadesDeDias = parseFloat(quantidadesDeDias)
ValorCobradoPorDia = parseFloat (ValorCobradoPorDia)

valorPago = quantidadesDeDias * ValorCobradoPorDia

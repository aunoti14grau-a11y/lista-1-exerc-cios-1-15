let custoProduçaoLote
let unidadesProduzidas
let custoDeCadaUnidade

custoProduçaoLote = prompt('informe o custo de produção do lote')
unidadesProduzidas = prompt('informe a quantidade de unidades produzidas')


custoProduçaoLote = parseFloat(custoProduçaoLote)
unidadesProduzidas = parseFloat(unidadesProduzidas)

custoDeCadaUnidade = custoProduçaoLote / unidadesProduzidas

alert('O custo de cada unidade é R$ ' + custoDeCadaUnidade)
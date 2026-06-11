let montanteIngressos
let quantidadeDeVendidos
let preçoUnitario

montanteIngressos = prompt('informe o montante de ingressos')
quantidadeDeVendidos = prompt('informe a quantidade de ingressos vendidos')
preçoUnitario = prompt('informe o preço unitário do ingresso em R$')  

montanteIngressos = parseFloat(montanteIngressos)
quantidadeDeVendidos = parseFloat(quantidadeDeVendidos)
preçoUnitario = parseFloat(preçoUnitario)

montanteIngressos = quantidadeDeVendidos * preçoUnitario

alert('O montante arrecadado com a venda dos ingressos é R$ ' + montanteIngressos)
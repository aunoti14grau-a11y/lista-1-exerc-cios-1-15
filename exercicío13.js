let perimetro
let comptimento 
let largura

perimetro = prompt('informe o perímetro do retângulo')
comprimento = prompt('informe o comprimento do retângulo')
largura = prompt('informe a largura do retângulo')

perimetro = parseFloat(perimetro)
comprimento = parseFloat(comprimento)
largura = parseFloat(largura)

perimetro = 2 * (comprimento + largura)

alert('O perímetro do retângulo é ' + perimetro)    
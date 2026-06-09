let distanciaPecrorrida //entrada - input
let combustivelEmLitros //entrada - input
let consumoMédio // saída - output

distanciaPecrorrida = prompt("Informe a distância a ser percorrida em KM")

combustivelEmLitros = prompt('Imforme a qunatidade gasta de combudtível em litros')

distanciaPecrorrida = parseFloat(distanciaPecrorrida)
combustivelEmLitros = parseFloat(combustivelEmLitros)

consumoMédio = distanciaPecrorrida / combustivelEmLitros

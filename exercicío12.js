let velociadeMedia
let distanciaPercorrida 
let tempoGasto

velociadeMedia = prompt('informe a velocidade média em km/h')
distanciaPercorrida = prompt('informe a distância percorrida em km')
tempoGasto = prompt('informe o tempo gasto em horas')

velociadeMedia = parseFloat(velociadeMedia)
distanciaPercorrida = parseFloat(distanciaPercorrida)
tempoGasto = parseFloat(tempoGasto)  
 
velociadeMedia = distanciaPercorrida / tempoGasto

alert('A velocidade média é ' + velociadeMedia + ' km/h')
let mesesDeVidas
let idadeEmAnos

mesesDeVidas = prompt('informe os meses de vida')
idadeEmAnos = prompt('informe a idade em anos')

mesesDeVidas = parseFloat(mesesDeVidas)
idadeEmAnos = parseFloat(idadeEmAnos)
 
mesesDeVidas = idadeEmAnos * 12

alert('O número de meses de vida é ' + mesesDeVidas)
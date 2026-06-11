let peso
let indiceDeMassaCorporal
let massa

peso = prompt('informe o peso em kg')
massa = prompt('informe a massa em metros')

peso = parseFloat(peso)
massa = parseFloat(massa)

indiceDeMassaCorporal = peso / (massa * massa)

alert('O indice de massa corporal é ' + indiceDeMassaCorporal)
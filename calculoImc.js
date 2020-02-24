const nome = 'Camila'
const peso = 86.7
const altura = 1.74

const resultadoIMC = peso / (altura * altura)

let msg = ''

if (resultadoIMC >= 30){
    msg = `${nome}, seu imc é ${resultadoIMC} e você está acima do peso`
}else{
    msg = `${nome},seu imc é ${resultadoIMC} e você não está acima do peso`
}

console.log(msg)
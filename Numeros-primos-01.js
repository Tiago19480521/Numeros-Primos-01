// let num = 1215103

const verificaPrimo = () => {
    let num = parseFloat(document.getElementById('inp_numero').value)
    document.getElementById('inp_numero').value = num.toLocaleString('pt-BR')

    let isPrime = true

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        document.getElementById('inp_resultado').value = 
        `O número  ${num.toLocaleString('pt-BR')}  é primo.`
    } else {
        document.getElementById('inp_resultado').value = 
        `O número  ${num.toLocaleString('pt-BR')}  não é primo.`
    }       
}
         
const limparCampos = () => {
    document.getElementById('inp_numero').value = ''
    document.getElementById('inp_resultado').value = ''

    document.getElementById('inp_numero').focus()
}

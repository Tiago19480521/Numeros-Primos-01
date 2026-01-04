let num = 1215103
let isPrime = true

const verificaPrimo = () => {        
        // let num = parseFloat(document.getElementById('inp_numero').value)

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false
                break
            }
        }
    }

    // -----------------------------------------------------
    verificaPrimo(num)

    if (isPrime) {
        console.log(`\nO número ${num} é primo.`)
    } else {
        console.log(`\nO número ${num} não é primo.`)
    }
    // -----------------------------------------------------
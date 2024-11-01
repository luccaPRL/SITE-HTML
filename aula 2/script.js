// function somar(numero1, numero2){

//     let resultado = numero1 + numero2
//     return resultado
// }

// function mostrarResultado(){

//     let resultado = somar(5, 9)
//     console.log(resultadoSoma)
// }

// // #####  mais facil de fazer
// function somar(numero1, numero2){
//     return numero1+numero2

// }
// const somar = (numero1,numero2) =>{
//     return numero1+numero2
// }


// somar(5, 13)
// somar(8, 9)
// alert(resultado)

// // ##### Array
// const nomes = ["lucca", "joud the sigma", "diego the beta", 15, true]

// // ##### printar uma função do array
// //console.log(nomes[2])

// // ##### Atualizar o valor de um array
// nomes[2] = "diego the master sigma"

// // ##### adicionar elementos no final do array
// nomes.push("iafsad")

// // ##### adicionar elementos no inicio do array
// nomes.unshift("cesar")

// // ##### remover o último elemento
// nomes.pop()

// // ##### remover o primeiro elemento
// nomes.shift()

// // ##### remover um elemento expecifico
// nomes.slice(2,1)

// // ##### Verificar se eciste um valor no array
// nomes.includes("cesar")

// Faz um outro array # .map #
const novosNomes = nomes.map(mudaNomes => {
    return 'olá ${mudaNomes}'
})


// ##### chamar todos 
 nomes.forEach(function rodarArray(PegaNomes){
    console.log(PegaNomes)
// chamar todos diferente
 nomes.forEach(PegaNomes => console.log(PegaNomes))

    })


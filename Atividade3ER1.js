/*
- Se a peça possuir um peso superior a 100 gramas, pode cadastrar
- Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente. 
- Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.
*/

let listaDePecas = ["peça 1", "peça 2", "peça 3",]

if (listaDePecas.length < 10){
    console.log ("É possivel cadastrar mais peças.")
}
else {
    console.log ("Não é possivel cadastrar mais peças.")
}



let peso = 150

if (peso < 100){
    console.log ("A peça deve ter no minimo 100g")
}
else {
    console.log ("A peça possui o peso adequado")
}



let nomeDaPeca = "Peca 1"

if (nomeDaPeca.length > 3){
    console.log ("O nome da peça esta adequado para o cadastro.")
}
else if (nomeDaPeca.length == 0){
    console.log ("O nome da peça não pode ser vazio.")
}
else {
    console.log ("O nome da peça deve possuir mais de 3 caracteres.")
}
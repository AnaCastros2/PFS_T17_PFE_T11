let nome = ["Ana"]
if (nome.length > 0){
    console.log ("Siga para próxima etapa do cadastro.")
} else {
    console.log ("Preencha o campo 'nome' para prosseguir.")
}





let idade = 32;
let numeroDeParticipantes = 50;
let message = ""

if (idade >= 18 && numeroDeParticipantes < 100) {
    message = ("Cadastro efetuado com sucesso.")
} 
else if (idade < 18 && numeroDeParticipantes < 100) {
    message = ("Cadastro não efetuado. Você precisa ter 18 anos ou mais para participar.")
}
else {
    message = ("Cadastro não efetuado. Numero de participantes excedido.")
}
console.log (message)




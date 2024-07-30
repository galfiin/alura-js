console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`, 
    `Bahia`, 
    `Nova York`
)

const idadeComprador = 18;
const estaAcompanhada = false; 
const temPassagemComprada = true;

console.log("Destinos possíveis: ")
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {  // || = "ou" dentro do js
    console.log("Boa Viagem!!!");
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de Idade e não posso vender")
}

console.log("Embarque: \n \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!!");
} else if(idadeComprador < 18 && temPassagemComprada && estaAcompanhada == true) {
    console.log("Boa Viagem!!!");
} else if(idadeComprador < 18 && temPassagemComprada) {
    console.log("Ta achando que vai aonde amigão? \n Como vc conseguiu essa passagem?")
} else if(idadeComprador < 18 && temPassagemComprada == false) {
    console.log("ta se achando o espertão né?")
}

console.log(listaDeDestinos)




console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`, 
    `Bahia`, 
    `Nova York`
)

const idadeComprador = 18;
const estaAcompanhada = false; 
let temPassagemComprada = false;
const destino = "Nova York"

console.log("Destinos possíveis: ")
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0; 
let destinoExiste = false; 

while(contador<4){
    if(listaDeDestinos[contador] == destino){
       destinoExiste = true; 
        break;
    }
    contador += 1; 
}
console.log("Destino Existe: ", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!"); 
}

for(let i = 0 ; i < 4 ; i ++) {
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}   
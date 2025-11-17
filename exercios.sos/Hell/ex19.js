const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

const idades = [25, 30, 18, 45, 22, 35];

const maiorIdade = idades.reduce((maior, atual) => {return maior > atual ? maior : atual;}, 0);

const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = frutas.reduce((contador, fruta) => {
    contador[fruta] = (contador[fruta] || 0) + 1;
    return contador;
}, {});

console.log("Soma:", soma);
console.log("Maior idade:", maiorIdade);
console.log("Contagem:", contagem);
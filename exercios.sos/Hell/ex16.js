function saudar(nome = "Visitante", idade = 18) {
    return `Olá ${nome}, você tem ${idade} anos`;
}

const calcularDesconto = (preco, desconto = 10)=> {
    return preco - (preco * desconto / 100);
};

console.log(saudar());
console.log(saudar("Ana",18));
console.log(saudar("Carlos", 30));
console.log("Preço com desconto:", calcularDesconto(100));
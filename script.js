// Crie um objeto que receba ao menos três propriedades sobre você.
let about = {
    nome: "Mariana Reinaldo",
    idade: 18,
    cidade: "Rio de Janeiro",
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
about.time = "Vasco da Gama"
// Remova uma propriedade desse objeto.
delete about.cidade
//Mostre no console todas as propriedades desse objeto.
console.log(about)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
let cadastro = [
    {
        nome: "Gabriel",
        idade: 17, 
        telefone: 987434106,
        amigos: "",
    },
    {
        nome: "Raphael",
        idade: 21,
        telefone: 976549090,
        amigos: "",
    },
    {
        nome: "Luan",
        idade: 23,
        telefone: 283738237,
        amigos: "",
    },
    {
        nome: "Jade",
        idade: 23,
        telefone: 828812929,
        amigos: "",
    },
    {
        nome: "Ana",
        idade: 28,
        telefone: 2292898271,
        amigos: "",
    }
]
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
cadastro[0].amigos = `Rafael, Mariana, Keila, Luiz`
cadastro[1].amigos = `Julia, Lucas, Lukas, Luccas`
cadastro[2].amigos = `João, Alice, Jandira, Heitor`
cadastro[3].amigos = `Naiara, Laís, Nathália, Jéssica`
cadastro[4].amigos = `Isabela, Kaike, Joaquim, Paula`
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos.substring(0,6))
console.log(cadastro[1].amigos.substring(0,5))
console.log(cadastro[2].amigos.substring(0,4))
console.log(cadastro[3].amigos.substring(0,6))
console.log(cadastro[4].amigos.substring(0,7))
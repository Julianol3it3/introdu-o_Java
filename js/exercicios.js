const nome = 'juliano'
const sobrenome = 'leite'
const idade = 36

console.log(nome,sobrenome,idade)

const usuario = {
  nome: 'juliano',
  sobrenome:'leite',
  idade: 36,
};
console.log('object',usuario);

// somente se o nome da variavel
// e o nome da propriedade
// forem o mesmo
const usuario2 = {nome, sobrenome,idade};
console.log(usuario2);


console.log (
  usuario.nome
)

console.log(
  usuario.sobrenome
)

console.log(
  usuario.idade
)


function welcome (usuario){
  console.log(
    `IDENTIFICADO ${usuario.nome} ${usuario.sobrenome},
    DE ${usuario.idade} ANOS DE IDADE`
  );
}

welcome(usuario);

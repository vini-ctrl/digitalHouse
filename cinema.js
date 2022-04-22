//Projeto: CinemaMarketing V 1.0
//Descrição: Vai acompanhar as atividades do curso
//com implementações de funções novas a cada aula a partir
//Aulas 03 e 04
//Autor: Vinícius Josephik
//18/04/2022

const fs = require("fs");
const caminhoArquivoJson = __dirname + "\\database\\catalogo.json";
let catalogo;

const cinema = "CineMarketing";


//Adicionar um filme no array

function puxarDados() {
    catalogo = JSON.parse(fs.readFileSync(caminhoArquivoJson, "utf-8"));
}

function mandarDados() {
    fs.writeFileSync(caminhoArquivoJson, JSON.stringify(catalogo));
}




function adicionarFilme(filme) {
    catalogo.push(filme);
}


let piratas = {                                     //Criamos aqui um objeto para adicionar no catalogo
    codigo: 104,
    titulo: "Piratas do Caribe",
    duracao: 3,
    atores: ['Jorginho', 'Gerinho', 'Silveirinha'],
    anoDeLancamento: 2010,
    emCartaz: false
}


// busca filme (sem usar o filter ou map)

function buscarFilme(codigoDoFilme, umCatalogo) {
    let nomeDoFilme;
    for (let i = 0; i < umCatalogo.length; i++) {               //I.

        let extrairCodigoFilme = umCatalogo[i].codigo;     // I.
        if (extrairCodigoFilme == codigoDoFilme)                     //II.
        { nomeDoFilme = umCatalogo[i].titulo; }
    }

    return nomeDoFilme;
}
//a função ficou um pouco diferente da aula: ela fica lendo em I. os códigos dos filmes em loop toda hora.
//Quando um código de filme for igual ao código que entrou na função a função retorna umCatalogo[i].titulo.


//mesma lógica para busca do código do filme, copiado. muda é um valor lógico que muda o estado da propriedade
function alteraEmCartaz(codigoDoFilme, umCatalogo, muda) {
    for (let i = 0; i < umCatalogo.length; i++) {

        let extrairCodigoFilme = umCatalogo[i].codigo;
        if (extrairCodigoFilme == codigoDoFilme) {
            umCatalogo[i].emCartaz = muda;
            break;
        }
    }
}


// uso das funções.

puxarDados();
adicionarFilme(piratas);                            //função adicionou filme piratas no catálogo.

let saida = buscarFilme(104, catalogo);
console.log(saida);

alteraEmCartaz(101, catalogo, true);
console.log(catalogo[0].emCartaz);
console.log(catalogo);

mandarDados();
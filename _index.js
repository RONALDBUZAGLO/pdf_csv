const fs = require('fs');

fs.readFile("./usuario.json",{encoding:"utf8"},(erro,dados)=>{
    if (erro) {
        console.log("ocorreu um erro");
    }else{
        // console.log(dados);
        var conteudo = JSON.parse(dados);
        // console.log(conteudo);
        conteudo.nome = "Ronald Buzaglo Pessoa",
        conteudo.curso = "Formação React",
        conteudo.categoria = "React"
        // console.log(conteudo);
        fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
            if (erro) {
                console.log("Houve um erro " + erro);
            }
        })
    }
})


//LENDO ARQUIVO DE TEXTO
// fs.readFile("./texto.teste",{encoding:'utf8'},(erro, dados)=>{
//     if (erro) {
//         console.log("ocorreu uma falha durante a leitura do arquivo");
//     } else {
//         console.log(dados);
//     }
// });


//ESCREVENDO EM ARQUIVO DE TEXTO
// fs.writeFile("./texto.teste","Novo mudando do arquivo!",(erro)=>{
//     if (erro) {
//         console.log('erro durante o salvamento');
//     }
// });


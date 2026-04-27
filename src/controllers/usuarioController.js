var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        nome: resultadoAutenticar[0].nome,                                       
                                        idade: resultadoAutenticar[0].idade,
                                        planeta: resultadoAutenticar[0].planeta,
                                        especie: resultadoAutenticar[0].especie,
                                        nave: resultadoAutenticar[0].nave,
                                        email: resultadoAutenticar[0].email,                                       
                                        senha: resultadoAutenticar[0].senha,
                                        confirmarsenha: resultadoAutenticar[0].confirmarsenha,
                                    });
                            } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    console.log("Cheguei na Controller")
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var idade = req.body.idadeServer;
    var planeta = req.body.planetaServer;
    var especie = req.body.especieServer;
    var nave = req.body.naveServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var confirmarSenha = req.body.confirmarSenhaServer;

    console.log(`Dados a serem cadastrados: ${nome}, ${idade}, ${planeta}, ${especie}, ${nave}, ${email}, ${senha}, ${confirmarSenha}`)

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (planeta == undefined) {
        res.status(400).send("Seu planeta está undefined!");
    } else if (especie == undefined) {
        res.status(400).send("Sua especie está undefined!");
    } else if (nave == undefined) {
        res.status(400).send("Sua nave está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (confirmarSenha == undefined) {
        res.status(400).send("Sua confirmação de senha está undefined!");
    } else if (nome.length <= 1){
        res.status(400).send("Nome inválido!");
    }else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, idade, planeta, especie, nave, email, senha, confirmarSenha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}
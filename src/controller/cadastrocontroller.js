const cadastros = require("../model/clientes.json");
const fs = require("fs");
const { request } = require("http");

const exibirCadastro = (request, response) =>{

    response.status(200).send(cadastros);

};

function pesquisarCadastro(request, response) {

    const cadastroEncontrado = cadastros.filter((cadastro) => {

        return cadastro.Id == Number(request.params.Id)
    });

    if (cadastroEncontrado.length > 0){
        response.status(200).send(cadastroEncontrado)
    } else {
        response.status(400).send("Cadastro não encontrado.")

    }
    };
    
    const salvarCadastro = (request,response) => {

        const Nome = request.body.Nome;
        const CPF = request.body.CPF;

        cadastros.push({

            Nome, 
            CPF
        }
            );

            fs.writeFile("./src/model/clientes.json", JSON.stringify(cadastros), (error) => {
                console.log(error)});

                response.status(201).send(cadastros);

            };

            module.exports = {

                exibirCadastro,
                pesquisarCadastro, salvarCadastro
            }
    




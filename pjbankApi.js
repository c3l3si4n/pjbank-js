const PJBankSDK = require('@pjbank/pjbank-js-sdk');


// Login Info
const credencial = "3ef4c8697a26a116045f92f0ed400c7d4f9c86bd";  //Credencial
const chave      = "6e8e670b9b214afbaf7b6b02e60dd89514e61020";  //Chave
let   subconta   = "3d667793710ca6c09e3133d0002b687dad9c6544";  //Subconta

//Insert Info
const dadosSubconta = {
    data_nascimento: "06/09/1969",
    sexo           : "M",
    tipo           : "cartao_corporativo",
    valor          : "10101010.50",
    cnpj           : "87136122000198",
    nome_cartao    : "Daniel Matsumoto",
    email          : "dm@tfwno.gf"
};



initPJ(); // Start



function initPJ() {
    const PJBank = new PJBankSDK(credencial, chave); //Inicialização
    PJBank.developer(true); //Setar para modo Sandbox
    //Criar Subconta
    
    PJBank.Subcontas.criarSubconta(dadosSubconta)
        .then(sc => {
            subconta = sc.subconta;
            console.log(PJBank.ContaDigital());
            // Pegar info da Subconta
            PJBank.Subcontas.subconta(subconta)
                .then(infos => {
                    console.log(infos); // OK
                })
                .catch(err => {
                    console.log(err) //Erro
                })
        })
        .catch(err => {
            console.log(err);
        });




}
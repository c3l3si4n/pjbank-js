const PJBankSDK = require('@pjbank/pjbank-js-sdk');


// Login Info
const credencial = "credential"; //Credencial
const chave = "key"; //Chave
let subconta = "subconta" //Subconta

//Insert Info
const dadosSubconta = {
    data_nascimento: "06/09/1969",
    sexo: "M",
    tipo: "cartao_corporativo",
    valor: "10101010.50",
    cnpj: "87136122000198",
    nome_cartao: "Daniel Matsumoto",
    email: "dm@tfwno.gf"
};



initPJ(); // Start



function initPJ() {

    const PJBank = new PJBankSDK(credencial, chave); //Inicialização
    PJBank.developer(true); //Setar para modo Sandbox
    console.log('antes:', subconta)
    //Criar Subconta
    PJBank.Subcontas.criarSubconta(dadosSubconta)
        .then(sc => {
            console.log('success')
            subconta = sc.subconta;
            console.log('depois', subconta)
            // Pegar info da Subconta
            PJBank.Subcontas.subconta(subconta)
                .then(infos => {
                    console.log('Nome Completo:', infos.nome_cartao); // OK
                })
                .catch(err => {
                    console.log(err) //Erro
                })
        })
        .catch(err => {
            console.log(err);
        });




}

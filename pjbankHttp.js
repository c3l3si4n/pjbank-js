var https = require('https');


const sandbox    = true;
const credencial = '3ef4c8697a26a116045f92f0ed400c7d4f9c86bd';
const chaveconta = '6e8e670b9b214afbaf7b6b02e60dd89514e61020';
const operacao   = `/contadigital/${credencial}/`;


var options = {
    'method'  : 'GET',
    'hostname': `${sandbox ? 'sandbox' : 'api'}.pjbank.com.br`,
    'path'    : operacao,
    'headers' : {
        'X-CHAVE-CONTA': `${chaveconta}`
    }
};

function request(option, callback) {
    var req = https.request(option, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body      = Buffer.concat(chunks);
                finaldata = body.toString();
            return callback(finaldata);
        });

        res.on("error", function (error) {
            final = error;
            return callback(error);
        });
    });
    req.end();
}
request(options, function (response) {
        arr   = Object.values(JSON.parse(response));
    var arrft = arr.filter(function (el) {
        return el != '';
    });
    for (i = 0; i < arrft.length; i++) console.log(arrft[i]);
    //console.log(response);
})
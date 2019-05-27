# About
just a little thingy to learn about the api i will have to worth with at work
made in NodeJS and VSCode

# Usage
you will have to install their API
```
npm install @pjbank/pjbank-js-sdk
```

## Example Config

**PJBank HTTP Method** (Recommended)
>> pjbankHttp.js
```javascript
const sandbox    = true;
const credencial = '6c2fd46e02666dccb3333d223eb4bcb874806101';
const chaveconta = '9e3100d941fc7096560a1c963e3cde7526eb0062';
const operacao   = `/contadigital/${credencial}/`;
```
**PJBank SDK Method**
>> pjbankApi.js
```javascript
const PJBankSDK  = require('@pjbank/pjbank-sdk-js');
const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave      = "ef947cf5867488f744b82744dd3a8fc4852e529f";
const PJBank = new PJBankSDK(credencial, chave);
```





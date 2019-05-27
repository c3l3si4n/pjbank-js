# About
just a little thingy to learn about the api i will have to worth with at work
made in NodeJS and VSCode

# Usage
you will have to install their API
```
npm install @pjbank/pjbank-js-sdk
```

## Example Config
```javascript
const PJBankSDK  = require('@pjbank/pjbank-sdk-js');
const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave      = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);
```


const { uploadFile, downloadFile } = require('../Controller/aws.Controller.js');

// Exemplo de uso para upload
uploadFile('../Github/IagoAPI/imagem.model.js', 'nome-do-seu-bucket')
  .then((location) => console.log(`Arquivo disponível em: ${location}`))
  .catch((err) => console.error(err));


// Exemplo de uso para download
downloadFile('nome-do-seu-bucket', 'arquivo-no-s3.txt', './caminho/do/arquivo-baixado.txt')
  .then(() => console.log('Download concluído!'))
  .catch((err) => console.error(err));



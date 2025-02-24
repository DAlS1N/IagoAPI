const s3 = require('../Repository/awsConfig');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Função para fazer o upload de um arquivo
const uploadFile = (filePath, bucketName, keyName = uuidv4()) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Erro ao fazer o upload:', err);
        reject(err);
      } else {
        console.log('Arquivo carregado com sucesso:', data.Location);
        resolve(data.Location);
      }
    });
  });
};

// Função para baixar um arquivo do S3
const downloadFile = (bucketName, keyName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: keyName
  };

  const file = fs.createWriteStream(downloadPath);

  return new Promise((resolve, reject) => {
    s3.getObject(params)
      .createReadStream()
      .on('error', reject)
      .pipe(file)
      .on('close', () => {
        console.log('Arquivo baixado com sucesso:', downloadPath);
        resolve(downloadPath);
      });
  });
};

module.exports = { uploadFile, downloadFile };

const AWS = require('aws-sdk');
require('dotenv').config(); // Carrega as variáveis de ambiente

AWS.config.update({
  region: process.env.AWS_REGION, // Usa a variável de ambiente
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();
module.exports = s3;
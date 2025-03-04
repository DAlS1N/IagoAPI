const s3 = require('../config/awsConfig');

exports.uploadFile = async (file) => {
    if (!file) {
        throw new Error('Nenhum arquivo enviado.');
    }

    const fileKey = `${Date.now()}_${file.originalname}`;

    const params = {
        Bucket: 'bucketmi75',
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                reject(new Error('Erro ao fazer upload: ' + err.message));
            } else {
                resolve({ url: data.Location, key: fileKey });
            }
        });
    });
};




exports.downloadFile = async (key) => {
    if (!key) {
        throw new Error('Chave do arquivo não informada.');
    }

    const params = {
        Bucket: 'bucketmi75',
        Key: key
    };

    return s3.getObject(params).createReadStream();
};

// aws.service/awsService.js
/*
const s3 = require('../Repository/awsConfig');

exports.uploadFile = async (file) => {
    if (!file) {
        throw new Error('Nenhum arquivo enviado.');
    }

    const fileKey = `uploads/${Date.now()}_${file.originalname}`;

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
            }
            resolve({ url: data.Location, key: fileKey });
        });
    });
};

exports.downloadFile = (key) => {
    const params = {
        Bucket: 'bucketmi75',
        Key: key
    };
    return s3.getObject(params).createReadStream();
};
*/
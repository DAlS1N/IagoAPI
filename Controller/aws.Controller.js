const s3 = require('../Repository/awsConfig');
const multer = require('multer');

const storage = multer.memoryStorage(); // Armazena em memória antes de enviar para o S3

const upload = multer({ storage: storage });
exports.uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
        }

        const fileKey = `uploads/${Date.now()}_${req.file.originalname}`;

        const params = {
            Bucket: 'bucketmi75', // Nome do bucket fixo
            Key: fileKey,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        };

        s3.upload(params, (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao fazer upload', error: err.message });
            }
            res.status(200).json({ message: 'Upload realizado com sucesso', url: data.Location, key: fileKey });
        });

    } catch (error) {
        res.status(500).json({ message: 'Erro interno', error: error.message });
    }
};

exports.downloadFile = async (req, res) => {
    try {
        const { key } = req.params;

        const params = {
            Bucket: 'bucketmi75',
            Key: key
        };

        const fileStream = s3.getObject(params).createReadStream();
        res.attachment(key);
        fileStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao baixar o arquivo', error: error.message });
    }
};



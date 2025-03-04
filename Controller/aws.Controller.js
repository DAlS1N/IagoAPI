const awsService = require('../Service/Aws.Service');

exports.uploadFile = async (req, res) => {
    try {
        const result = await awsService.uploadFile(req.file);
        res.status(200).json({ message: 'Upload realizado com sucesso', ...result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.downloadFile = async (req, res) => {
    try {
        const fileStream = await awsService.downloadFile(req.params.key);
        res.attachment(req.params.key);
        fileStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao baixar o arquivo', error: error.message });
    }
};

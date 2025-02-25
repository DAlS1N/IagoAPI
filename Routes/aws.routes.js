const express = require('express');
const multer = require('multer');
const awsController = require('../Controller/aws.Controller');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), awsController.uploadFile);
router.get('/download/:key', awsController.downloadFile);

module.exports = router;

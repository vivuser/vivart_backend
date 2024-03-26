const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage( {
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const pathName = Date.now() + path.extname(file.originalname);
        req.filePath = pathName
        cb(null, pathName);
    }
});


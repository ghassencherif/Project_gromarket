const multer= require('multer')
const crypto = require('crypto')
const path= require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/images')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null,crypto.randomBytes(16).toString('hex')+path.extname(file.originalname))
    }
})
// const fileFilter = (req, res, cb)=>{
//     cb(null, true)
// }
const upload = multer({
    storage: storage,
    limits:{
        fieldSize:1024*1024*3
    }
})
module.exports = upload.single("image")
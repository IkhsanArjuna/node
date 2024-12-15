const express  = require('express')
const multer = require('multer')
const  cors = require('cors')
const path = require('path')
const middleware = require('./middleware/log')
const imageRoute = require('./route/image')

const fileStorage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'image/');
    },
    filename: (req,res,cb) => {
       cb(null,new Date().getTime() + '-' + res.originalname)
    }
})
const app = express();
const fileFilter = (req,res,cb) => {
    cb(null,true)
}

let port  = 4000;

app.use(middleware);
app.use('/image',express.static(path.join(__dirname,'image')))
app.use(multer({storage: fileStorage,fileFilter:fileFilter}).single('image'))
app.use(express.json())

app.use('/image',imageRoute)




app.listen(port, () => {
    console.log('Server started on port',port);
});
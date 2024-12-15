

const uploadImage = (req,response) => {
    var imagePath = ''
    if (req.file) {
        imagePath =  req.file.path.replace(/\\/g, '/');
        response.json({
            "image" : `http://192.168.56.1:4000/${imagePath}` 
        })

    } else {
        response.json({
            "image": 'kosong'
        })
    }

}

module.exports = {
    uploadImage
}
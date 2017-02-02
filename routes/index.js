var express = require('express'),
    multer  = require('multer'),
    router  = express.Router();

function formatSizeUnits(bytes){
        if      (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
        else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
        else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
        else if (bytes>1)           {bytes=bytes+' bytes';}
        else if (bytes==1)          {bytes=bytes+' byte';}
        else                        {bytes='0 byte';}
        return bytes;
}

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/get-file-size', multer({ dest: './uploads/'}).single('file'), (req, res) => {
    res.render('index', {size: formatSizeUnits(req.file.size)});
});

module.exports = router;

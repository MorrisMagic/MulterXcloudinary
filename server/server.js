const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")
const multer =require("multer");
const cloudinary  = require('./Cloudinary');
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"uploads/")
  },
  filename:function(req,file,cb){

    cb(null,file.originalname)
  }
})


const upload = multer({storage:storage})

app.use(cors({origin:"*"}))
app.use(express.json())

app.post("/upload",upload.single("logo"),(req,res)=>{
  cloudinary.uploader.upload(req.file.path,(err,result)=>{
    if (err) throw err
    console.log(result)
  })
  res.json(req.file)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
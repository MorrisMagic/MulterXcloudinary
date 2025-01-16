const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")
const multer =require("multer")
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"uploads/")
  },
  filename:function(req,file,cb){

    cb(null,file.originalname)
  }
})


const upload = multer({storage})

app.use(cors({origin:"*"}))
app.use(express.json())

app.post("/upload",upload.single("logo"),(req,res)=>{
  res.json(req.file)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
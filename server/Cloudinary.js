const Cloudianry = require("cloudinary").v2

Cloudianry.config({
    cloud_name:"",
    api_key:"",
    api_secret:""
})
module.exports=Cloudianry
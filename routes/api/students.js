const express = require("express");
const router = express.Router();

const Student = require("../../models/student");

router.post("/addFile", (req, res) => {
    let filename="file";
    function isEmpty(obj){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }
    if(!isEmpty[req.files]){
        let file=req.files.file;
        let filename=Date.now()+'-'+file.name;

      file.mv('./client/public/uploads/'+ filename,(err)=>{
          if(err)throw err;
      });

    console.log("is not empty");
    
    let filedata=file.data;
  const newfile = new Student({
    file: filename,
    data:filedata
  });
  console.log(req.files);  
  newfile.save().then(data=>{
      console.log(data);
  });
}
});


router.get("/getfiles", (req, res) => {
    Student.find(function(err, files) {
      if (err) {
        console.log(err);
      } else {
        res.json(files);
      }
    });
  });
  

module.exports = router;

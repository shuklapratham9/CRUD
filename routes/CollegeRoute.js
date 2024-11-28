const express=require('express');
const router=express.Router();
const Schema=require('../model/CollegeSchema');


router.get('/',async(req,res)=>{
try{
    const colleges=await Schema.find();
    res.json(collges);
}
catch(err){
    console.log(err);
    
}

});
router.post('/',(req,res)=>{
    const newCollege=new Schema({
        name:req.body.name,
        degreeName:req.body.degreeName,
    })
    try{
        const c1=newCollege.save();
        res.json(c1);
    }
    catch(err){
        console.log(err);
        
    }

});

router.patch('/:id',async(req,res)=>{
try{
    const c1=await Schema.findById(req.params.id);
    if(!c1){
        return res.status(404).json({msg:"College not found"});
    }
    if(req.body.name!==undefined){
        c1.name=req.body.name;
    }
    if(req.body.degreeName!==undefined){
        c1.degreeName=req.body.degreeName;
    }
    const updatedCollege=await c1.save();
    res.json(updatedCollege);
}
catch(err){
    console.log(err);
    
}

})

router.delete('/:id', async (req, res) => {
    try {
      const c1 = await Schema.findByIdAndDelete(req.params.id);
      if (!c1) {
        return res.status(404).json({msg:"No college"});
      }
      res.json({msg:'College deleted successfully',c1});
    } catch (err) {
      console.log(err);
      res.status(500).json({msg:'Failed to delete college'});
    }
  });


module.exports=router;
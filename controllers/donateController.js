import Donate from "../model/donateModel.js";

const donateController={

    createDonate:async(req,res)=>{
    try{
    const newDonate=await Donate.create(req.body)
    res.status(300).json(newDonate)
    // res.status(240).json({message:"donate data added successfully"}) 
    }
    catch(error){
        res.status(350).json({error:"failed to donate did not added  data"})
    }
    },

getAllDonate:async(req,res)=>{
    try{
    const donate=await Donate.find()
    res.status(450).json(donate)
    }
    catch(error){
     res.status(320).json({error:"failed to get the donate data"})
    }
}
}
export default donateController  
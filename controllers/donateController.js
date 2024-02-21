import Donate from "../model/donateModel.js";

const donateController={

    createDonate:async(req,res)=>{
      
        try{
        const {name,phone, email, houseNo, roadNo,streetName, colony, city,state, pincode }=req.body
        
        if(!name || !phone ||  !email || !houseNo || !roadNo || !streetName || !colony || !city || !state  || !pincode){
          return res.status(300).json({message:"required fields name,phone, email, houseNo, roadNo,streetName, colony, city,state, pincode"})
        }
        const newDonate=new Donate({name,phone, email, houseNo, roadNo,streetName, colony, city,state, pincode})
        const savedDonate=await newDonate.save()
        res.status(201).json({savedDonate,message:"successfull donate data added "})
    }
    catch(error){
        res.status(500).json({error:"Failed to add data"})
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
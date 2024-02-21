import Contact from "../model/contactModel.js";

const contactController={

    createContact:async(req,res)=>{
        try{
        const newContact=await Contact.create(req.body)
       
        res.status(400).json({newContact,message:'contact details added successfull'})
        }
        catch(error){
        res.status(200).json({error :'failed to add contacxt data'})
        }
    },
    

    getAllContact:async(req,res)=>{
        try{
        const contact=await Contact.find()
        res.status(200).json(contact)
        }
        catch(error){
            res.status(240).json({error:"failed to get contact details"})
        }
    }
}
export default  contactController
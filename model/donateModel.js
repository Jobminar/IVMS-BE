import {Schema,model} from 'mongoose'

const donateSchema=new Schema({
    name:{type:String,required:true},
    phone: {type:Number,required:true},
    email: {type:String,required:true},
    houseNo: {type:String,required:true},
    roadNo: {type:String,required:true},
    streetName: {type:String,required:true},
    colony:{type:String,required:true},
    city: {type:String,required:true},
    state: {type:String,required:true},
    pincode:{type:Number,required:true},
})
const Donate=model("Donate",donateSchema)
export default Donate
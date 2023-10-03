import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req , res){
    try{
        await connectDB()
    }catch(err){
        res
            .status(500)
            .json({status: "failed" , message: "Error in Connecting To DB"})
            return
    }



    if(req.method === "GET"){
        const id = req.query.customerId
        try{
            const customer = await Customer.findOne({_id : id}) 
            res.status(201).json({status: "success" , data: customer})
        }catch(err){
            res
            .status(500)
            .json({status: "failed" , message: "Error in retriving Data from DB"})
            return
        }
    }
}
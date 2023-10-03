import Customer from "@/models/Customer"
import connectDB from "@/utils/connectDB"

export default async function handler(req , res){
    try{
        await connectDB()
    }catch(err){
        console.log(err.message)
        res.status(500).json({status: "failed" , message: "Error in Connecting To DB"})
        return;
    }
    if(req.method === "POST"){
        const data = req.body.data

        if(!data.name || !data.lastname || !data.email) 
        return res
        .status(400)
        .json({status: "failed" , message: "invalid Data"})


        try{
            const customer = await Customer.create(data)
            res.status(201).json({status: "success" , message: "Created Data" , data: customer})
        }catch(err){
            console.log(err.message)
            res.status(500).json({
                status: "failed" , 
                message: "Error in Connecting To DB",
        })
    } 
    }
}

            

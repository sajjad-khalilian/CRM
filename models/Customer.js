import { Schema , models , model } from "mongoose";



const newSchema = new Schema ({
    name:{
        type: String,
        minLength: 1,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    address: String,
    date: Date,
    postalCode: Number,
    products: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})


const Customer = models.Customer || model("Customer" , newSchema)
export default Customer
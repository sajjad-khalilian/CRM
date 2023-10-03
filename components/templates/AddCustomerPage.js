import { router } from "next/router"
import { useState } from "react"
import Form from "../module/Form"

function AddCustomerpage() {


    const [form , setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        createdAt: "",
        updatedAt: "",
        date: "",
        products: [],
    })





    const cancelHandler = () => {
        setForm({
            name: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            postalCode: "",
            createdAt: "",
            updatedAt: "",
            date: "",
            products: [],
        })
        router.push("/")
    }

    const saveHandler = async () => {
        const res = await fetch(`/api/customer`, {
            method: "POST",
            body: JSON.stringify({data: form}),
            headers: {"Content-Type" : "application/json"}
        })
        const data = await res.json()
        if(data.status === "success") router.push("/")
    }

    return (
        <div className="customer-page">
            <h4>Add Customer</h4>
            <Form form={form} setForm={setForm}/>
            <div className="customer-page__buttons">
                <button className="first" onClick={cancelHandler}>Cancel</button>
                <button className="second" onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default AddCustomerpage

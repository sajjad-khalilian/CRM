import FormInput from "./FormInput"
import ItemList from "./ItemList"

function Form({form , setForm}) {


    const changeHandler = (e) => {
        const {name , value} = e.target
        setForm({...form, [name]: value})
    }



    return (
        <div>
            <FormInput label="Name" value={form.name} name="name" onChange={changeHandler} type="text"/>
            <FormInput label="Last Name" value={form.lastname} name="lastname" onChange={changeHandler} type="text"/>
            <FormInput label="Email" value={form.email} name="email" onChange={changeHandler} type="text"/>
            <FormInput label="Phone" value={form.phone} name="phone" onChange={changeHandler} type="tel"/>
            <FormInput label="Address" value={form.address} name="address" onChange={changeHandler} type="text"/>
            <FormInput label="Postal Code" value={form.postalCode} name="postalCode" onChange={changeHandler} type="number"/>
            <FormInput label="Date" value={form.date} name="date" onChange={changeHandler} type="date"/>
            <ItemList form={form} setForm={setForm}/>
        </div>
    )
}

export default Form

const { default: FormInput } = require("./FormInput")

function ItemList({form , setForm}) {

    const {products} = form



    const addHandler = () => {
        setForm({
            ...form, products: [...products, {name: "" , lastname: "", email: ""}]
        })
        console.log(products)
    }




    const changeHandler = (e , index) => {
        const {value , name} = e.target
        const newProducts = [...products]
        newProducts[index][name] = value
        setForm({...form , products: newProducts})
        console.log(newProducts)
    }

    const deleteHandler = (index) => {
        const newProducts = [...products]
        newProducts.splice(index , 1)
        setForm({...form , products: newProducts})
    }

    return (
        <div className="item-list">
            <p>Purchased Products</p>
            {products.map((product , index) => (
                    <div key={index} product={product} className="form-input__list">
                        <FormInput label="Product Name" value={products.name} name="name" onChange={(e) => changeHandler(e, index)}/>
                        <div>
                        <FormInput label="Price" value={products.price} name="price" onChange={(e) => changeHandler(e, index)}/>
                        <FormInput label="Qty" value={products.qty} name="qty" onChange={(e) => changeHandler(e, index)}/>
                        </div>
                        <button onClick={deleteHandler}>Remove</button>
                    </div>
                ))
            }
            <button onClick={addHandler}>Add Item</button>
        </div>
    )
}

export default ItemList

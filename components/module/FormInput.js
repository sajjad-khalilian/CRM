function FormInput({label , onChange , value , name , type}) {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} onChange={onChange} value={value}/>
        </div>
    )
}

export default FormInput

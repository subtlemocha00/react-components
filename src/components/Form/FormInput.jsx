const FormInput = ({ name, onChange, type, value, label }) => {
    const cleanName = name === "current-password" ? "Password" : label;
    return (
        <>
            <label className="form-label" htmlFor={name}>{cleanName}</label>
            <input onChange={onChange} className="form-control" id={name} name={name} type={type} placeholder={cleanName} value={value} autoComplete={name} required>
            </input>
        </>
    );
}

export default FormInput;
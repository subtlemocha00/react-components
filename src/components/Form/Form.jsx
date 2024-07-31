import { useState } from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const Form = (props) => {
    const [formData, setFormData] = useState(props)
    const handleSubmit = () => {
        console.log(formData)
    };
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(Object.keys(formData))
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <form onSubmit={handleSubmit} className="p-3 border container">
            {Object.keys(formData).map((key) =>
                <FormInput key={key} name={key} onChange={handleChange} type={key} value={formData[key]} label={key.charAt(0).toUpperCase() + key.slice(1)} />
            )}
            <FormButton buttonType="submit" handleSubmit={handleSubmit} buttonName="Submit" />
        </form>
    );
}

export default Form;
const FormButton = ({ buttonName, buttonType, handleSubmit }) => {
    return (<>
        <div className="">
            <button type={buttonType} onClick={handleSubmit}>{buttonName}</button>
        </div>
    </>);
}

export default FormButton;
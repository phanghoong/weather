import onChangeDataHelper from "./../function/onChangeDataHelper"

export function TextBox(props){

    const {fieldName, localContext, label } = props
    const { searchData, searchValidation } = localContext

    return (
        <>
        <label>{label}</label>
        <br/>
        <input className='form-control' type='text'value={searchData[fieldName]} onChange={(e)=>onChangeDataHelper(e, localContext)} name={fieldName}/>
        {!searchValidation[fieldName].isValid &&
        <span className="error-msg">
            {searchValidation[fieldName].errorMessage}
        </span>
        }
        </>
    )
}
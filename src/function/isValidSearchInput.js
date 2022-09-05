import isValidInput from "./isValidInput"

export default function isValidSearchInput(cityName, countryCode, localContext){
    const { searchValidation, setSearchValidation } = localContext

    let tempSearchValidation = searchValidation

    tempSearchValidation.cityName.isValid = isValidInput(cityName)
    tempSearchValidation.countryCode.isValid = isValidInput(countryCode)
    tempSearchValidation.recordNotFound.isValid = true

    tempSearchValidation.isValid = tempSearchValidation.cityName.isValid && tempSearchValidation.countryCode.isValid

    setSearchValidation({...tempSearchValidation})

    return tempSearchValidation.isValid;
}
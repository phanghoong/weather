export const DefaultSearchData = {
    cityName:"", 
    countryCode:""
}

export const DefaultResultData = {
    history:[],
    city:"",
    countryCode:"",
    weather: "",
    description:"",
    humidity: "",
    minTemperature: "",
    maxTemperature: "",
    time: "",
    iconId: ""
}

export const DefaultSearchValidationData = {
    cityName: {
        errorMessage:"City name is mandatory",
        isValid: true
    },
    countryCode: {
        errorMessage:"Country code is mandatory",
        isValid: true
    },
    recordNotFound: {
        errorMessage:"Record not found",
        isValid: true
    },
    isValid: true
}

export const APIKEY = '2b0d58e4086eb627b10c6d149d87726a'

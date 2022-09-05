import axios from "axios";
import { APIKEY } from "../constant/DefaultData";
import isValidSearchInput from "./isValidSearchInput";
import moment from "moment";

export default function onClickSearch(cityName, countryCode, localContext){
    const { result, setResult, setSearchValidation, searchValidation } = localContext

    let validInput = isValidSearchInput(cityName, countryCode, localContext)

    if(validInput){
        const searchDateTime =  moment(new Date()).format("yyyy-MM-DD hh:mm a");
        const searchTime =  moment().format("LTS");

        const endpoints = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${APIKEY}`

        axios.get([endpoints])
        .then(resp => {
            if(resp.status === 200){
                let tempSearchDataList = [{
                    cityName: resp.data.name,
                    countryCode: resp.data.sys.country,
                    time: searchTime
                }]

                result.history.forEach(element => {
                    tempSearchDataList.push(element)
                });
                
                setResult({
                    history: tempSearchDataList,
                    city: resp.data.name,
                    countryCode: resp.data.sys.country,
                    weather: resp.data.weather[0].main,
                    description: resp.data.weather[0].description,
                    humidity: resp.data.main.humidity + "%",
                    minTemperature: resp.data.main.temp_min + "°C",
                    maxTemperature: resp.data.main.temp_max + "°C",
                    time: searchDateTime,
                    iconId: resp.data.weather[0].icon
                })
            }            
        })
        .catch(error => {
            if(error.response.status === 404 ){
                let tempSearchValidation = searchValidation
                searchValidation.recordNotFound.isValid = false
                setSearchValidation(tempSearchValidation)
            }     
            console.log("error", error)
        })
    }    
}
import { useState } from "react";
import { ResultTable } from "./ResultTable";
import { SearchHistory } from "./SearchHistory";
import { DefaultResultData, DefaultSearchData, DefaultSearchValidationData } from "../constant/DefaultData";
import { SearchComponent } from "./SearchComponent";

export function Weather(){
    const [ searchData, setSearchData ] = useState(DefaultSearchData)
    const [ result, setResult ] = useState(DefaultResultData)
    const [ searchValidation, setSearchValidation ] = useState(DefaultSearchValidationData)

    const localContext = {
        searchData, setSearchData, result, setResult, searchValidation, setSearchValidation
    }

    return (
        <div className="main-frame">
            <h3>Today's Weather</h3>
            <hr/>
            <SearchComponent localContext = {localContext} />
            <ResultTable localContext = {localContext} />
            <SearchHistory localContext = {localContext} />
        </div>
    )
}
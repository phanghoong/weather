import { DefaultResultData, DefaultSearchData } from "../constant/DefaultData"

export default function onClickClear(localContext){
    const { setSearchData, setResult } = localContext
    
    setSearchData(DefaultSearchData)
    setResult(DefaultResultData)
}
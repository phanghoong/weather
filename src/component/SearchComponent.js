import onClickClear from "../function/onClickClear"
import onClickSearch from "../function/onClickSearch"
import { TextBox } from "./TextBox"

export function SearchComponent(props){
    const { localContext } = props
    const { searchData, searchValidation } = localContext

    return (
        <>
        <table>
            <tbody style={{width: "100%"}}>
                <tr>
                    <td className="search-form">
                        <TextBox 
                            label={"City"}
                            fieldName={"cityName"}
                            localContext = { localContext } />
                    </td>
                    <td className="search-form">
                        <TextBox 
                            label={"Country"}
                            fieldName={"countryCode"}
                            localContext = { localContext } />
                    </td>
                    <td className="search-form">
                        <button className='btn' onClick={()=>onClickSearch(searchData.cityName, searchData.countryCode, localContext)}>Search</button>
                        <button className='btn' onClick={()=>onClickClear(localContext)}>Clear</button>
                    </td>
                </tr>
            </tbody>
        </table>
        {
            !searchValidation.recordNotFound.isValid && (
            <div className="main-fail fail-cell">
                <span><small className="fail-des">{searchValidation.recordNotFound.errorMessage}</small></span>
            </div>
            )
        }
        </>
    )
}
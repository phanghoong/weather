import onClickDelete from "../function/onClickDelete"
import onClickSearch from "../function/onClickSearch"

export function SearchHistory(props){

    const { localContext } = props
    const { result } = localContext

    return (
        <div >
            <h3>
                Search History
            </h3>
            <hr/>
            <div>
                <table className="search-history-table">
                {Object.keys(result.history).length > 0 ?
                    <tbody>
                        {result.history && result.history.map((row, index) => (
                            <>
                            <tr className="history-row" key={index}>
                                <td>{index + 1 + ". "}</td>
                                <td>{row.cityName + "," + row.countryCode}</td>
                                <td style={{marginTop: "5px", marginBottom:"8px"}}>
                                    <div className="inline" style={{marginRight: "10px"}}> {row.time} </div>
                                    <div className="search-btn round-btn inline" onClick={()=>onClickSearch(row.cityName, row.countryCode, localContext)}></div>
                                    <div className="delete-btn round-btn inline" onClick={()=>onClickDelete(index, localContext)}></div>
                                </td>
                            </tr>
                            </>
                        ))}
                    </tbody>
                    :
                    <tbody>
                        <tr >
                            <td style={{textAlign: "center"}} >
                                No record
                            </td>
                        </tr>
                    </tbody>
                }
                </table>
            </div>
        </div>
    )
}
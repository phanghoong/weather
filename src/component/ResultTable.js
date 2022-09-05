import icons from '../images/icons.png'
import handleIcon from "./../function/handleIcon"

export function ResultTable(props){
    const { localContext } = props
    const { result } = localContext

    return(
        <>
        {Object.keys(result.history).length > 0 && (
        <div className='result-frame'>
            <h5>{result.city + ", " + result.countryCode}</h5>
            <table>
                <tbody>
                    <tr>
                        <td width={"20px"}>
                            <div className="weather-image" style={{background:`url(${icons}) no-repeat scroll ${handleIcon(result.iconId)}  transparent`}}></div>
                        </td>
                        <td>
                            <span className='large-font'>{result.weather}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Description: </label>
                        </td>
                        <td>
                            <span className="bold-text">{result.description}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Temperature: </label>
                        </td>
                        <td>
                            <span className="bold-text">{result.minTemperature + " ~" + result.maxTemperature}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Humidity: </label>
                        </td>
                        <td>
                            <span className="bold-text">{result.humidity}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Time: </label>
                        </td>
                        <td>
                            <span className="bold-text">{result.time}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )}
        </>        
    )

}
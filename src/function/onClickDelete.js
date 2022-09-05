export default function onClickDelete(index, localContext){
    const { result, setResult } = localContext
    
    let historyRecords = result.history;

    if (index > -1) { // only splice array when item is found
        historyRecords.splice(index, 1); // 2nd parameter means remove one item only
    }

    setResult({...result, history: historyRecords})
}

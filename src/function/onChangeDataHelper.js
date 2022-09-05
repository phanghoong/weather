export default function onChangeDataHelper(e, localContext){
    const { searchData, setSearchData } = localContext
    
    const target = e.target
    const name = target.name
    const value = target.value

    setSearchData({...searchData, [name]: value})

}
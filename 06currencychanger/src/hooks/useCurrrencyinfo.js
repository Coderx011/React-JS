import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
const [data, setData] = useState({})

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
console.log(url)
    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((response)=>setData(response[currency]))
        console.log(data);
    },[currency])
    return data
}

export default useCurrencyInfo;
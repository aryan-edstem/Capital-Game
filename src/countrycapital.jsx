import React from "react"

function CountryCapital(props){
    const {data}=props
    return(
        <div>
            <button onClick={handleCapitalCheck}>{data.India}</button>
            <button onClick={handleCapitalCheck}>{data.Australia}</button>
        </div>
    )
}
export default CountryCapital
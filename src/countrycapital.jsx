import React from "react"

function CountryCapital(props){
    const {data}=props
    return(
        <div>
            <button>{data.India}</button>
        </div>
    )
}
export default CountryCapital
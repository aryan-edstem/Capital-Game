import React, {useState} from "react"

function CountryCapital(props){

    const {data}=props
    const list=Object.entries(data)
    const newlist=JSON.stringify(list)
    console.log(newlist)
    const [firstValue,setFirstValue]=useState('');
    const [secondValue,setSecondValue]=useState('');
    // const handleCapitalCheck= (e) => {
        
    //     if(firstValue===''){
    //         setFirstValue(e.target.value)
    //          console.log(firstValue)
    //         }
        
    //     else {
    //         setSecondValue(e.target.value)
    //         console.log(secondValue)
    //         }
        
    //     if(secondValue)
    //         {

    //         }

    // }
    return(
        <div>
            {list.map((country)=>{
                return(
                    <button>{country}</button>
                )
            })}
            {/* 
            {/* <button onClick={handleCapitalCheck} value={data.India}>{data.India}</button>
            <button onClick={handleCapitalCheck} value="India">India</button>
            <button onClick={handleCapitalCheck} value={data.Australia}>{data.Australia}</button>
            <button onClick={handleCapitalCheck} value="Australia">Australia</button> */} 
        </div>
    )
}
export default CountryCapital
import React, {useEffect, useState} from "react"
import './countrycapital.css'
function CountryCapital(props)
    {
    const {data}=props
    // const [firstValue,setFirstValue]=useState('');
    // const [secondValue,setSecondValue]=useState('');
    // const [shuffledCountries,setShuffledCountries]=useState([]);
    // const [shuffledCapitals,setShuffledCapitals]=useState([]);
    // const [clicked,setClicked]=useState('');
    // const [status,setStatus]=useState('');
    // const [selectedButtons,setSelectedButtons]=useState(0);

    // const handleValueChange = (event) => {
    //         if(selectedButtons>2){
    //             setSelectedButtons('');
    //         }
    //         setClicked(event.currentTarget.value);
    //         if(firstValue===''){
    //             setFirstValue(event.currentTarget.value)
    //             setSelectedButtons(selectedButtons+1)}
    //         else if(firstValue){
    //             setSecondValue(event.currentTarget.value)
    //             setSelectedButtons(selectedButtons+1)
    //             }
    //             }

    // const handleCheck = () => {
    //     if(data[firstValue] === secondValue){
    //         setStatus('Correct');
    //     }
    //     else if(Object.keys(data).find(key=>data[key]===firstValue)===secondValue)
    //         setStatus('Correct');
    //     else
    //         setStatus('Wrong');
    // }
    
    function shuflle (countries) {
        for(let i=countries.length-1;i>0;i--) {
            const j=Math.floor(Math.random()*(i+1));
            [countries[i],countries[j]]=[countries[j],countries[i]];
        }   
        return countries
    }

    const buttonList = shuffle ([...Object.keys(data),...Object.values(data)])
    console.log(buttonList)
    // return(
    //     <div>
    //         {shuffle.map((country)=>{
    //             return(
    //                 <button onClick={handleValueChange} className= {clicked=== country  ? 'clicked': '' } value={country}> {country} </button>
    //             )
    //         })}
    //         {shuffledCapitals.map((capital)=>{
    //             return(
    //                 <button onClick={handleValueChange} className={clicked=== capital ? 'clicked': '' } value={capital}> {capital} </button>
    //             )
    //         })}
    //         <h1>First:{firstValue}</h1>
    //         <h1>Second:{secondValue}</h1>
    //         <h1>status:{status}</h1>
    //         <button onClick={handleCheck}>Check</button>
    //         <h1>buttons:{selectedButtons}</h1>
    //     </div>
    // )
    }
export default CountryCapital
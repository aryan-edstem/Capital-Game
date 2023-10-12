import React, {useEffect, useState} from "react"
import './countrycapital.css'
function CountryCapital(props)
    {
    const {data}=props
    const country=Object.keys(data);
    const capital=Object.values(data);
    const [firstValue,setFirstValue]=useState('');
    const [secondValue,setSecondValue]=useState('');
    const [shuffledCountries,setShuffledCountries]=useState([]);
    const [shuffledCapitals,setShuffledCapitals]=useState([]);
    const [clicked,setClicked]=useState('')
    const [status,setStatus]=useState('')
    const handleValueChange = (event) => {
            setClicked(event.currentTarget.value);
            if(firstValue===''){
                setFirstValue(event.currentTarget.value)}
            else if(firstValue){
                setSecondValue(event.currentTarget.value)
                    }
                }

    const handleCheck = () => {
        if(data[firstValue] === secondValue){
            setStatus('Correct');
        }
        else if(Object.keys(data).find(key=>data[key]===firstValue)===secondValue)
            setStatus('Correct');
        else
            setStatus('Wrong');
    }
    
    useEffect(()=>{
        const shuffledcountries=[...country].sort(()=> Math.random()-0.5);
        setShuffledCountries(shuffledcountries);
        const shuffledcapitals=[...capital].sort(()=> Math.random()-0.5);
        setShuffledCapitals(shuffledcapitals);
    },[]);

    return(
        <div>
            {shuffledCountries.map((country)=>{
                return(
                    <button onClick={handleValueChange} className= {clicked=== country ? 'clicked': '' } value={country}> {country} </button>
                )
            })}
            {shuffledCapitals.map((capital)=>{
                return(
                    <button onClick={handleValueChange} className={clicked=== capital ? 'clicked': '' } value={capital}> {capital} </button>
                )
            })}
            <h1>First:{firstValue}</h1>
            <h1>Second:{secondValue}</h1>
            <h1>status:{status}</h1>
            <button onClick={handleCheck}>Check</button>
        </div>
    )
    }
export default CountryCapital
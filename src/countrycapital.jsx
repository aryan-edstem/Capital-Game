import React, { useState} from "react"
import './countrycapital.css'
function CountryCapital(props)
    {
    const {data}=props
    const [buttonList,setButtonList] = useState(shuffle ([...Object.keys(data), ...Object.values(data)]));    
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [prevAnswer, setPrevAnswer] = useState('')



    const handleCheck = (e) => {
        const answer=e.currentTarget.value;
        if(!selectedAnswer) {
        setSelectedAnswer(answer)}
        else {
            if(data[selectedAnswer] === answer || data[answer] === selectedAnswer) {
              setButtonList(buttonList.filter(b => b !== answer && b !==selectedAnswer ));
              setSelectedAnswer(null);
              setPrevAnswer(null);
            } else {
              setPrevAnswer(selectedAnswer);
              setSelectedAnswer(answer);
    
              setTimeout(() => {
                setSelectedAnswer(null);
              setPrevAnswer(null);
              },1000);
            }
           }
       }
    


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }

    if (buttonList.length === 0) {
    return<p>Congratulations</p>
   }

    return(
        <div>
            {buttonList.map((item) => {
       return <button key={item} className={`game-button ${selectedAnswer === item ? "selected" : ''} 
       ${prevAnswer && (item === selectedAnswer || item === prevAnswer) ? "incorrect" : '' }`} 
       onClick={handleCheck} value={item}>{item}</button>
        })}
            <h1>First:{prevAnswer}</h1>
            <h1>Second:{selectedAnswer}</h1>
        </div>
    )
    }
export default CountryCapital
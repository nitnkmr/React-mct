import "./App.css";
import Container from "./Container";
import {  useState } from "react";
import ResetButton from "./ResetButton";

function App() {
  const [first, setfirst] = useState(0)
  const [firstb, setfirstb] = useState(false)
  const [reset, setreset] = useState(false)
  const [count, setcount] = useState(0)
  const [questionNumber, setquestionNumber] = useState(0)
  const question=[
    {
      que1:"What is the Capital of India",
      ans:"Delhi",
      opt1:"Delhi",
      opt2:"Lucknow",
      opt3:"Bareilly",
      opt4:"Noida"
    },
    {
      que1:"What is the name of National animal?",
      ans:"Lion",
      opt1:"Elephant",
      opt2:"Lion",
      opt3:"cow",
      opt4:"beer"
    },
    {
      que1:"What is the Capital of Nepal",
      ans:"Kathmandu",
      opt1:"Delhi",
      opt2:"Lucknow",
      opt3:"Bareilly",
      opt4:"Kathmandu"
    },
    {
      que1:"What is the Capital of Bangladesh",
      ans:"Dhaka",
      opt1:"Delhi",
      opt2:"Dhaka",
      opt3:"Bareilly",
      opt4:"Noida"
    },
    {
      que1:"How many Days in one week?",
      ans:"7",
      opt1:"7",
      opt2:"9",
      opt3:"6",
      opt4:"5"
    },
]
function ansHandler(e) {
   console.log(e);
   if(e.target.innerText===question[count].ans){
    e.target.style.backgroundColor="green";

    setfirstb(true)
    setTimeout(() => {
      setfirst(first+1)  
      if(count<question.length-1){
        setcount(count+1)
        setquestionNumber(questionNumber+1)
      }
      else{
        setcount(0)
        setquestionNumber(0)
        setreset(true)
      }
      e.target.style.backgroundColor="white";
    }, 1000);
    console.log(firstb);
    
  }
  else{
    e.target.style.backgroundColor="red";
     setfirstb(false)
    console.log(firstb);
    setTimeout(() => {
      if(count<question.length-1){
        setcount(count+1)
        setquestionNumber(questionNumber+1)
      }
      else{
        setcount(0)
        setquestionNumber(0)
        setreset(true);
      }
      e.target.style.backgroundColor="white";
    }, 1000)
   }

}

  return (
    <div className="App">
      <Container question={question[count]} first={first} questionNumber={questionNumber} ansHandler={ansHandler}/>
      {reset?<ResetButton score={first}/>:null}
    </div>
  );
}

export default App;

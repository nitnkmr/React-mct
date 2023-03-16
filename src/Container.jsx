import React from 'react'

const Container = ({question,first,questionNumber,ansHandler}) => {
  return (
    <div className="container center col">
        <div className="header center">
          <h1>Geekster Quiz</h1>
          <div>score: {first}</div>
          <div>Question no. {questionNumber+1}</div>
        </div>
        <div className="inner center col">
          <div className="question center">{question.que1}</div>
          <div className="option center col">
            <div className="opt center" onClick={(e)=>ansHandler(e)}>{question.opt1}</div>
            <div className="opt center" onClick={(e)=>ansHandler(e)}>{question.opt2}</div>
            <div className="opt  center"onClick={(e)=>ansHandler(e)}>{question.opt3}</div>
            <div className="opt center"onClick={(e)=>ansHandler(e)}>{question.opt4}</div>
          </div>
        </div>
      </div>
  )
}

export default Container
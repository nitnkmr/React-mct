import React from 'react'

const ResetButton = ({score}) => {
  return (
    <div className='reset center col'>
        <div className="score">Your Score is :{score}</div>
        <form action=""><input type="submit" value="Reset" /></form>
    </div>
  )
}

export default ResetButton
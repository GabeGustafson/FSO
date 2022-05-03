import { useState } from 'react'

const FeedbackButton = ({text, count, setCount}) => 
  <button onClick = {() => setCount(count+1)}>{text}</button>


const FeedbackDisplay = ({text, count}) => 
  <p>{text} {count}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodText = "good"
  const neutralText = "neutral"
  const badText = "bad"

  return (
    <div>

      <div>
        <h1>give feedback</h1>
        <FeedbackButton text={goodText} count={good} setCount={setGood}/>
        <FeedbackButton text={neutralText} count={neutral} setCount={setNeutral}/>
        <FeedbackButton text={badText} count={bad} setCount={setBad}/>
      </div>

      <div>
        <h1>statistics</h1>
        <FeedbackDisplay text={goodText} count={good}/>
        <FeedbackDisplay text={neutralText} count={neutral}/>
        <FeedbackDisplay text={badText} count={bad}/>
      </div>
    </div>
  )
}

export default App
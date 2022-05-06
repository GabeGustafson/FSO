import { useState } from 'react'

const Button = ({text, setCount}) => 
  <button onClick = {setCount}>{text}</button>


const StatisticLine = ({text, stat}) => 
  <tr><td>{text}</td><td>{stat}</td></tr>


const Statistics = ({goodText, neutralText, badText, good, bad, neutral}) =>
{
  const total = good + bad + neutral;

  if(total > 0)
  {
    return <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={goodText} stat={good}/>
          <StatisticLine text={neutralText} stat={neutral}/>
          <StatisticLine text={badText} stat={bad}/>

          <StatisticLine text="all" stat={total}/>
          <StatisticLine text="average" stat={(good-bad)/(total)}/>
          <StatisticLine text="positive" stat={((good)/(total) * 100) + "%"}/>
        </tbody>
      </table>
    </div>;
  }
  else
  {
    return <p>No feedback given</p>;
  }
}


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
        <Button text={goodText} count={good} setCount={() => setGood(good+1)}/>
        <Button text={neutralText} count={neutral} setCount={() => setNeutral(neutral+1)}/>
        <Button text={badText} count={bad} setCount={() => setBad(bad+1)}/>
      </div>

    <Statistics goodText={goodText} neutralText={neutralText} badText={badText} 
                good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App
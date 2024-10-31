import { useState } from 'react'

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <p>
    {props.flag}: {props.value}
  </p>
)


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const title1 = "give feedback"
  const title2 = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const average = total > 0 ? (good - bad) / total : 0;
  const positivePercent = total > 0 ? (good * 100) / total : 0;


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    console.log("good button stats ",good+1)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
    console.log("neutral button stats ",neutral+1)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    console.log("bad button stats ",bad+1)
  }

  return (
    <div>
      <Title text={title1} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Title text={title2} />
      <Statistics flag="good" value={good}/>
      <Statistics flag="neutral" value={neutral}/>
      <Statistics flag="bad" value={bad}/>

      <Statistics flag="all " value={total} />
      <Statistics flag="average " value={average} />
      <Statistics flag="positive " value={positivePercent} />

    </div>
  )
}

export default App
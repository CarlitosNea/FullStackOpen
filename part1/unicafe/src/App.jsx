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

const Display = (props) => (
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

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log("good button stats ",good+1)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log("neutral button stats ",neutral+1)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log("bad button stats ",bad+1)
  }

  return (
    <div>
      <Title text={title1} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Title text={title2} />
      <Display flag="good" value={good}/>
      <Display flag="neutral" value={neutral}/>
      <Display flag="bad" value={bad}/>
    </div>
  )
}

export default App
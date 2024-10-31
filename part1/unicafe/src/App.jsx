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

const StatisticLine = (props) => (
  <p>
    {props.flag}: {props.value}
  </p>
)

const Statistics = (props) => {
  if (props.total.length === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <StatisticLine flag={props.goodFlag} value={props.goodVal}/>
        <StatisticLine flag={props.neutralFlag} value={props.neutralVal}/>
        <StatisticLine flag={props.badFlag} value={props.badVal}/>
        <StatisticLine flag={props.totalFlag} value={props.totalVal}/>
        <StatisticLine flag={props.avgFlag} value={props.avgVal}/>
        <StatisticLine flag={props.percentFlag} value={props.percentVal}/>
      </div>
    )
  }
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const title1 = "give feedback"
  const title2 = "StatisticLine"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([])
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
      <Statistics total={total} goodFlag="good" goodVal={good} neutralFlag="neutral" neutralVal={neutral} badFlag="bad" badVal={bad} totalFlag="all" totalVal={total} avgFlag="average" avgVal={average} percentFlag="positive" percentVal={positivePercent} />

    </div>
  )
}

export default App
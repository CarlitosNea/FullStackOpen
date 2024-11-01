import { useState } from 'react'

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Anecdote = (props) => {
  return (
    <p>{props.text}</p>
  )
}

const Votes = (props) => {
  return (
    <p>has {props.val} votes</p>
  )
}

const Button = ({handleClick , text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotesAnecdote = (props) => {
  const anecdotes = props.anecdotes
  const points = props.points
  const [mayor, setMayor] = useState(0)
  const [pos, setPos] = useState(0)
  return (
    <p>
      {points.map((val,i) => {
        if (val > mayor) {
          setMayor(val)
          setPos(i)
          console.log("mayor ",mayor)
          console.log("indice ",i)
        }
      })}
      {anecdotes[pos]}
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(8).fill(0));


  const handlePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    console.log(copy)
    setPoints(copy)

  }

  const handleAnecdote = () => {
    const updatedSelect = Math.floor(Math.random() * (7 - 0 + 1)) + 0
    console.log("anecdote: ",updatedSelect)
    setSelected(updatedSelect)
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} />
      <Votes val={points[selected]} />
      <div>
        <Button handleClick={handlePoints} text="vote" />
        <Button handleClick={handleAnecdote} text="next anecdote" />
      </div>
      <Title text="Anecdote with most votes" />
      <MostVotesAnecdote points={points} anecdotes={anecdotes} />
      
    </div>
  )
}

export default App

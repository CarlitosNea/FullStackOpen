// definicion del componente header
const Header = (props) => {
  console.log("Header")
  console.log(props)
  return (
    <h1>{props.course_name}</h1>
  )
}

// definicion del componente part
const Part = (props) =>{
  console.log("Part")
  console.log(props)
  return (
    <p>
      {props.part_name} {props.part_exercises}
    </p>
  )
}

// definicion del componente content
const Content = (props) => {
  console.log("Content")
  console.log(props)
  return (
    <div>
      <Part part_name={props.part1.name} part_exercises={props.part1.exercises} />
      <Part part_name={props.part2.name} part_exercises={props.part2.exercises} />
      <Part part_name={props.part3.name} part_exercises={props.part3.exercises} />
    </div>
  )
}

// definicion del componente total
const Total = (props) => {
  console.log("Total")
  console.log(props)
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course_name={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App

// definicion del componente header
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course_name}</h1>
  )
}

// definicion del componente content
const Content = (props) => {
  console.log(props)
  return(
    <p>
      {props.course_part} {props.part_exercises}
    </p>
  )
}

// definicion del componente total
const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      {/* Llamado del Header y su contenido "course" */}
      <Header course_name={course} />

      {/* Llamado del Content y sus contenidos "part#" y "exercises#" */}
      <Content course_part={part1} part_exercises={exercises1}/>
      <Content course_part={part2} part_exercises={exercises2}/>
      <Content course_part={part3} part_exercises={exercises3}/>

      {/* Llamado del Total y sus valores */}
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </>
  )
}

export default App

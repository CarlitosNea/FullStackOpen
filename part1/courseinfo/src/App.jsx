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
      <Part part_name={props.part1} part_exercises={props.exercises1} />
      <Part part_name={props.part2} part_exercises={props.exercises2} />
      <Part part_name={props.part3} part_exercises={props.exercises3} />
    </div>
  )
}

// definicion del componente total
const Total = (props) => {
  console.log("Total")
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

      {/* Llamado del Content */}
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />

      {/* Llamado del Total y sus valores */}
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </>
  )
}

export default App

// definicion del componente header
const Header = (props) => {
  console.log("Header")
  console.log(props)
  return (
    <h1>{props.obj.name}</h1>
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
      <Part part_name={props.obj.parts[0].name} part_exercises={props.obj.parts[0].exercises} />
      <Part part_name={props.obj.parts[1].name} part_exercises={props.obj.parts[1].exercises} />
      <Part part_name={props.obj.parts[2].name} part_exercises={props.obj.parts[2].exercises} />
    </div>
  )
}

// definicion del componente total
const Total = (props) => {
  console.log("Total")
  console.log(props)
  return (
    <p>Number of exercises {props.obj.parts[0].exercises + props.obj.parts[1].exercises + props.obj.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header obj={course} />
      <Content obj={course} />
      <Total obj={course} />
    </div>
  )
}

export default App

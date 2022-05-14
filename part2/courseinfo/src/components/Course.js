const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ parts }) => 
{
    const sum = parts.reduce( (count, p) => count + p.exercises, 0);
    return <b>Total of {sum} exercises </b>;
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
    parts.map(p => <Part key={p.id} part={p}/>);    

const Course = ({course}) => {

    return (
        <div>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
}

export default Course
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hola {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 5

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={3 + 1}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App

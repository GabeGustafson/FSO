import { useState } from 'react'

const PersonForm = ({name, nameSetter, book, bookSetter}) => {
  const handleSubmit = (event) => 
  {
    event.preventDefault();

    nameSetter("");

    const newPerson = {name: name};
    bookSetter(book.concat(newPerson));
  };

  const handleChange = (event) =>
  {
    nameSetter(event.target.value);
  }
  
  return(
    <>
    <h2>Phonebook</h2>
    <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={name}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    </>
  );
};

const Numbers = ({book}) =>
{
  const personListing = book.map(({name}) => <p key={name}>{name}</p>);

  return(
  <>
    <h2>Numbers</h2>
    {personListing}
  </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <PersonForm name={newName} nameSetter={setNewName} 
          book={persons} bookSetter={setPersons}/>
      <Numbers book={persons}/>
    </div>
  )
}

export default App;
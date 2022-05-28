import { useState } from 'react';
import PersonForm from './PersonForm';

const Numbers = ({book}) =>
{
  const personListing = book.map(({name}) => <li key={name}>{name}</li>);

  return(
  <>
    <h2>Numbers</h2>
    <ul>{personListing}</ul>
  </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]); 
  const [newName, setNewName] = useState('');

  return (
    <div>
      <PersonForm name={newName} nameSetter={setNewName} 
          book={persons} bookSetter={setPersons}/>
      <Numbers book={persons}/>
    </div>
  );
};

export default App;
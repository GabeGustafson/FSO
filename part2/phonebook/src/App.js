import { useState } from 'react';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';
import SearchFilter from './components/SearchFilter';

const App = () => {
    const initialPersons = [
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ];

    const [persons, setPersons] = useState(initialPersons);

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchName, setSearchName] = useState('');

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter searchName={searchName} setSearchName={setSearchName}/>

            <PersonForm
                name={newName} nameSetter={setNewName}
                number={newNumber} numberSetter={setNewNumber}
                book={persons} bookSetter={setPersons} />

            <Numbers book={persons} searchName={searchName}/>
        </div>
    );
};

export default App;
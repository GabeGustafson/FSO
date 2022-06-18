import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';
import SearchFilter from './components/SearchFilter';
import personService from './personService';

const App = () => {
    // set up effect for getting initial "persons" data once
    const personsHook = () => {
        personService.getPersons()
            .then(obtainedPersons => {
                if (obtainedPersons !== null)
                    setPersons(obtainedPersons);
                else
                    alert('Could not obtain persons. Please refresh.');
            });
    };
    useEffect(personsHook, []);

    const [persons, setPersons] = useState([]);

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

            <Numbers book={persons} searchName={searchName} setPersons={setPersons}
            persons={persons}/>
        </div>
    );
};

export default App;
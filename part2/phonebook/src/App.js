import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';
import SearchFilter from './components/SearchFilter';
import axios from 'axios';

const App = () => {
    // set up effect for getting initial "persons" data once
    const axiosHook = () => {
        axios
            .get("http://localhost:3001/persons")
            .then(response => {
                setPersons(response.data);
            });
    };
    useEffect(axiosHook, []);

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

            <Numbers book={persons} searchName={searchName}/>
        </div>
    );
};

export default App;
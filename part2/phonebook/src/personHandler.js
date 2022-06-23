// Uses service to handle database promise creation
// and handles updates to components accordingly

import personService from "./personService";
const baseUrl = 'http://localhost:3001/persons'

// returns promise with array of all people or null if unobtainable
const handleGetPersons = () => {
    const getPromise =  personService.getPersons;

    return getPromise;
};

// returns promise with the new person added to the server or
// null on failure
const createPerson = (newPerson) => {
    return (axios  
        .post(baseUrl, newPerson)
        .then(response => response.data)
        .catch(error => null)
        );
};

// returns promise with the person indicated
// by the given id to be deleted from the server or null on failure.
const deletePerson = (id) => {
    return (axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response.data)
        .catch(_ => null)
    );
}

// Updates the given person in the server. 
// Returns a promise with either the response data or null on failure.
const updatePerson = (id, newPerson) => {
    return (axios
        .put(`${baseUrl}/${id}`, newPerson)
        .then(response => response.data)
        .catch(_ => null)
        );
}

const personService = {getPersons, createPerson, deletePerson, updatePerson};

export default personService;
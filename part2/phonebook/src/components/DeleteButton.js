import personService from "../personService";

// Defines delete button for the person with the given id
const DeleteButton = ({deleteId, setPersons, persons}) => {
    const handleClick = () => {
        // delete the person in the server
        personService
            .deletePerson(deleteId) 
            .then(data => { // then, delete the person locally
                if (data !== null)
                    setPersons(persons.filter(p => p.id !== deleteId));
            }); 
    };

    return (
        <button onClick={handleClick}>Delete</button>
    )
};

export default DeleteButton;
import personService from "../personService";
import messageUpdater from "../messageUpdater";

// Defines delete button for the person with the given id
const DeleteButton = ({deleteId, deleteName, setPersons, persons, setMessage}) => {
    const handleClick = () => {
        // delete the person in the server
        personService
            .deletePerson(deleteId) 
            .then(data => { // then, delete the person locally
                setPersons(persons.filter(p => p.id !== deleteId));

                // check if the person was actually deleted on the server
                if (data === null)
                {
                    messageUpdater.update(setMessage, false, `${deleteName} has already been deleted from the server`);
                }
                else
                {
                    messageUpdater.update(setMessage, true, `${deleteName} Deleted`);
                }
            }); 
    };

    return (
        <button onClick={handleClick}>Delete</button>
    )
};

export default DeleteButton;
import personService from "../personService";
import messageUpdater from "../messageUpdater";

const PersonForm = ({ name, nameSetter, number, numberSetter, 
    book, bookSetter, setMessage }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const newPerson = { name: name, number: number };

        const foundIndex = book.findIndex(p => p.name === name)

        // if the name is new, create the person
        if (foundIndex === -1) {
            // create the new person in the server
            personService
                .createPerson(newPerson)
                .then(returnedPerson => { // create new person locally
                    // create the returned person locally 
                    // NOTE: this saves the json-server assigned id locally
                    if (returnedPerson !== null)
                    {
                        // reset input fields
                        nameSetter("");
                        numberSetter("");
                        bookSetter(book.concat(returnedPerson));

                        messageUpdater.update(setMessage, true, `Added ${returnedPerson.name}`);
                    }
                    else // set error message
                    {

                    }
                });
        }
        else // otherwise, ask the user if they wish to overwrite the person
        {
            const replaceChosen = window.confirm(`${name} is already in the phonebook. Do you wish to replace their number?`);

            if(replaceChosen)
            {
                const foundId = book[foundIndex].id;

                // update the person in the server
                personService
                    .updatePerson(foundId, newPerson)
                    .then(returnedPerson =>  
                        {
                            // reset input fields
                            nameSetter("");
                            numberSetter("");

                            // update the person locally (use json-server's assigned id)
                            const newBook = book.map(p => (p.id !== foundId) ? p : returnedPerson);
                            bookSetter(newBook);

                            messageUpdater.update(setMessage, true, `Updated ${returnedPerson.name}`);
                        });
            }
        }
    };

    const handleNameChange = (event) => {
        nameSetter(event.target.value);
    };

    const handleNumberChange = (event) => {
        numberSetter(event.target.value);
    };

    return (
        <>
            <h3>Add New Person</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input onChange={handleNameChange} value={name} />
                </div>
                <div>
                    Number: <input onChange={handleNumberChange} value={number} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
};

export default PersonForm;
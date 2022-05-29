const PersonForm = ({ name, nameSetter, number, numberSetter, book, bookSetter }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // if the name is unique, add the person
        if (book.every(p => p.name !== name)) {
            // reset input fields
            nameSetter("");
            numberSetter("");

            // create and add the new person
            const newPerson = { name: name, number: number };
            bookSetter(book.concat(newPerson));
        }
        else // otherwise, alert the user
        {
            alert(`${name} is already in the phonebook!`);
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
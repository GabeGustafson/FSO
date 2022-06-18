import DeleteButton from "./DeleteButton";

// contact for a given person
const Number = ({id, personName, number, setPersons, persons}) => {
    return (
        <li>
            {`${personName} ${number}`} <DeleteButton deleteId={id} setPersons={setPersons} persons={persons}/>
        </li>
    );
}

// list of contacts for all filtered people
const Numbers = ({ book, searchName, setPersons, persons }) => {
    const bookView =
        book // filter the people by the search-name query
            .filter(({name}) => name.toLowerCase().includes(searchName.toLowerCase()))
            .map(({ id, name, number }) => { // create list items with delete buttons for the filtered people
                return <Number key={name} id={id} personName={name} number={number}
                        setPersons={setPersons} persons={persons}/>
            });     

    return (
        <>
            <h3>Numbers</h3>
            <ul>{bookView}</ul>
        </>
    );
};

export default Numbers;
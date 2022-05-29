const Numbers = ({ book, searchName }) => {
    const bookView = book.filter(({name}) => name.toLowerCase().includes(searchName.toLowerCase()))
                        .map(({ name, number }) => <li key={name}>{`${name} ${number}`}</li>);

    return (
        <>
            <h3>Numbers</h3>
            <ul>{bookView}</ul>
        </>
    );
};

export default Numbers;
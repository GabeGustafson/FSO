const PersonForm = ({name, nameSetter, book, bookSetter}) => {
  const handleSubmit = (event) => 
  {
    event.preventDefault();

    // if the name is unique, add the person
    if( book.every(p => p.name !== name) )
    {
      nameSetter("");
      const newPerson = {name: name};
      bookSetter(book.concat(newPerson));
    }
    else // otherwise, alert the user
    {
      alert(`${name} is already in the phonebook!`);
    }
  };

  const handleChange = (event) =>
  {
    nameSetter(event.target.value);
  };
  
  return(
    <>
    <h2>Phonebook</h2>
    <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={name}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    </>
  );
};

export default PersonForm;
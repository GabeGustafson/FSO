const SearchFilter = ({searchName, setSearchName}) =>
{
    const handleSearchChange = (event) =>
    {
        setSearchName(event.target.value);
    };

    return (
        <div>
            Filter by name: <input onChange={handleSearchChange} value={searchName}/>
        </div>
    );
};

export default SearchFilter;
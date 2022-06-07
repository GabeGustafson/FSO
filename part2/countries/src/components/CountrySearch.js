const CountrySearch = ({searchWord, setSearchWord, initialCountries, setFilteredCountries}) =>
{
    const searchChangeHandler = (event) => {
        const newSearchWord = event.target.value;

        // change the search word
        setSearchWord(newSearchWord);

        // change the filtered list
        const newFilteredCountries = initialCountries.filter(({name}) => name.common.toLowerCase().includes(newSearchWord));
        setFilteredCountries(newFilteredCountries);
    };


    return(
        <div>
            <p>Filter Countries: </p><input value={searchWord} onChange={searchChangeHandler}></input>
        </div>
    )
}

export default CountrySearch;
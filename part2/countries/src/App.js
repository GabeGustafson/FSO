import { useState, useEffect } from "react";
import axios from "axios";
import CountrySearch from "./components/CountrySearch";
import CountryDisplay from "./components/CountryDisplay";

function App() {
    // state variables
    const [searchWord, setSearchWord] = useState(''); // search word for filtering countries
    const [initialCountries, setInitialCountries] = useState([]); // whole list of countries
    const [filteredCountries, setFilteredCountries] = useState([]); // filtered list of countries

    // get the initial list of countries from restcountries.com
    const getCountriesHook = () => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                setInitialCountries(response.data);
            });
    };
    useEffect(getCountriesHook, []);

    return (
        <>
            <CountrySearch searchWord={searchWord} setSearchWord={setSearchWord}
                initialCountries={initialCountries} setFilteredCountries={setFilteredCountries}/>
            
            <CountryDisplay filteredCountries={filteredCountries}/>
        </>
    );
}

export default App;

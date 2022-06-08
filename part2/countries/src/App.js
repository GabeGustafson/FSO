import { useState, useEffect } from "react";
import axios from "axios";
import CountrySearch from "./components/CountrySearch";
import CountryDisplay from "./components/CountryDisplay";

function App() {
    // state variables
    const [searchWord, setSearchWord] = useState(''); // search word for filtering countries
    const [initialCountries, setInitialCountries] = useState([]); // whole list of countries
    const [filteredCountries, setFilteredCountries] = useState([]); // filtered list of countries
    const [countryWeather, setCountryWeather] = useState({}); // weather for an individual country

    // get the initial list of countries from restcountries.com
    const getCountriesHook = () => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const fullCountries = response.data;

                // set the inital list
                setInitialCountries(fullCountries);
                // set the filtered list
                const newFilteredCountries = fullCountries.filter(({name}) => name.common.toLowerCase().includes(searchWord));
                setFilteredCountries(newFilteredCountries);
            });
    };
    useEffect(getCountriesHook, []);

    return (
        <>
            <CountrySearch searchWord={searchWord} setSearchWord={setSearchWord}
                initialCountries={initialCountries} setFilteredCountries={setFilteredCountries}/>
            
            <CountryDisplay filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}/>
        </>
    );
}

export default App;

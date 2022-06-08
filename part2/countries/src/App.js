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

    // get info based on state
    const numCountries = filteredCountries.length;

    // get the initial list of countries from restcountries.com
    const getCountriesHook = () => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const fullCountries = response.data;

                // set the inital list
                setInitialCountries(fullCountries);
                // set the filtered list
                setFilteredCountries(fullCountries);
            });
    };
    useEffect(getCountriesHook, []);

    // get the weather for the selected country (if it exists)
    const getWeatherHook = () => {
        if(numCountries === 1)
        {
            const country = filteredCountries[0];
            const latlng = country.capitalInfo.latlng;
            const requestURL = `https://api.openweathermap.org/data/3.0/onecall` +
            `?lat=${latlng[0]}&lon=${latlng[1]}` +
            `&units=imperial` +
            `&exclude=hourly,daily,minutely,alerts` +
            `&appid=${process.env.REACT_APP_API_KEY}`;

            console.log(requestURL);
            axios
                .get(requestURL)
                .then((response) => {
                    console.log(response.data);
                    setCountryWeather(response.data.current);
                });
        }
    };
    useEffect(getWeatherHook);

    return (
        <>
            <CountrySearch searchWord={searchWord} setSearchWord={setSearchWord}
                initialCountries={initialCountries} setFilteredCountries={setFilteredCountries}/>
            
            <CountryDisplay filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}
                countryWeather={countryWeather}/>
        </>
    );
}

export default App;

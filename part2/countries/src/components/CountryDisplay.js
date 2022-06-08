import CountryWeather from "./CountryWeather";

// info on one country
const InfoDisplay = ({country, countryWeather}) =>
{
    const languages = Object.values(country.languages);
    const languageItems = languages.map((lang) => 
        <li key={lang}>{lang}</li>);

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>

            <h3>Languages:</h3>
            <ul>{languageItems}</ul>

            <img src={country.flags.png} alt={`${country.name.common}'s flag`} />

            <CountryWeather country={country} countryWeather={countryWeather} />
        </div>
    );
};

// list of countries
const CountryList = ({filteredCountries, setFilteredCountries}) =>
{
    const countryItems = filteredCountries.map((country) => {
        return (<li key={country.name.official}>
                {country.name.common}
                <ShowInfoButton country={country} setFilteredCountries={setFilteredCountries}/>
            </li>);
    });

    return <ul>{countryItems}</ul>;
};

// button that force-filters to just one country (showing its info)
const ShowInfoButton = ({country, setFilteredCountries}) => {
    const handleClick = () => {
        setFilteredCountries([country]);
    };

    return <button onClick={handleClick}>Show</button>;
};

// dynamic display based on filtered countries
const CountryDisplay = ({filteredCountries, setFilteredCountries, countryWeather}) =>
{
    const numCountries = filteredCountries.length;

    // return a message, country info, or a country list depending on the 
    // quantity of filtered countries
    if(numCountries === 1) // display info on one country
    {
        return (<InfoDisplay country={filteredCountries[0]} countryWeather={countryWeather} />);
    }
    else if((numCountries > 1) && (numCountries <= 10)) // display list of filtered countries
    {
        return (<CountryList filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}/>);
    }
    else if(numCountries === 0) // not enough countries, display a message
    {
        return (<p>Not enough countries, please loosen the filter.</p>);
    }
    else // too many countries, display a message
    {
        return (<p>Too many countries, please tighten the filter.</p>);
    }
};

export default CountryDisplay;
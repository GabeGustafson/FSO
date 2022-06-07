// info on one country
const InfoDisplay = ({country}) =>
{
    return <></>;
};

// list of countries
const CountryList = ({filteredCountries}) =>
{
    const countryItems = filteredCountries.map((country) => {
        return <li key={country.name.official}>{country.name.common}</li>;
    });

    console.log(countryItems);

    return <ul>{countryItems}</ul>;
};

const CountryDisplay = ({filteredCountries}) =>
{
    const numCountries = filteredCountries.length;
    console.log(numCountries);

    // return a message, country info, or a country list depending on the 
    // quantity of filtered countries
    if(numCountries == 1) // display info on one country
    {
        return (<InfoDisplay country={filteredCountries[0]}/>);
    }
    else if((numCountries > 1) && (numCountries <= 10)) // display list of filtered countries
    {
        return (<CountryList filteredCountries={filteredCountries}/>);
    }
    else if(numCountries == 0) // not enough countries, display a message
    {
        return (<p>Not enough countries, please loosen the filter.</p>);
    }
    else // too many countries, display a message
    {
        return (<p>Too many countries, please tighten the filter.</p>);
    }
};

export default CountryDisplay;
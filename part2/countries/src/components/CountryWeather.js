const CountryWeather = ({country, countryWeather}) => {
    // get weather for the given country, if it's different than the last
    return (
    <div>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {countryWeather.temp} Celsius</p>
        <p>Wind: {countryWeather.wind} m/s</p>
    </div>);
}

export default CountryWeather;
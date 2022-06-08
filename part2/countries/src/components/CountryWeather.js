const CountryWeather = ({country, countryWeather}) => {

    // show weather for the given country
    if(countryWeather !== null)
    {
        return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {countryWeather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`}
                alt='weather'/>
            <p>Wind: {countryWeather.wind.speed} m/s</p>
        </div>);
    }
    else
    {
        return <></>;
    }
}

export default CountryWeather;
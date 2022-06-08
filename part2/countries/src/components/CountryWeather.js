import axios from "axios";

const CountryWeather = ({country, setCountryWeather}) => {
    // get weather for the given country
    const latlng = country.capitalInfo.latlng; 

    const getWeatherHook = () => {
        axios
            .get(`https://api.openweathermap.org/data/3.0/onecall?
            lat=${latlng[0]}
            &lon=${latlng[1]}
            &exclude=minutely,hourly,daily,alerts
            &appid=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setCountryWeather(); // TODO
            });
    };

    useEffect(getWeatherHook);

    return <></>
}

export default CountryWeather;
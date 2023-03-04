import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const d = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  useEffect(() => {
    const getWeather = async () => {
      const weather_url = process.env.REACT_APP_WEATHER_URL;
      const key = process.env.REACT_APP_WEATHER_KEY_VALUE;
      const res = await axios.get(
        `${weather_url}?q=${city}&appid=${key}&units=metric`
      );

      d.setSeconds(d.getSeconds() + res.data.timezone - 3600);
      setWeatherInfo(res.data);
    };
    getWeather();
  }, []);

  if (weatherInfo) {
    return (
      <div>
        <p>temp : {weatherInfo.main.temp} °C</p>
        <p>Current time : {`${days[d.getDay()]} - ${d.toLocaleString()}`}</p>
      </div>
    );
  }
  return <div>loading...</div>;
};

export default Weather;

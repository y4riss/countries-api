import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  let date = null;
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

      const date = new Date();
      date.setSeconds(date.getSeconds() + res.data.timezone - 3600);
      setWeatherInfo({...res.data,date});
    };
   getWeather();
  }, []);

  if (weatherInfo) {
    return (
      <div>
        <p><span>temp : </span>{weatherInfo.main.temp} °C</p>
        <p><span>Current time : </span>{`${days[weatherInfo.date.getDay()]} - ${weatherInfo.date.toLocaleString()}`}</p>
      </div>
    );
  }
  return <div>loading...</div>;
};

export default Weather;

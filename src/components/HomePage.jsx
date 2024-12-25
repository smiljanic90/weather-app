import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../utils/weatherAPI';
import { WeatherWidget } from './WeatherWidget';

export const HomePage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeatherData('Banjaluka').then(setWeather).catch(console.error);
  }, []);

  const weatherRender = () => {
    switch (weather) {
      case null:
        return <p>Loading weather...</p>;
      case undefined:
        return <p>Failed to load weather data</p>;
      default:
        return <WeatherWidget weather={weather} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {weatherRender()}
    </div>
  );
};

export default HomePage;

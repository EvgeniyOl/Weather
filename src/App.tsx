import { useEffect, useState } from "react";
import s from "../src/App.module.scss";
import Clock from "./components/Clock/Clock";
import WeekWeather from "./components/WeekWeather/WeekWeather";
import { fetchWeatherData } from "./fetchData/fetchWeatherData";
import location from "./fetchData/location";
import { IfetchOneDay } from "./models";

const App: React.FC = () => {
  const [oneDayWeather, setOneDayWeather] = useState<IfetchOneDay>();

  const weatherData = async () => {
    const city = await location();
    fetchWeatherData(city ? city : "q=Omsk").then((res: IfetchOneDay) => {
      setOneDayWeather(res);
    });
  };
  const imageUrl = `https://openweathermap.org/img/wn/${oneDayWeather?.weather[0].icon}@2x.png`;

  useEffect(() => {
    weatherData();
    const refreshTimer = setInterval(weatherData, 600000);
    return () => clearInterval(refreshTimer);
  }, []);

  const weatherDesc = oneDayWeather?.weather[0].description || "loading..";
  const feelsLike = oneDayWeather?.main.feels_like || "loading..";
  const wind = oneDayWeather?.wind.speed || "loading..";
  const pressure = oneDayWeather?.main.pressure || "loading..";
  const humidity = oneDayWeather?.main.humidity || "loading..";
  const sys = oneDayWeather?.sys.type || "loading..";

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.tempIconBlock}>
          <h2>{oneDayWeather?.name}</h2>
          <Clock />
          <div className={s.temperature}>{oneDayWeather?.main.temp}</div>
          <div className={s.descImgBlock}>
            <img src={imageUrl} alt={weatherDesc} />
            <p>{weatherDesc}</p>
          </div>
        </div>
      </header>

      <div className={s.body}>
        <hr />
        <ul>
          <li>
            По ощущению<span>{feelsLike}</span>
          </li>
          <li>
            Ветер<span>{wind} м/с</span>
          </li>
          <li>
            Давление<span>{pressure}</span>
          </li>
          <li>
            Влажность <span>{humidity} %</span>
          </li>
          <li>
            Геомагнитная активность
            <span>{sys} балл(а,ов)</span>
          </li>
        </ul>
        <hr />
      </div>
      <WeekWeather />
    </div>
  );
};

export default App;

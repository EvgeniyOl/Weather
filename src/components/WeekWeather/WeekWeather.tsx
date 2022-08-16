import { useEffect, useState } from "react";
import { fetchWeatherWeek } from "../../fetchData/fetchWeatherData";
import s from "./WeekWeather.module.scss";
import { IfetchWeek } from "../../models";
import location from "../../fetchData/location";

const WeekWeather: React.FC = () => {
  const [weekWeather, setWeekWeather] = useState<IfetchWeek[]>();

  const weekTempData = async () => {
    const city = await location();
    fetchWeatherWeek(city ? city : "lat=54.4&lon=73.04").then(
      (res: IfetchWeek[]) => {
        setWeekWeather(res);
      }
    );
  };
  useEffect(() => {
    weekTempData();
    const refreshTimer = setInterval(weekTempData, 600000);
    return () => clearInterval(refreshTimer);
  }, []);

  return (
    <>
      <h3 className={s.tittle}>Прогноз на неделю</h3>
      <div className={s.weekBlock}>
        <div className={s.minMaxDay}>
          <span>T-min</span>
          <ul>
            {weekWeather == undefined
              ? "loading..."
              : weekWeather.map((day, index) => (
                  <li key={index}>{day.temp.min}</li>
                ))}
          </ul>
        </div>
        <div className={s.minMaxDay}>
          <span>T-day</span>
          <ul>
            {weekWeather == undefined
              ? "loading..."
              : weekWeather.map((day, index) => (
                  <li key={index}>{day.temp.day}</li>
                ))}
          </ul>
        </div>
        <div className={s.minMaxDay}>
          <span>T-max</span>
          <ul>
            {weekWeather == undefined
              ? "loading..."
              : weekWeather.map((day, index) => (
                  <li key={index}>{day.temp.max}</li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WeekWeather;

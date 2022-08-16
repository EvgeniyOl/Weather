import axios from "axios";

const API_KEY = process.env.REACT_APP_KEY;

export const fetchWeatherData = async (city: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?${city}&lang=Ru&units=metric&appid=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    alert(`error ---> ${err}`);
  }
};

export const fetchWeatherWeek = async (city: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?${city}&lang=Ru&exclude=current&units=metric&appid=${API_KEY}`
    );
    return res.data.daily;
  } catch (err) {
    console.log(`error! --> ${err}`);
  }
};

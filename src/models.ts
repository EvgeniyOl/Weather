export interface IfetchWeek {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number; night: number; eve: number; morn: number };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: { day: number; min: number; max: number; night: number; eve: number };
  uvi: number;
  weather: [];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
export interface IfetchOneDay {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number; dt: number; id: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: { speed: number; deg: number; gust: number };
}

export interface Ilocation {
  coords: GeolocationCoordinates;
  accuracy: number;
  altitude: null;
  altitudeAccuracy: null;
  heading: null;
  latitude: number;
  longitude: number;
  speed: null;
  timestamp: number;
}

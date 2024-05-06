import React, { useState } from "react";
import { icon, name, panding, promish } from "../Code";
import ListData from "../list/ListData";

import styles from "./weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faMagnifyingGlass,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [day, setDay] = useState(null);
  function click() {
    promish(city).then((data) => {
      setWeather(data);
      panding(data.id).then((data) => {
        const aadi = name(data.list);
        setDay(aadi);
      });
    });
  }
  function change(e) {
    setCity(e.target.value);
  }
  console.log(day);
  console.log(weather);
  return (
    <div>
      <div
        style={{
          height: weather ? "900px" : "600px",
        }}
        className={styles.mainContainer}
      >
        <h2>{weather?.name}</h2>
        <div className={styles.input}>
          <input onChange={change} value={city} type="text" />
          <button onClick={click}>
            <FontAwesomeIcon
              className={styles.search}
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
        <div className={styles.img}>
          <img src={icon(weather)} alt="" />
        </div>
        <p className={styles.c}>{(weather?.main.temp - 273.15).toFixed(0)}°</p>
        <div className={styles.km}>
          <FontAwesomeIcon className={styles.icon} icon={faCloudMoon} />

          <p> {weather?.main.humidity}%</p>
          <p>Humidity</p>
          <br />
        </div>

        <div className={styles.para}>
          <FontAwesomeIcon className={styles.icon} icon={faWind} />
          <p>{weather?.wind.speed}</p>
          <p>km/h speed</p>
        </div>
        <ListData day={day} />
      </div>
    </div>
  );
}

export default Weather;

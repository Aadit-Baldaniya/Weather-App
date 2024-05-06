import React from "react";
import styles from "./list.module.css";
function List(props) {
  const { weather } = props;
  return (
    <div className={styles.container}>
      <p className={styles.temp}>{(weather.main.temp - 273.15).toFixed(0)}°</p>
      <img className={styles.imgg} src="/images/01d.png" alt="" />
      <p className={styles.clier}>{weather.weather[0].main}</p>
    </div>
  );
}

export default List;

import React from "react";
import List from "./List";
import styles from "./list.module.css";
function ListData(props) {
  const { day } = props;
  return (
    <div className={styles.listContainer}>
      {day?.slice(0, 4).map((value, index) => {
        return <List weather={value} key={index} />;
      })}
    </div>
  );
}

export default ListData;

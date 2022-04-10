import React, { useEffect, useState } from "react";
//import { db } from "./db.js";
import styles from "./slider.module.css";

const Slider = ({db}) => {
  const [current, setCurrent] = useState(0);
  const leftMove = () => {
    setCurrent(current === 0 ? db.length -1 : current -1 );
  }
  const rightMove = () => {
    setCurrent(current === db.length -1 ? 0 : current +1);
  }
  useEffect(() => {
    const id = setInterval(() => {
        setCurrent((prev) => {
            if(prev === db.length -1 ){
                return 0;
            }
           return prev +1;
        })
    }, 2500);

    return () => {
        clearInterval(id)
    }
  },[db.length])
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.moving_left} onClick={leftMove}>L</div>
      <div className={styles.moving_right} onClick={rightMove}>R</div>
      {db.map((val, i) => (
        <div  key= {val.name} className={i === current? styles.slide_active: styles.slide}>
          {i === current && (
            <div className={styles.sliderCard}>
              <img src={val.src} alt="img" />
              <div>{val.name}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;

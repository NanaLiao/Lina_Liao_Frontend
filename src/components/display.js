import React from 'react';

import styles from './display.module.css';

const Display = props => {
  const { isDisplay,index, buttonHandler} = props;
    return (
      <div className={styles.container}>
        <h1>{index}.{isDisplay.q}</h1>
        <p>{isDisplay.a}</p>
      <img src={"/images/" +isDisplay.img} alt="img"/>
        <button className={styles.btn} onClick={buttonHandler}>Back</button>
      </div>
    )
  } 

export default Display;
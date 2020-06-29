import React from 'react';

import styles from './questions.module.css';
import {QA} from '../questions/qa';

const Questions = props => {

 const list =  QA.map((ele,i)=>{
    return <li key={ele.a} onClick={()=>props.handleDisplay(ele,i)}>{ele.q}</li>
  });

  return(
    <div className={styles.container} >
      <h1 className={styles.questions}>Questions:</h1>
      <ol>
        {list}
      </ol>
    </div>
  )
}

export default Questions;
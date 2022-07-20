import React, { useState } from 'react'
import classes from './ResultItem.module.css';

export default function ResultItem (props ){
    return (
     <dev>
       <ul className={classes.ul}>
          <li className={classes.title}>Algorithm : {props.algo}</li>
          <li className={classes.li}>Accuracy : {props.accuracy}</li>
          <li className={classes.li}>Precition : {props.precition} </li>
          <li className={classes.li}>Recall : {props.recall} </li>
          <li className={classes.li}>F-score : {props.fscore}  </li>
          </ul>
    </dev> 
   );
}
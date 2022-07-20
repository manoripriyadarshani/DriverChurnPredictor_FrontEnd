import React, { useState } from 'react'
import classes from './ResultItem.module.css';

export default function ResultItem (props ){
   console.log(props.accuracy)
    return (
     <dev  className={classes.frame} >
       <ul className={classes.ul}>
       <h3>Prediction Result </h3>
          <li className={classes.li}> Driver Churn ?  : {props.isChurn}</li>
      </ul>
      <ul className={classes.ul}>
         <h3>Model Details </h3>
         <li className={classes.li}>Algorithm Used : {props.algo}</li>
          <li className={classes.li}>Accuracy of the Prediction : {props.accuracy}</li>
          <li className={classes.li}>Precition of the Prediction : {props.precition} </li>
          <li className={classes.li}>Recall of the Prediction: {props.recall} </li>
          <li className={classes.li}>F-score of the Prediction : {props.fscore}  </li>
      </ul>
    </dev> 
    
   );
}
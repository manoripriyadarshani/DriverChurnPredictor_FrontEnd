import React, { useState } from 'react'
import classes from './ResultItem.module.css';
import { PieChart } from 'react-minimal-pie-chart';

export default function ResultItem (props ){
  console.log(props.numOfChurns)
  console.log(props.numOfUnChurns)
  return (
    
    <dev className={classes.frame}>
    <table className={classes.table}>
    <h3>Prediction Results </h3>
      <tr className={classes.trhead}>
        <th>Driver ID</th>
        <th>Driver Churn ?</th>
      </tr>
      {props.data.bulkPredictResults.map(d => (
        <tr className={classes.tr}>
          <td>{d.id}</td>
          <td>{d.isChurn ? "Yes" : "No"}</td>
        </tr>
        ))}
    </table>
    <ul className={classes.ul}>
         <h3>Model Details </h3>
         <li className={classes.li}>Algorithm Used : {props.data.predictedModelDetails.algorithm}</li>
          <li className={classes.li}>Accuracy of the Prediction : {props.data.predictedModelDetails.modelAccuracy}</li>
          <li className={classes.li}>Precition of the Prediction : {props.data.predictedModelDetails.modelPrecision} </li>
          <li className={classes.li}>Recall of the Prediction: {props.data.predictedModelDetails.modelRecall} </li>
          <li className={classes.li}>F-score of the Prediction : {props.data.predictedModelDetails.modelF1Score}  </li>
      </ul>

      <dev className={classes.ul}>
         <h3>Result Statistics </h3>
         <PieChart
         label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%  ${dataEntry.title}`}
            data={[
              { title: 'Churned', value: props.numOfChurns, color: '#E38627' },
              { title: 'UnChurned', value: props.numOfUnChurns, color: '#b1112e' },
            ]}
            radius={45}
            labelStyle={{
              ...{
                fontSize: '6px',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
              },
            }}
         />;
      </dev>
    </dev>
    );
}
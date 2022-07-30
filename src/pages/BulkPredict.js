import Layout from '../component/layout/Layout';
import classes from './BulkPredict.module.css';
import React, { useState } from 'react'
import { useRef } from 'react';
import ResultItem from '../component/bulkpredict/ResultItem';

export default function BulkPredictPage(){

    const algorithmSelectRef= useRef();
    const isBestAlgoRef= useRef();

    const [selectedAlgorithms, setSelectedAlgorithms] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [loadedResults, setLoadedResults] = useState();
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const [numOfChurn, setNumOfChurn] = useState();


    function submitHandler(event) {
        event.preventDefault();
        const predictBody = {  
            IsBestAlgo:isBestAlgoRef.current.checked,
            algo:algorithmSelectRef.current.value,
        };
        console.log(predictBody);
  
        fetch(
          'http://localhost:5001/drivers/predict',
          {
            method: 'POST',
            body: JSON.stringify(  predictBody),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
    
          }
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          setLoadedResults(data);
          setIsResultsVisible(true)

          var  churned =0
          var bulkPredictResults=data.bulkPredictResults
          for (var i = 0; i < bulkPredictResults.length; i++) {
              if (bulkPredictResults[i].isChurn){
                churned=churned+1
              } 
          }
          setNumOfChurn(churned)
        }
      );
      }




    return (

        <Layout>
              <form className={classes.form} onSubmit={submitHandler} >
                    <div className={classes.controlIns}>
                        <label htmlFor='empty'>Enter Driver Prediction Details ...</label>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='csv'>  Upload Driver Details (CSV) : </label>

                    </div>
                    <div className={classes.control}>
                    
                        <input type='file' requied id='csv'  />
                    </div>
                    <div className={classes.controlIns}>
                        <label >Enter prediction Instructions ...</label>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='isBestAlgo'>Use Best Algorithm :</label>
                        <input type='checkbox'  id='isBestAlgo' ref={isBestAlgoRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='algo'>Select Algorithm :</label>
                        <select  id='algo' ref={algorithmSelectRef}>
                            <option>Select..</option>
                            <option value="KNN">KNN</option>
                            <option value="SVM">SVM</option>
                            <option value="LR">LR</option>
                            <option value="NB">NB</option>
                            <option value="DT">DT</option>
                            <option value="RF">RF</option>
                            <option value="FFNN">FFNN</option>
                            <option value="ST_DT_SVM_RF_LR">ST_DT_SVM_RF_LR</option>
                            <option value="BG_DT">BG_DT</option>
                            <option value="XGB_DT">XGB_DT</option>
                            <option value="ADAB_DT">ADAB_DT</option>
                        </select>
                    </div>
                    <div className={classes.actions}>
                        <button>Predict Churn</button>
                    </div>
                </form>
       
            <dev className={classes.result}>
              {isResultsVisible ? <ResultItem data={loadedResults} numOfChurns={numOfChurn} numOfUnChurns={loadedResults.bulkPredictResults.length-numOfChurn} ></ResultItem> : null}
            </dev>
        </Layout>

    );
    }
    

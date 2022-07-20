
import Layout from '../component/layout/Layout';

import React, { useState } from 'react'
 import classes from './ModelTrain.module.css';
import CustomSelect from '../component/modeltrain/CustomSelect'
import ResultItem from '../component/modeltrain/ResultItem';
// import ModelTrainFormResult from "./ModelTrainFormResult";

const algorithms = [
    {
      id: 0,
      name:'NB',
      label: 'Naive Bayes',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 1,
      name:'KNN',
      label: 'K-Nearest Neighbor',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 2,
      name:'LR',
      label: 'Logistic regression',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 3,
      name:'SVM',
      label: 'Support Vector Machine',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 4,
      name:'DT',
      label: 'Decision Tree',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 5,
      name:'RF',
      label: 'Random Forest',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 6,
      name:'NB',
      label: 'Stacking (NB,KNN +LR)',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 7,
      name:'NB',
      label: 'Stacking (DT,SVM,RF +LR)',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 8,
      name:'NB',
      label: 'Bagging (DT)',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 9,
      name:'NB',
      label: 'XG Boosting (DT)',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 10,
      name:'NB',
      label: 'Ada Boosting (DT)',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 11,
      name:'NB',
      label: 'Ada Boosting (RF)',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
      id: 12,
      name:'NB',
      label: 'Feed Forward Neural Network',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
   
  ]

export default function ModelTrainPage() {

    const [selectedAlgorithms, setSelectedAlgorithms] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [loadedResults, setLoadedResults] = useState([]);
    const [isResultsVisible, setIsResultsVisible] = useState(false);

    function submitHandler(event) {
      event.preventDefault();
      var i ;
      var algoList=[]
      for(i=0; i < selectedAlgorithms.length; i++){
        algoList[i]= algorithms[i].name
      }
      const predictBody = { algo: algoList};

      fetch(
        'http://localhost:5001/model/train',
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
        setLoadedResults(data.modelTrainResults);
        setIsResultsVisible(true)
        }
       );
    }
  
    function renderResults() {
      const outResults = [];
      for (var i = 0; i < loadedResults.length; i++) {
        outResults.push(<ResultItem isChurn="Yes" algo={loadedResults[i].algorithm} accuracy={loadedResults[i].modelAccuracy} precition={loadedResults[i].modelPrecision} recall={loadedResults[i].modelRecall} fscore={loadedResults[i].modelF1Score}>  </ResultItem>);
      }
      return outResults
    }

    return (
        <Layout>
        <form className={classes.form} onSubmit={submitHandler} >
          <h2> Start Training Model</h2>
            <CustomSelect title="" value={selectedAlgorithms} onChange={(v) => setSelectedAlgorithms(v)} options={algorithms}/>
            <div className={classes.actions}>
              <button>Build Model</button>
            </div>
          </form>
          <dev className={classes.result}>
          {isResultsVisible ? renderResults() : null}
          </dev>
        </Layout>
    );
}

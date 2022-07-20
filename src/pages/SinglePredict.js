import Layout from '../component/layout/Layout';
import classes from './SinglePredict.module.css';
import React, { useState } from 'react'
import { useRef } from 'react';
import ResultItem from '../component/singlepredict/ResultItem';

export default function SinglePredictPage() {
    const ageInputRef = useRef();
    const serviceTimeInputRef = useRef();
    const ratesInputRef = useRef();
    const driverInqueryInputRef = useRef();
    const passengerInqueryInputRef = useRef();
    const severeInqueryInputRef = useRef();
    const complainInputRef = useRef();
    const avgEarningInputRef = useRef();
    const avgDistanceInputRef = useRef();
    const avgPasDiscountInputRef = useRef();
    const avgWaitingRidesInputRef = useRef();
    const lastMonthRejectedTripsInputRef = useRef();
    const genderSelectRef= useRef();
    const latestLoyaltySelectRef= useRef();
    const calculatedLoyaltySelectRef= useRef();
    const vehicleTypeSelectRef= useRef();
    const algorithmSelectRef= useRef();
    const isTempBlockedRef= useRef();
    const isUnAssignedRef= useRef();
    const isBestAlgoRef= useRef();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedResults, setLoadedResults] = useState();
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    function submitHandler(event) {
        event.preventDefault();
        const predictBody = {
             age: Number(ageInputRef.current.value),
             serviceTime: Number(serviceTimeInputRef.current.value),
             driverRating:Number( ratesInputRef.current.value),
             driverRaisedInquiryCount: Number(driverInqueryInputRef.current.value),
             passengerRaisedInquiryCount: Number(passengerInqueryInputRef.current.value),
             severeInquiryCount: Number(severeInqueryInputRef.current.value),
             complainCount: Number(complainInputRef.current.value),
             monthlyAverageEarning: Number(avgEarningInputRef.current.value),
             monthlyAverageRideDistance: Number(avgDistanceInputRef.current.value),
             monthlyAveragePasDiscount: Number(avgPasDiscountInputRef.current.value),
             monthlyAverageWaitingRides: Number(avgWaitingRidesInputRef.current.value),
             lastMonthRejectedTripCount: Number(lastMonthRejectedTripsInputRef.current.value),
             gender:genderSelectRef.current.value,
             latestLoyaltyLabel:latestLoyaltySelectRef.current.value,
             calculatedLoyaltyLabel:calculatedLoyaltySelectRef.current.value,
             vehicleType:Number(vehicleTypeSelectRef.current.value),
             algo:algorithmSelectRef.current.value,
             IsTemporaryBlocked:isTempBlockedRef.current.checked,
             IsUnAssigned:isUnAssignedRef.current.checked,
             IsBestAlgo:isBestAlgoRef.current.checked
            };

        console.log(predictBody);
  
        fetch(
          'http://localhost:5001/driver/predict',
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
          }
         );
      }

    //   function renderResults() {
    //     return (<ResultItem algo={loadedResults.algorithm} accuracy={loadedResults.modelAccuracy} precition={loadedResults.modelPrecision} recall={loadedResults.modelRecall} fscore={loadedResults.modelF1Score}>  </ResultItem>);
    //   }
  

    return (

        <Layout>
            
            <form className={classes.form}  onSubmit={submitHandler}>
                    <div className={classes.controlIns}>
                        <label htmlFor='empty'>Enter Driver Prediction Details ...</label>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='age' pattern="[0-9]*">  Age (Years) : </label>
                        <input type='text' required id='age'  pattern="[0-9]*" ref={ageInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='gender'>Gender :</label>
                        <select  id='gender' ref={genderSelectRef}>
                        <option>Select..</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </div>

                    <div className={classes.control}>
                        <label htmlFor='latestLoyalty'>Latest Loyalty Level :</label>
                        <select  id='latestLoyalty' ref={latestLoyaltySelectRef} >
                        <option>Select..</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="regular">Regular</option>
                        <option value="platinum">Platimun</option>
                        <option value="dedicated">Dedicated</option>
                        </select>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='calculatedLoyalty'>Calculated Loyalty Level :</label>
                        <select  id='calculatedLoyalty' ref={calculatedLoyaltySelectRef}>
                        <option>Select..</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="regular">Regular</option>
                        <option value="platinum">Platimun</option>
                        </select>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='vehicleType'>Vehicle Type :</label>
                        <select  id='vehicleType' ref={vehicleTypeSelectRef}>
                        <option>Select..</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="10">10</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="24">24</option>
                        <option value="29">29</option>
                        <option value="34">34</option>
                        <option value="43">43</option>
                        <option value="49">49</option>
                        <option value="71">71</option>
                        </select>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='serviceTime'>Service Time (Days) :</label>
                        <input type='text' required id='serviceTime' pattern="[0-9]*" ref={serviceTimeInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='rating'>Driver Rating (0-6) :</label>
                        <input type='text' required id='rating' pattern="[0-9]*" ref={ratesInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='driverRaisedTicketC'>Driver Raised Inquery Count :</label>
                        <input type='text' required id='driverRaisedTicketC' pattern="[0-9]*" ref={driverInqueryInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='passengerRaisedTicketC'>Passenger Raised Inquery Count :</label>
                        <input type='text' required id='passengerRaisedTicketC' pattern="[0-9]*"  ref={passengerInqueryInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='severeTicketC'>Severe Inquery Count :</label>
                        <input type='text' required id='severeTicketC' pattern="[0-9]*" ref={severeInqueryInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='complainC'>Complain Count :</label>
                        <input type='text' required id='complainC' pattern="[0-9]*" ref={complainInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='monthlyEarning'>Monthly Average Earning (Rs) :</label>
                        <input type='text' required id='monthlyEarning' pattern="[0-9]*" ref={avgEarningInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='monthlyRideDistance'>Monthly Average Ride Distance (M) :</label>
                        <input type='text' required id='monthlyRideDistance' pattern="[0-9]*" ref={avgDistanceInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='monthlyPassengerDiscounts'>Monthly Average Passenger Discounts (Rs) :</label>
                        <input type='text' required id='monthlyPassengerDiscounts' pattern="[0-9]*" ref={avgPasDiscountInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='monthlyWaitingRides'>Monthly Average Waiting Rides :</label>
                        <input type='text' required id='monthlyWaitingRides' pattern="[0-9]*" ref={avgWaitingRidesInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='monthlyPassengerDiscounts'>Last Month Rejected Trip Count :</label>
                        <input type='text' required id='monthlyPassengerDiscounts' pattern="[0-9]*" ref={lastMonthRejectedTripsInputRef} />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor='isDriverTempBlocked'>Is Temporary Blocked :</label>
                        <input type='checkbox'  id='isDriverTempBlocked' ref={isTempBlockedRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='isDriverUnAssigned'>Is Driver Unassigned :</label>
                        <input type='checkbox'  id='isDriverUnAssigned' ref={isUnAssignedRef}/>
                    </div>
                    <div className={classes.controlIns}>
                        <label >Enter prediction Instructions ...</label>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='isBestAlgo'>Use Best Algorithm :</label>
                        <input type='checkbox'  id='isBestAlgo' ref={isBestAlgoRef}/>
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
                            <option value="ST_NB_KNN_WITH_LR">ST_NB_KNN_WITH_LR</option>
                            <option value="ST_DT_SVM_RF_LR">ST_DT_SVM_RF_LR</option>
                            <option value="BG_DT">BG_DT</option>
                            <option value="XGB_DT">XGB_DT</option>
                            <option value="ADAB_DT">ADAB_DT</option>
                            <option value="ADAB_RF">ADAB_RF</option>
                        </select>
                    </div>
                    <div className={classes.actions}>
                        <button>Predict Churn</button>
                    </div>

            </form>
            <dev className={classes.result}>
                {isResultsVisible ? <ResultItem isChurn ={loadedResults.isChurn==true ? "Yes":"No"} algo={loadedResults.algorithm} accuracy={loadedResults.modelAccuracy} precition={loadedResults.modelPrecision} recall={loadedResults.modelRecall} fscore={loadedResults.modelF1Score}>  </ResultItem>: null}
            </dev>
        </Layout>

    );
}

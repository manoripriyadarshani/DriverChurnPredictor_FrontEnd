import { Route,Routes } from 'react-router-dom'
import BulkPredictPage from './pages/BulkPredict';
import SinglePredictPage from './pages/SinglePredict';
import ModelTrainPage from './pages/ModelTrain';
import Layout from './component/layout/Layout';


function App() {
  return (
 
      <Routes>
        <Route path="/" element={<ModelTrainPage />} />
        <Route path="/single-predict" element={<SinglePredictPage />} />
        <Route path="/bulk-predict" element={<BulkPredictPage />} />
      </Routes>
  
  );
}

export default App;

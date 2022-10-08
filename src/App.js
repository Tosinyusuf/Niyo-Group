import React, {useEffect} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchCollections } from './Redux/actions/Collections';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch])
  return (
      <BrowserRouter> 
         <RouterConfig />
      </BrowserRouter> 
  );
}

export default App;

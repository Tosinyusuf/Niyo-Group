import React from 'react';
import loading from '../../Asset/images/loading.gif';


const Loading = () => {
  return <div className='loading'>
    <img className='loading' src={loading} alt="loading" />
  </div>;
};

export default Loading;

import React from 'react';
import errorIcon from '../../Asset/images/error-icon.png';

const Error = ({errorMsg}) => {
  return <div className='error'>
    <img src={errorIcon} alt="" />
     <h2 style={{color: '#FF0000', fontWeight:'bolder'}}>{errorMsg}</h2>
     </div>;
};

export default Error;

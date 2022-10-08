import React from 'react'
import AuthButton from '../../../Components/AuthButton'

export const Auth = () => {
  return (
    <div className="authBtn">
      <AuthButton text={'Login'} className={'login'} />
      <AuthButton
        text={'Explore arts'}
        className={'explore'}
      />
    </div>
  )
}

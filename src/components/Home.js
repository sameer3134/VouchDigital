import React from 'react'
import 'antd/dist/antd.css';
import LoginPage from './LoginPage';

const Buttonsi = () => {
  return (<div className='outset'>
    <div style={{ float: 'right' }} className="grid">
      <img className='img' src='a.png' alt='logo' />
    </div>
    <div style={{ float: 'left' }} className='flip'>
      <LoginPage />
    </div></div>
  )
}

export default Buttonsi
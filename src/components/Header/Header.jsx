import React from 'react';
import './Header.css';
import IconCustomer from '../../assets/icon-customer.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='app-name'>Button-shaker</div>
      <div className='customer-block'>
        <img src={IconCustomer} alt='' className='customer-icon'/>
        <div className='customer-data'>
          <span>iranda-dev</span>
          <span className='customer-name'>Vasya Ivanov</span>
        </div>
      </div>
    </div>
  )
};

export default Header;
import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './OrderConfirmation.css';
import Button from '../../components/UI/Button/Button';

const OrderConfirmation = () => {
  return(
    <div className={classes.OrderConfirmation}>
      <h2 className={classes.Header}>Enjoy Your Meal!</h2>
      <p style={{marginBottom: 0}}>Your order is on its way.</p>
      <NavLink to="/orders"><Button btnType="Success">View Orders</Button></NavLink>
    </div>
  )
}

export default OrderConfirmation;
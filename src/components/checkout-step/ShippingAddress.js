import React from 'react'
import styles from '../../styles/checkout.module.css'

export default function ShippingAddress() {
  return (
    <div>
      <h4>Shipping Address</h4>
      <form className={styles.formContainer}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="phone" placeholder="+62" />
        <input type="text" name="email" placeholder="examle@gmail.com" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="state" placeholder="State" />
        <input type="text" name="Zip" placeholder="Zip code" />
      </form>
      <h4>Payment</h4>
    </div>
  )
}

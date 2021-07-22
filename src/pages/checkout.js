import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingListContext } from '../utils/AppContext'
// import styles from '../styles/checkout.module.css'
import Steps from '../components/checkout-step/steps'
import ShippingAddress from '../components/checkout-step/ShippingAddress'
import Payment from '../components/checkout-step/Payment'

export default function Checkout() {
  const { cartItemLists } = useContext(ShoppingListContext)
  const [active, setActive] = useState(1)
  const [sum, setSum] = useState(0)

  useEffect(() => {
    const total = cartItemLists.reduce((acc, current) => acc + (current.price * current.qty), 0)
    setSum(total)
  }, [])

  return (
    <div>
      {cartItemLists.length > 0 && (
        <div>
          <div>
            {cartItemLists.map(({ id, title, qty }) => (
              <p key={id}>
                {qty}
                {' '}
                x
                {' '}
                {title}
              </p>
            ))}
            <p>
              Total
              {' '}
              $
              {sum.toFixed(2)}
            </p>
          </div>
          <Steps active={active} />
          {active === 1 && <ShippingAddress />}
          {active === 2 && <Payment />}
          <div>
            {active > 1 ? <button type="button" onClick={() => setActive((current) => current - 1)}>Back</button>
              : (<Link to="/shopping">Back to Cart</Link>)}
            {active < 3 && <button type="button" onClick={() => setActive((current) => current + 1)}>Next</button>}
          </div>
        </div>
      )}
      {cartItemLists.length === 0 && <p>please add some product</p>}
    </div>
  )
}

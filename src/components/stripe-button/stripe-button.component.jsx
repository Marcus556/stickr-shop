import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey = 'pk_test_51HOQLlC1qFC5XnAbr5fuzgk4qopQT5KTjLkmVDD2NIpUs4WTBAr67qDHwMXdpuknsBKjcwGUx5EaGdHdJ81VivTt00t1iNnxQs';
  const onToken = token => {
    console.log(token)
  }
  return (
<StripeCheckout
  name="StickR-Shop" // the pop-in header title
  description={`Your total is: $${price}`} // the pop-in header subtitle
  image="https://d3ccuprjuqkp1j.cloudfront.net/GeneralImages/SY300x225.png" // the pop-in header image (default none)
  label="Pay now!" // text inside the Stripe button
  currency="USD"
  email="Marcusnyman556@gmail.com"
  amount={priceForStripe}
  token={onToken}
  stripeKey={pubKey}
  panelLabel='Pay Now'
  // Note: Enabling either address option will give the user the ability to
  // fill out both. Addresses are sent as a second parameter in the token callback.
  shippingAddress
  billingAddress
  // Note: enabling both zipCode checks and billing or shipping address will
  // cause zipCheck to be pulled from billing address (set to shipping if none provided).
  zipCode
  bitcoin // accept Bitcoins (default false)
  // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
  // you are using multiple stripe keys
  // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
  // useful if you're using React-Tap-Event-Plugin
  />
  )
}

export default StripeCheckoutButton

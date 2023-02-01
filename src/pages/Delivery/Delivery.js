import React, { Fragment } from "react"
import DeliverySection from './components/DeliverySection'
import PaymentSection from './components/PaymentSection'

import "./delivery.css"

export default function Delivery () {
    return (
      <Fragment>
        <DeliverySection />
        <PaymentSection />
      </Fragment>
    )
  }

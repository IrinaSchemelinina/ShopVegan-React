import React, { Fragment } from "react"
import Delivery from '../modules/Delivery'
import MainSlider from '../modules/MainSlider'
import Popular from '../modules/Popular'
import Stocks from '../modules/Stocks'

export default function Home () {
    return (
      <Fragment>
        <MainSlider />
        <Stocks />
        <Delivery />
        <Popular />
      </Fragment>
    )
  }

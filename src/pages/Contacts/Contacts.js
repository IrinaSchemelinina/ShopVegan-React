import React, { Fragment } from "react"
import ContactsSection from './components/ContactsSection'
import Questions from './components/Questions'

import "./contacts.css"

export default function Contacts () {
    return (
      <Fragment>
        <ContactsSection />
        <Questions />
      </Fragment>
    )
  }

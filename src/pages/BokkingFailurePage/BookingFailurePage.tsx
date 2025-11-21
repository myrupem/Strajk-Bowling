import "./BookingFailurePage.css"

import { useState } from "react"

import HamburgerButton from "../../components/HamburgerButton/HamburgerButton"
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu"

function BookingFailurePage() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bookingFailurePage__wrapper">
      <HamburgerButton open={open} toggle={() => setOpen(!open)} />
      <HamburgerMenu open={open} />
      <p className="bookingFailurePage__text">
        Something went wrong, please try again...
      </p>
    </section>
  )
}

export default BookingFailurePage

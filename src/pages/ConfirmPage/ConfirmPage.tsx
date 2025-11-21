import logo from "../../assets/logo.svg"
import "./ConfirmPage.css"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import formatDateAndTime from "../../utils/formatDateAndTime"

import Title from "../../components/Title/Title"
import ConfirmButton from "../../components/ConfirmButton/ConfirmButton"
import DisplayField from "../../components/DisplayField/DisplayField"
import TotalDisplayField from "../../components/DisplayField/TotalDisplayField"
import HamburgerButton from "../../components/HamburgerButton/HamburgerButton"
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu"

function ConfirmPage() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const state = location.state || null
  const success = state?.success
  const bookingDetails = state?.bookingDetails || null

  const bookingId = bookingDetails?.bookingId
    ? bookingDetails.bookingId.slice(0, 8).toUpperCase()
    : ""

  useEffect(() => {
    if (success === false) {
      navigate("booking-failure")
    }
  }, [success, navigate])

  if (!bookingDetails) {
    return (
      <section className="noConfirmation__wrapper">
        <HamburgerButton open={open} toggle={() => setOpen(!open)} />
        <HamburgerMenu open={open} />
        <img src={logo} alt="logo" className="noConfirmation__logo" />
        <p className="noConfirmation__text">
          There is no booking, go and secure your lanes on the booking page!!
        </p>

        <ConfirmButton text="GO TO BOOKING" onClick={() => navigate("/")} />
      </section>
    )
  }

  return (
    <section className="confirmPage__wrapper">
      <HamburgerButton open={open} toggle={() => setOpen(!open)} />
      <HamburgerMenu open={open} />

      <img src={logo} alt="logo" />
      <Title title="SEE YOU SOON"></Title>

      <div className="confirmPage__subtitle">
        <span>BOOKING DETAILS</span>
      </div>

      <div className="confirmPage__fields">
        <DisplayField
          labelText="WHEN"
          inputText={formatDateAndTime(bookingDetails.when)}
        />
        <DisplayField
          labelText="WHO"
          inputText={`${bookingDetails.people} pers`}
        />
        <DisplayField
          labelText="LANES"
          inputText={`${bookingDetails.lanes} lanes`}
        />
        <DisplayField labelText="BOOKING NUMBER" inputText={bookingId} />
      </div>

      <div className="confirmPage__bottom">
        <TotalDisplayField
          labelText="total"
          total={`${bookingDetails.price} sek`}
        />
        <ConfirmButton
          text="SWEET, LETS GO!"
          type="button"
          onClick={() => navigate("/")}
        />
      </div>
    </section>
  )
}

export default ConfirmPage

import logo from "../../assets/logo.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useApiStore } from "../../stores/apiStore.ts"

import combineDateAndTime from "../../utils/combineDateAndTime.tsx"

import "./BookingPage.css"
import "react-datepicker/dist/react-datepicker.css"

import Title from "../../components/Title/Title.tsx"
import DatePickerComponent from "../../components/DatePicker/DatePicker.tsx"
import ShoeInputfield from "../../components/ShoeInputfield/ShoeInputfield.tsx"
import ConfirmButton from "../../components/ConfirmButton/ConfirmButton.tsx"
import HamburgerButton from "../../components/HamburgerButton/HamburgerButton.tsx"
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu.tsx"

function BookingPage() {
  const createBooking = useApiStore((s) => s.createBooking)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const [numOfPeople, setNumOfPeople] = useState<number | "">("")
  const [shoeSizes, setshoeSizes] = useState<string[]>([])
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState("")
  const [lanes, setLanes] = useState("")

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : Number(e.target.value)
    setNumOfPeople(value)

    if (typeof value === "number") {
      setshoeSizes(Array(value).fill(""))

      setLanes(Math.ceil(value / 4).toString())
    } else {
      setshoeSizes([])
      setLanes("")
    }
  }

  const handleShoeSizeChange = (index: number, size: string) => {
    const newSizes = [...shoeSizes]
    newSizes[index] = size
    setshoeSizes(newSizes)
  }

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time) {
      console.log("missing date and time")
      return
    }
    const when = combineDateAndTime(date, time)

    const bookingData = {
      when,
      lanes: Number(lanes),
      people: Number(numOfPeople),
      shoes: shoeSizes.map(Number),
    }

    try {
      const result = await createBooking(bookingData)
      navigate("confirmation", { state: result })
      console.log(result)
    } catch (error) {
      console.log(error, "Booking Failure")
      navigate("booking-failure")
    }

    console.log("Bokningsdata att skicka:", bookingData)
  }

  return (
    <section className="bookingPage__wrapper">
      <HamburgerButton open={open} toggle={() => setOpen(!open)} />
      <HamburgerMenu open={open} />

      <img src={logo} alt="logo" />
      <Title title="BOOKING"></Title>

      <div className="bookingPage__subtitle">
        <span>WHEN, WHAT & WHO</span>
      </div>

      <form className="bookingPage__form" onSubmit={handleBooking}>
        <section className="bookingPage__date-time-wrapper">
          <section className="bookingPage__date-wrapper">
            <div className="bookingPage__input-group">
              <label className="bookingPage__label" htmlFor="date">
                DATE
              </label>
              <DatePickerComponent
                className="bookingPage__input"
                onChange={setDate}
              />
            </div>
          </section>
          <section className="bookingPage__time-wrapper">
            <div className="bookingPage__input-group">
              <label className="bookingPage__label" htmlFor="time">
                TIME
              </label>
              <input
                className="bookingPage__input"
                type="time"
                id="time"
                name="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </section>
        </section>

        <div className="bookingPage__input-group">
          <label className="bookingPage__label" htmlFor="people">
            NUMBER OF AWESOME BOWLERS
          </label>
          <input
            className="bookingPage__input"
            type="number"
            id="people"
            name="people"
            min="1"
            max="20"
            value={numOfPeople}
            onChange={handlePeopleChange}
          />
        </div>

        <div className="bookingPage__input-group">
          <label className="bookingPage__label" htmlFor="lanes">
            LANES
          </label>
          <input
            className="bookingPage__input"
            name="lanes"
            id="lanes"
            value={lanes}
            disabled
          ></input>
        </div>

        <div className="bookingPage__subtitle">
          <span>SHOES</span>
        </div>

        {shoeSizes.map((size, index) => (
          <ShoeInputfield
            key={index}
            label={`Person ${index + 1}`}
            id={`shoe-${index}`}
            value={size}
            onChange={(e) => handleShoeSizeChange(index, e.target.value)}
          />
        ))}

        <div className="confirmButtonWrapper">
          <ConfirmButton text="STRIIIKE!" type="submit" />
        </div>
      </form>
    </section>
  )
}

export default BookingPage

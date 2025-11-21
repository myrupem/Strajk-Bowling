import { useState } from "react"
import DatePicker from "react-datepicker"
import "./DatePicker.css"

interface DatePickerProps {
  value?: Date | null
  onChange?: (date: Date | null) => void
  placeholder?: string
  className?: string
  id?: string
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  onChange,
  placeholder = "Select a date",
  className,
  id,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleChange = (date: Date | null) => {
    setSelectedDate(date)
    if (onChange) {
      onChange(date)
    }
  }

  return (
    <DatePicker
      id={id}
      selected={selectedDate}
      onChange={handleChange}
      placeholderText={placeholder}
      dateFormat="d MMM"
      className={className}
    />
  )
}
export default DatePickerComponent

function formatDateAndTime(when: string) {
  const date = new Date(when)

  const day = date.getDate()
  const month = date.toLocaleString("en-US", { month: "short" })
  const time = date.toTimeString().slice(0, 5)

  return `${time}, ${day} ${month}`
}

export default formatDateAndTime

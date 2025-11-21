function combineDateAndTime(date: Date, time: string): string {
  const [hours, minutes] = time.split(":")

  const combined = new Date(date)
  combined.setHours(Number(hours), Number(minutes), 0, 0)

  return combined.toISOString().slice(0, 16)
}

export default combineDateAndTime

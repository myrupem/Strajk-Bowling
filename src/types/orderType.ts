export type OrderRequestType = {
  when: string
  lanes: number
  people: number
  shoes: number[]
}

export type OrderResponseType = {
  when: string
  lanes: number
  people: number
  sheos: number[]
  price: number // räknas ut på serversidan
  id: string // genereras på serversidan
  active: boolean // anges på serversidan.
}

export type OrderResponseFailureType = {
  success: boolean
  errorCode: string
}

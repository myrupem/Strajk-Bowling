import { create } from "zustand"
import axios, { type AxiosInstance } from "axios"

const url = import.meta.env.VITE_API_URL
const keyUrl = import.meta.env.VITE_API_KEY_URL

const fetchKey = async (): Promise<string> => {
  const response = await fetch(keyUrl, { method: "GET" })

  if (!response.ok) throw new Error("Failed to fetch API key")

  const data = await response.json()
  return data.key
}

interface ApiState {
  api: AxiosInstance | null
  key: string | null
  isReady: boolean
  error: string | null
  initApi: () => Promise<void>
  createBooking: (bookingData: any) => Promise<any>
}

export const useApiStore = create<ApiState>((set, get) => ({
  api: null,
  key: null,
  isReady: false,
  error: null,

  initApi: async () => {
    try {
      const key = await fetchKey()
      console.log("Fetched API key:", key)

      const instance = axios.create({
        baseURL: url,
        timeout: 10000,
        headers: { "x-api-key": key },
      })

      set({ api: instance, key, isReady: true, error: null })

      console.log("API initialized successfully")
    } catch (error) {
      console.log("Error fetching API key:", error)
      set({ error: "Failed to fetch api key", isReady: false })
    }
  },

  createBooking: async (bookingData: any) => {
    const api = get().api

    if (!api) throw new Error("API not initialized")

    try {
      const response = await api.post("/booking", bookingData)
      return response.data
    } catch (error) {
      console.log(error, "Booking failed")
      throw error
    }
  },
}))

import { useEffect } from "react"
import { useApiStore } from "./stores/apiStore"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage/LoadingPage"
import BookingPage from "./pages/BookingPage/BookingPage"
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage"
import BookingFailurePage from "./pages/BokkingFailurePage/BookingFailurePage"

const router = createBrowserRouter([
  { path: "/", element: <BookingPage /> },
  { path: "/confirmation", element: <ConfirmPage /> },
  { path: "/booking-failure", element: <BookingFailurePage /> },
])

function App() {
  const { initApi, isReady } = useApiStore()

  useEffect(() => {
    initApi()
  }, [initApi])

  if (!isReady) {
    return <LoadingPage />
  }

  return <RouterProvider router={router} />
}

export default App

import NavbarItem from "./components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"


import { Route, Routes } from "react-router"
import CardCountry from "./pages/CardofCountry"
import Home from "./components/Home"

function App() {
  const [hotels, setHotel] = useState([])
  const gethotels = async () => {
    try {
      const response = await axios.get("https://sandbox.impala.travel/v1/hotels")
      setHotel(response.data.data)
    } catch (error) {
      console.log(error?.response?.data.data)
    }
  }

  useEffect(() => {
    gethotels()
  }, [])

  const Edit = async () => {}

  return (
    <>
      <NavbarItem />
      <Home/>
      <Routes>
        <Route path="/Destinations" element={<CardCountry />} />
      </Routes>
    </>
  )
}
export default App

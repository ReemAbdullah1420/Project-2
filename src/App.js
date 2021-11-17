import NavbarItem from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Cardhotel from "./components/Cardhotel";

function App() {

const [hotels,setHotel]=useState([])
const gethotels=async()=>{
    try {
    const response = await axios.get("https://sandbox.impala.travel/v1/hotels")
    setHotel(response.data.data)
} catch (error) {
    console.log(error?.response?.data.data)
  }
}
  
   useEffect(()=>{
    gethotels()
},[])

    return ( 
<>
        <NavbarItem/>
        <Cardhotel/>
        </>
     )
}
export default App
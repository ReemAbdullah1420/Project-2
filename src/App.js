import NavbarItem from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Cardhotel from "./components/Cardhotel";

function App() {

const [hotels,setHotels]=useState([])
const gethotels=async()=>{
    const response = await axios.get("https://sandbox.impala.travel/v1/hotels")
    hotels=response.data.data
    setHotels(hotels)
useEffect(()=>{
    gethotels()
},[])
}
    return ( 
<>
        <NavbarItem/>
        <Cardhotel/>
        </>
     )
}
export default App
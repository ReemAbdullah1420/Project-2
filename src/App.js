import NavbarItem from "./components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import CardCountry from "./pages/CardofCountry"
import Home from "./components/Home"
import ItemsContext from "./utlis/ItemsContext"
import Offers from "./components/Offers"
import Foter from "./components/foter"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Hotels from "./pages/Hotels"
import Profile from "./pages/Profile"

function App() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [items, setitem] = useState([])
  const getprofile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenitem,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getitem = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/trip-153/items")
      setitem(response.data)
      getprofile()
      console.log(items)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getitem()
    if (localStorage.tokenitem) {
      getprofile()
    }
  }, [])

  const signup = async e => {
    try {
      e.preventDefault()
      const from = e.target
      const userbody = {
        firstName: from.elements.firstName.value,
        lastName: from.elements.lastName.value,
        email: from.elements.email.value,
        password: from.elements.password.value,
        photo: from.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userbody)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  const login = async e => {
    try {
      e.preventDefault()
      const from = e.target
      const userbody = {
        email: from.elements.email.value,
        password: from.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userbody)
      const tokenitem = response.data
      localStorage.tokenitem = tokenitem
      getprofile()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenitem")
  }
  const addbooking = async (e, hotel) => {
    e.preventDefault()
    try {
      const form = e.target
      const body = {
        start: `${form.elements.startday.value}-${form.elements.startmonth.value}-${form.elements.startyear.value}`,
        end: `${form.elements.endday.value}-${form.elements.endmonth.value}-${form.elements.endyear.value}`,
        title: hotel.name,
        description: hotel.ratePlan.price.current,
        image: hotel.optimizedThumbUrls.srpDesktop,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/trip-153/items", body, {
        headers: {
          Authorization: localStorage.tokenitem,
        },
      })
      navigate("/profile")
      getitem()
      getprofile()
    } catch (error) {
      console.log(error)
    }
  }
  const deleteitme = async Delid => {
    const id = Delid
    console.log(id)
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/trip-153/items/${id}`, {
        headers: {
          Authorization: localStorage.tokenitem,
        },
      })
      getitem()
      getprofile()
    } catch (error) {
      console.log(error)
    }
  }
  const confirm = async (e, bookId) => {
    e.preventDefault()
    console.log(bookId)
    try {
      const form = e.target
      const boody = {
        start: `${form.elements.startday.value}-${form.elements.startmonth.value}-${form.elements.startyear.value}`,
        end: `${form.elements.endday.value}-${form.elements.endmonth.value}-${form.elements.endyear.value}`,
      }
      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/trip-153/items/${bookId}`, boody, {
        headers: {
          Authorization: localStorage.tokenitem,
        },
      })
      getitem()
    } catch (error) {
      console.log(error)
    }
  }

  const store = {
    signup: signup,
    login: login,
    profile: profile,
    logout: logout,
    addbooking: addbooking,
    items: items,
    getitem: getitem,
    addbooking: addbooking,
    deleteitme: deleteitme,
    confirm: confirm,
  }
  return (
    <>
      <ItemsContext.Provider value={store}>
        <NavbarItem />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Offers />
                <Foter />
              </>
            }
          />
          <Route
            path="/Destinations"
            element={
              <>
                <CardCountry />
                <Foter />
              </>
            }
          />
          <Route
            path="/hotels/:destinationId"
            element={
              <>
                <Hotels />
                <Foter />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          />
        </Routes>
      </ItemsContext.Provider>
    </>
  )
}
export default App

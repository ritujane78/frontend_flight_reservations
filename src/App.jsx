import { Route, Routes } from 'react-router-dom'
import PassengerDetails from './components/PassengerDetails'
import DisplayFlights from './components/DisplayFlights'
import FindFlights from './components/FindFlights'
import ConfirmReservation from './components/ConfirmReservation'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<FindFlights />} />
        <Route path="/displayFlights/:from/:to/:date" element={<DisplayFlights />} />
        <Route path="/passengerDetails" element={<PassengerDetails />} />
        <Route path="/confirmReservation" element={<ConfirmReservation />} />
      </Routes>
    </>
  )
}

export default App

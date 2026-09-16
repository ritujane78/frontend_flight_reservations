import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PassengerDetails() {
  const {flightId} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  let count = 0;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/flights/${flightId}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching flight details:', error);
        setLoading(false);
      });
  }, [count]);

  return (
    
    <div>
      <h2>Confirm Reservation for Flight ID: {flightId}</h2>
      <h2>Flight Details:</h2>
      Airline: {loading ? "": data.operatingAirlines}<br />
      Departure City: {loading ? "": data.departureCity}<br />
      Arrival City: {loading ? "": data.arrivalCity}<br />
      Departure Date and Time: {loading ? "": data.estimatedDepartureTime}<br />
      
    </div>
  )
}
  export default PassengerDetails


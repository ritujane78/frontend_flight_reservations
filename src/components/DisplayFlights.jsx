import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import RowCreator from './RowCreator';
import axios from 'axios';

function DisplayFlights() {
  const {from, to, date} = useParams();
  const [flightDetails, setFlightDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  let count = 0;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/flights?from=${from}&to=${to}&departureDate=${date}`)
      .then((response) => {
        setFlightDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching flight details:', error);
        setLoading(false);
      });
  }, [count]);
  

  return (
    <div>
      <h2>Available Flights</h2>
      <table>
        <thead>
          <tr>
              <th>Airline</th>
              <th>Departure City</th>
              <th>Arrival City</th>
              <th>Departure Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : (
            flightDetails.map((flight) => <RowCreator item = {flight} key={flight.id}/>)
          )}
        </tbody>
        
      </table>
    </div>
  )
}

export default DisplayFlights;

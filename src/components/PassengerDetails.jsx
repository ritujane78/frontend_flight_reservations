import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function PassengerDetails() {
  const {flightId} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [passngerFirstName, setPassengerFirstName] = useState('');
  const [passngerLastName, setPassengerLastName] = useState('');
  const [passngerMiddleName, setPassengerMiddleName] = useState('');
  const [passngerEmail, setPassengerEmail] = useState('');
  const [passngerPhone, setPassengerPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  let count = 0;
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      flightId: flightId,
      passengerFirstName: passngerFirstName,
      passengerMiddleName: passngerMiddleName,
      passengerLastName: passngerLastName,
      passengerEmail: passngerEmail,
      passengerPhone: passngerPhone,
      cardNumber: cardNumber,
      cardExpiry: cardExpiry,
      cardCvv: cardCvv  
    }
    axios.post('http://localhost:8080/api/confirmReservation', data)
      .then((response) => {
        console.log('Reservation successful:', response.data);
        navigate('/confirmReservation/' + response.data.id);
      })
      .catch((error) => {
        console.error('Error making reservation:', error);
        // Handle error, e.g., show an error message
      });
  }

  return (
    
    <div>
      <h2>Confirm Reservation for Flight ID: {flightId}</h2>
      <h2>Flight Details:</h2>
      Airline: {loading ? "": data.operatingAirlines}<br />
      Departure City: {loading ? "": data.departureCity}<br />
      Arrival City: {loading ? "": data.arrivalCity}<br />
      Departure Date and Time: {loading ? "": data.estimatedDepartureTime}<br />
      <h2>Passenger Details:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" placeholder="First Name" value={passngerFirstName} onChange={(e) => setPassengerFirstName(e.target.value)} /> <br />
        <label htmlFor="middleName">Middle Name:</label>
        <input type="text" id="middleName" placeholder="Middle Name" value={passngerMiddleName} onChange={(e) => setPassengerMiddleName(e.target.value)} /> <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" placeholder="Last Name" value={passngerLastName} onChange={(e) => setPassengerLastName(e.target.value)} /> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Email" value={passngerEmail} onChange={(e) => setPassengerEmail(e.target.value)} /> <br />
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" placeholder="Phone" value={passngerPhone} onChange={(e) => setPassengerPhone(e.target.value)} /> <br />
        <h2>Payment Details:</h2>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /> <br />
        <label htmlFor="cardExpiry">Card Expiry:</label>
        <input type="text" id="cardExpiry" placeholder="Card Expiry" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} /> <br />
        <label htmlFor="cardCvv">Card CVV:</label>
        <input type="text" id="cardCvv" placeholder="Card CVV" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} /> <br />
        <button type="submit">Confirm Reservation</button>
      </form>
      
    </div>
  )
}
  export default PassengerDetails


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function FindFlights() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/displayFlights/${from}/${to}/${date}`);
    }
  return (
    <div>
      <h2>Find Flights</h2>
      <p>Search for available flights below:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From:</label>
        <input type="text" id="from" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
        <label htmlFor="to">To:</label>
        <input type="text" id="to" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
        <label htmlFor="date">Departure Date:</label>
        <input type="text" id="date" placeholder="Departure Date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default FindFlights;

import React from 'react'
import { Link } from 'react-router-dom';

function RowCreator(props) {
    let flight = props.item;
  return (
    <tr>
      <td>{flight.operatingAirlines}</td>
      <td>{flight.departureCity}</td>
      <td>{flight.arrivalCity}</td>
      <td>{flight.estimatedDepartureTime}</td>
      <td><Link to={`/passengerDetails/${flight.id}`}>Select</Link></td>
    </tr>
  )
}

export default RowCreator

import { useParams } from 'react-router-dom';
function ConfirmReservation() {
  const reservationId = useParams().reservationId;
  return (
    <div>
      <h2>Confirmed Reservation!!</h2>
      <p>Reservation ID: {reservationId}</p>
    </div>
  )
}

export default ConfirmReservation
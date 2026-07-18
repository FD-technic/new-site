import { Button } from "@components";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  

  return (
    <div>
      <h2>Reservation</h2>
      <Button className="btn btn-primary btn-sm">Back to home</Button>
      <ReservationForm />
    </div>
  );
};

export default Reservation;

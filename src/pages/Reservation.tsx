import Button from "../components/button/Button";

const Reservation = () => {
  return (
    <>
      <div className="container">
        <h2>Reservation</h2>
        <p>termin:</p>
        <p>from:</p>
        <p>to:</p>
        <hr/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          cupiditate nulla excepturi deleniti tempore libero, maxime corporis
          commodi laborum odio fuga illum iste modi eos. Doloribus soluta
          voluptatibus quis incidunt!
        </p>
        <Button className="btn-primary btn-md">
          Like
        </Button>
        <Button className="btn-primary btn-sm">
          Like
        </Button>
      </div>
    </>
  );
};

export default Reservation;

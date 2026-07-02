import Button from "../components/button/Button";
import Card from "../components/card/Card";

const Partners = () => {
  return (
    <>
      <div className="container">
        <h2>Our partners</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          cupiditate nulla excepturi deleniti tempore libero, maxime corporis
          commodi laborum odio fuga illum iste modi eos. Doloribus soluta
          voluptatibus quis incidunt!
        </p>
        
        <Card
            title="Karta"
            action={
                <Button className="btn-accent btn-sm">
                    reserve
                </Button>
            } >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit nisi aperiam, iure blanditiis officiis!</p>
        </Card>
        
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

export default Partners;

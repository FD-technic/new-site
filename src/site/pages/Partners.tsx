import { NavLink } from "react-router-dom";
import kajaky from "../../assets/kajaky.png";
import { Card } from "@components";
import { Grid } from "@layout";


const Partners = () => {
  return (
    <div>
      <h2>Our partners</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate
        nulla excepturi deleniti tempore libero, maxime corporis commodi laborum
        odio fuga illum iste modi eos. Doloribus soluta voluptatibus quis
        incidunt!
      </p>
      <Grid columns={3} className="grid-centered" gap="md">
        <Card
          title="Kajaky.cz"
          image={<img src={kajaky} width="150" />}
          
        >
          <p>
            We are a rental company. Have a day on the water with your family and we will pick up at the end of your trip wherever it may be. We are also TEAMBUILDERS. Relax and enjoy kayaking or rafting with your colleagues, we take care for everything else. We accept VISA and cash naturally.
          </p>
          <NavLink to="http://www.kajaky.cz" className={"btn btn-primary btn-sm"}>www.kajaky.cz</NavLink>
        </Card>
        
      </Grid>
    </div>
  );
};

export default Partners;

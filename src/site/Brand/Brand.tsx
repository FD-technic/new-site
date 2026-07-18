// Moving with Versatility / Transport • Moving • Assembly • Setup • Helping Hands / 
// From transport to complete move-in assistance.

import logo from "../../assets/UIlogo.png";
import { BRAND } from "../config/brand";
import "./Brand.css";


const Brand = () => {
  return (
    <div className="brand">
      
      <div className="col span center">
        <div className="row center">
           <img src={logo} className="logo" alt="Ferdo UI logo" />
        <h1>{BRAND.title}</h1>
        </div>
       
        <div className="tagline">
          <p>{BRAND.tagline}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Brand;



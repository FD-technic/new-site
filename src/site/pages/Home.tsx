import { Button, Card } from "@components";
import { Grid } from "@layout";


const Home = () => {
  return (
    <>
      <div>
        <h2>Homepage</h2>
        <p>
          Professional service since 2010. Not job too small. The smallest item
          we delivered was forgotten sweater on a airplane, shipped to its owner
          in Greek island Corfu, thru big dogs to the vet, wash machines,
          fridges, up to complete households. Please read real references on FB
          page.
        </p>
        <Grid columns={3} className="grid-centered" gap="md">
          <Card
            title="Moving service"
            action={<Button className="btn-accent btn-sm">reservation</Button>}
          >
            <p>
              Tired by the hassle of your relocation? We specialize in providing
              fast, efficient, and flexible transportation services. Whether you
              need to move a single fridge or your entire apartment, we will
              make sure your belongings are transported safely, carefully, and
              on time. Our goal is to make your move as simple and stress-free
              as possible.
            </p>

            <ul className="card-list">
              <li>Fast and reliable moving services</li>
              <li>Professional and friendly team</li>
              <li>Furniture assembly and disassembly</li>
              <li>Loading and unloading assistance</li>
              <li>Flexible booking times</li>
              <li>Affordable and transparent pricing</li>
            </ul>
          </Card>
          <Card
            title="Montage service"
            action={<Button className="btn-accent btn-sm">reservation</Button>}
          >
            <p>
              Our team has years of experience assembling and disassembling
              furniture wherever and whenever you need. No more confusion with
              instruction manuals or missing parts—we handle the entire process
              with care and precision. Whether it's a single wardrobe, a
              complete bedroom set, or office furniture, we make sure everything
              is safely taken apart, transported, and reassembled in its new
              location.
            </p>
            <ul className="card-list">
              <li> furniture assembly</li>
              <li> wall hanging (TV, safe..plant, etc)</li>
              <li> small wall repairs</li>
              <li> painting</li>
            </ul>
          </Card>
          <Card
            title="Airport transfer"
            action={<Button className="btn-accent btn-sm">reservation</Button>}
          >
            <p>
              Our vans can take you to your destination for a fixed price.
              Whether you're travelling with heavy luggage, sports equipment, or
              your favorite pet, our friendly drivers will make your journey
              comfortable, safe, and stress-free. We provide reliable
              transportation with flexible scheduling, ensuring you arrive on
              time and travel in comfort.
            </p>

            <ul className="card-list">
              <li>Fixed prices with no hidden fees</li>
              <li>Comfortable and spacious vans</li>
              <li>Experienced and friendly drivers</li>
              <li>Assistance with luggage and belongings</li>
              <li>Pet-friendly transportation</li>
              <li>Airport transfers and local journeys</li>
            </ul>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Home;

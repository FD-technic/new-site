import { SERVICES } from "../config/Services";
import CheckBox from "../../components/form/CheckBox";
import "@components";
import { FormGroup, Input, Select, TextArea } from "../../components/form";
import { useState } from "react";
import { Button } from "@components";

const ReservationForm = () => {
  const [service, setService] = useState("-");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [driver, setDriver] = useState(false);
  const [helpers, setHelpers] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      service,
      date,
      time,
      driver,
      helpers,
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form red-border">
      <Select
        label={`Choose job (prices valid 09-19h with website booking only) ) *:`}
        name="service"
        id="service"
        items={SERVICES}
        value={service}
        onChange={setService}
      />

      <FormGroup>
        <div>
          <Input
            type="date"
            id="date"
            name="date"
            label="Date"
            value={date}
            onChange={setDate}
          />
        </div>
        <div>
          <Input
            type="time"
            id="time"
            name="time"
            label="Time"
            value={time}
            onChange={setTime}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <CheckBox
          id="driver"
          name="Driver / Helpers"
          checked={driver}
          onChange={setDriver}
        />

        <CheckBox
          id="helpers"
          name="Two Helpers"
          checked={helpers}
          onChange={setHelpers}
        />
      </FormGroup>

      <div>
        <label>Your message: </label>
        <TextArea
          id="message"
          name="message"
          placeholder="Describe your move..."
          value={message}
          onChange={setMessage}
        />
      </div>
      <Button type="submit" className="btn btn-success btn-md">
        Submit
      </Button>
    </form>
  );
};

export default ReservationForm;

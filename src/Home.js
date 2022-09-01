import React from "react";
import "./App.css";
import { useState } from "react";

const Home = (props) => {
  const [sickDentist, setSickDentist] = useState("");

  const handleOnClick = (e) => {
    setSickDentist({ sick: true, id: e.target.value });
    props.sickReport(sickDentist);
  };

  return props.dentist.map((person) => (
    <div>
      <li style={{ listStyle: "none", fontSize: 20 }}>
        <button value={person.id} onClick={handleOnClick}>
          sick
        </button>
        <label style={{ color: "#bdbdbd" }}>
          {"  "}
          {person.name}
          {"  "}
          {person.surname}
        </label>
      </li>
    </div>
  ));
};

export default Home;

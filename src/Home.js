import React from "react";
import "./App.css";
import { useState } from "react";

const Home = (dentist) => {
  const [sickDentist, setSickDentist] = useState("");

  const handleOnClick = (e) => {
    setSickDentist({ sick: true, id: e.target.value });
    console.log(sickDentist);
  };

  return dentist.dentist.map((dts) => (
    <div>
      <li style={{ listStyle: "none", fontSize: 20 }}>
        <button value={dts.id} onClick={handleOnClick}>
          sick
        </button>
        <label>
          {"  "}
          {dts.name}
          {dts.surname}
        </label>
      </li>
    </div>
  ));
};

export default Home;

import React from "react";
import "./App.css";
import { useState } from "react";

const Home = (dentist) => {
  const [sickDentist, setSickDentist] = useState("");

  const handleOnClick = (e) => {
    setSickDentist({ sick: true, id: e.target.value });
    console.log(sickDentist);
  };

  return dentist.dentists.map((dentist) => (
    <div>
      <li style={{ listStyle: "none", fontSize: 20 }}>
        <button value={dentist.id} onClick={handleOnClick}>
          sick
        </button>
        <label>
          {"  "}
          {dentist.name}
          {dentist.surname}
        </label>
      </li>
    </div>
  ));
};

export default Home;

import React from "react";
import "./App.css";

const style = { width: "140px", color: "blue", cursor: "pointer" };

export default ({ bvtDentists, sick, lijst }) => {
  return bvtDentists.map((element, index) => (
    <div key={index}>
      <button onClick={() => sick(element.id)}>
        {element.name} {element.surname}
      </button>
    </div>
  ));
};

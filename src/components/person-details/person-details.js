import React from "react";
import "./person-details.css";

const PersonDetails = () => {
  return (
    <div className="person-form">
      <img alt="planet" src="https://hotline.ua/img/tx/184/1847391265.jpg" />
      <div>
        <h3 className="flex">R2-D2</h3>
        <ul className="info-list">
          <li>Gender :</li>
          <li>Birth year : </li>
          <li>Eye color : </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonDetails;

import React from "react";

function DriverCard(props) {
  let { name, rating, img, car } = props;

  const driverRatingArredondado = Math.round(rating);

  let driverEstrelas = "";

  for (let i = 0; i < 5; i++) {
    if (i < driverRatingArredondado) {
      driverEstrelas += "★";
    } else {
      driverEstrelas += "☆";
    }
  }

  return (
    <>
      <div className="driverCard">
        <img src={img} />
        <div className="driverCardInfo">
          <h2>{name}</h2>
          <p className="driverEstrelas">{driverEstrelas}</p>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    </>
  )
}

export default DriverCard;

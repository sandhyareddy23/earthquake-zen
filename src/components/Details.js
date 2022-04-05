import React from "react";
import { useLocation } from "react-router-dom";
import { capitalize } from "./utils";

const Details = () => {
  const location = useLocation();
  const details = location.state;
  return (
    <>
      <div className="mainContainer headerFont">{details.title}</div>
      <section className="mainContainer">
        <div>
          {Object.keys(details).map((detail, index) => {
            if (detail === "place") return;
            return (
              <div className="flex-div" key={index}>
                <div className="card-item">{capitalize(detail)}</div>
                <div className="card-item">{details[`${detail}`]}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Details;

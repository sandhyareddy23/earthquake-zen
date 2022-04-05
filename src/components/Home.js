import React from "react";
import ListTable from "./ListTable";

const Home = ({ earthQuakeDetails }) => {
  const tableData = earthQuakeDetails.features.map((feature) =>
    (({ place, mag, time }) => ({ place, mag, time }))(feature.properties)
  );

  const detailData = earthQuakeDetails.features.map((feature) =>
    (({ place, title, mag, time, status, tsunami, type }) => ({
      place,
      title,
      mag,
      time,
      status,
      tsunami,
      type,
    }))(feature.properties)
  );

  const theadData = [
    { Title: "place" },
    { Magnitude: "mag" },
    { Time: "time" },
  ];

  return (
    <>
      <div className="mainContainer headerFont">
        {earthQuakeDetails.metadata.title}
      </div>
      <section className="mainContainer">
        <ListTable
          tableData={tableData}
          theadData={theadData}
          detailData={detailData}
        />
      </section>
    </>
  );
};
export default Home;

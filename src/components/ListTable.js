import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

/*
Custom table component to display based on our UX requirement.
(Can be further generalized by having a seperate basic Table component and sending the Children prop to display as per custom reqs)
**/
const ListTable = ({ tableData, theadData, detailData }) => {
  const navigate = useNavigate();
  const [currentOrder, setCurrentOrder] = useState("asc");
  const [currentSortedColumn, setCurrentSortedColumn] = useState("place");
  const [tableContents, setTableContents] = useState(tableData);

  const handleSorting = (columnName) => {
    const sortToggleMap = {
      ["asc"]: "desc",
      ["desc"]: "asc",
    };
    let newOrder = "asc";
    if (currentSortedColumn === columnName) {
      newOrder = sortToggleMap[currentOrder];
    }
    setCurrentOrder(newOrder);
    setCurrentSortedColumn(columnName);
    let sortedtableContents;
    if (newOrder === "asc") {
      sortedtableContents = tableContents.sort((a, b) =>
        a[columnName] > b[columnName] ? 1 : -1
      );
      setTableContents(sortedtableContents);
    } else {
      sortedtableContents = tableContents.sort((b, a) =>
        a[columnName] > b[columnName] ? 1 : -1
      );
      setTableContents(sortedtableContents);
    }
  };

  return (
    <table className="tableStyles">
      <thead>
        <tr>
          {theadData.map((headerData) => {
            return Object.keys(headerData).map((key, index) => {
              return (
                <th key={index}>
                  <button
                    type="button"
                    className="buttonStyle"
                    onClick={() => handleSorting(headerData[key])}
                  >
                    {key}
                    <span className="arrow-asc" />
                    <span className="arrow-desc" />
                  </button>
                </th>
              );
            });
          })}
        </tr>
      </thead>

      <tbody>
        {tableContents.map((item, index) => {
          const specificDetails = detailData.filter(
            (detail) => detail.place === item.place
          );

          const toDetails = () => {
            navigate("/details", { state: specificDetails[0] });
          };
          return (
            <tr key={index}>
              <td>
                <a
                  className="navlink"
                  onClick={() => {
                    toDetails();
                  }}
                >
                  {item.place}
                </a>
              </td>
              <td className="paddingleft">{item.mag}</td>
              <td>{item.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ListTable.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      place: PropTypes.string,
      mag: PropTypes.number,
      time: PropTypes.number,
    })
  ),
  theadData: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Magnitude: PropTypes.string,
      Time: PropTypes.string,
    })
  ),
  detailData: PropTypes.arrayOf(
    PropTypes.shape({
      place: PropTypes.string,
      title: PropTypes.string,
      mag: PropTypes.number,
      time: PropTypes.number,
      status: PropTypes.string,
      tsunami: PropTypes.number,
      type: PropTypes.string,
    })
  ),
};
export default ListTable;

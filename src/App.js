import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import AppRoutes from "./components/AppRoute";
import "./App.scss";

const App = () => {
  const [myData, setMyData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("./data.json").catch((err) => {
        console.log(err, " error");
      });
      setMyData(data);
    };
    getData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        {Object.keys(myData).length ? (
          <>
            <Header headerDetails={myData.site} />
            <AppRoutes details={myData} />
          </>
        ) : (
          <div>"Loading ..."</div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;

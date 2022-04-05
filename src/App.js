import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import AppRoutes from "./components/AppRoute";
import "./App.scss";

const App = () => {
  const [myData, setMyData] = useState({});
  /*Fetching the data from public/data.json using axios.
  we could have just imported the json file and used it, instead of api like call, but thinking of potential usage of external API, used axios)
  Also This Axios call can be moved further into components based on what kind of data returned and needed by component,
   instead of passing data from here to child components.
  **/
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

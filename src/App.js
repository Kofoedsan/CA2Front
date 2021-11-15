import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";
import Home from "./component/Home";
import Header from "./component/Header";
import NoMatch from "./component/NoMatch";
import React, { useState, useEffect } from "react";
import Covid from "./component/Covid";
import Recipes from "./component/Recipes";
import facade from "./component/apiFacade";
import CovidStatus from "./component/CovidStatus";
import setCovid from "./component/setCovid";
import { Container, Alert } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("All is good ... so far");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage("Logged out.");
  };
  return (
    <Container>
      <Router>
        <div>
          <h2 className="customhead">Welcome to Kofoednet.systems</h2>
          <Header facade={facade} loggedIn={loggedIn} />
          <div className="content">
            <Routes>
              <Route
                path="/CA2FrontEnd/"
                element={
                  <Home
                    logout={logout}
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    facade={facade}
                    setErrorMessage={setErrorMessage}
                  />
                }
              />

              <Route path="/CA2FrontEnd/fetchcovid" element={<Covid />} />

              <Route
                path="/CA2FrontEnd/covidstatus"
                element={<CovidStatus />}
              />

              <Route path="/CA2FrontEnd/fetchRecipes" element={<Recipes />} />

              <Route path="*" element={<NoMatch />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
      <Alert className="mt-4">Status: {errorMessage}</Alert>
    </Container>
  );
}

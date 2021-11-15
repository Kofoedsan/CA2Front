import React, { useEffect, useState } from "react";
import URL from "./settings";
import Facade from "./apiFacade";

const Fetch = () => {
  const [status, setStatus] = useState();

  useEffect(() => {
    getCovidInfo();
  }, []);

  const getCovidInfo = async () => {
    const res = await fetch(URL + "/api/fetch/getcovid/" + username);
    const data = await res.json();
    setStatus(data, status);
    console.log(username);
  };

  return (
    <div>
      <p> {status} </p>
    </div>
  );
};

const getUserRoles = () => {
  const token = Facade.getToken();
  if (token != null) {
    const payloadBase64 = Facade.getToken().split(".")[1];
    const decodedClaims = JSON.parse(window.atob(payloadBase64));
    const username = decodedClaims.username;
    return username;
  } else return "";
};
const username = getUserRoles();

export default function App() {
  return <Fetch />;
}

import React, { useEffect, useState } from "react";

import URL from "./settings";

const FetchCovid = () => {
  const [covid, setCovid] = useState(
    [
      {
        country: "",
        code: "",
        confirmed: "",
        recovered: "",
        critical: "",
        deaths: "",
      },
    ]
  );

  const [covidRef, setCovidRef] = useState(
      {
        covidReference:"",
      },
  );


  useEffect(() => {
    getCovidInfo();
  }, []);

  const getCovidInfo = async () => {
    const res = await fetch(URL + "/api/fetch");
    const data = await res.json();
    setCovid(...data.covid, covid);
    setCovidRef({covidReference: data.covidReference});
  };

  return (
    <div>
      <p> Country: {covid.country} </p>
      <p> Country Code: {covid.code} </p>
      <p> Confirmed Infected: {covid.confirmed} </p>
      <p>Confirmed Recovered: {covid.recovered} </p>
      <p> Confirmed Critical: {covid.critical} </p>
      <p> Confirmed Death: {covid.deaths} </p>
      <p> Ref: {covidRef.covidReference} </p>
    </div>
  );
};

export default function App() {
  return <FetchCovid />;
}
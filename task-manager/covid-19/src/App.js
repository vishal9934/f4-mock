// you need to do this-
// https://cdn.acciojob.com/media/frontend_placement_mock/frontend_placement_mock_covid19API.gif 
import React, { useState, useEffect } from "react";
const App = () => {
  const [country, setCountry] = useState("");
  const [resp, setResp] = useState([]);
  useEffect(() => {
    fetch(`http://disease.sh/v3/covid-19/countries/india`)
      .then((response) => response.json())
      .then((data) => setResp(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(resp)
  function output() {
    fetch(`http://disease.sh/v3/covid-19/countries/${country}`)
      .then((response) => response.json())
      .then((data) => setResp(data));
  }
  return (
    <>
      <div>
        <h1>Covid 19 cases country wise </h1>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter Country Name"
        />
        <br />
        <button onClick={output}>Search</button>
      </div>
      <div id="countryData">
        <p>Country Name : {resp.country}</p>
        <p>Cases : {resp.cases}</p>
        <p>Country Name : {resp.country}</p>
        <p>Deaths : {resp.deaths}</p>
        <p>Recovered : {resp.recovered}</p>
        <p>Today Cases : {resp.todayCases}</p>
      </div>
    </>
  );
};
export default App;

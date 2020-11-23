import React, { useState, useEffect } from "react";
import './App.css';
import {MenuItem,FormControl,Select,Card,CardContent,} from "@material-ui/core";
import InfoBox from "./InfoBox";
//import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";

function App() {
  // States: short term memories/REACT variables
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  //get-set the country info from the API
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //get-set the countries from the API
  //async - send a request, wait for it, do sg with info
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          //let sortedData = sortData(data);
          setCountries(countries);
          //setMapCountries(data);
          //setTableData(sortedData);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setInputCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            {/*Dropdown box items*/}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={1000}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={1000}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={1000}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
      </div>
      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import './App.css';
import {MenuItem,FormControl,Select,Card,CardContent,} from "@material-ui/core";

function App() {
  // States: short term memories/REACT variables
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"//{country}
            //onChange={onCountryChange}
          >
            {/*Dropdown box items*/}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            
          </Select>
        </FormControl>
      </div>
      
    </div>
  );
}

export default App;

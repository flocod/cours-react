import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");

  const radios = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  // le use effet se joue, lorsque le commposant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        <li>Nbre Pays: {rangeValue}</li>

        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              name="continentRadio"
              id={continent}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>

      <ul>
        {selectedRadio === "All"
          ? data
              .slice(0, rangeValue)
              .map((country, index) => <Card key={index} country={country} />)
          : data
              .filter((country) =>
                country.continents[0].includes(selectedRadio)
              )
              .slice(0, rangeValue)
              .map((country, index) => <Card key={index} country={country} />)}
      </ul>
    </div>
  );
};
export default Countries;

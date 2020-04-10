import React from "react"
import useStats from "../../utils/useStats"
import { useState } from "react"
import SpecificStats from "../Dashboard/SpecificStats"

export default function CountrySelector() {
  const countries = useStats("https://corona.lmao.ninja/countries")
  const [selectedCountry, setSelectedCountry] = useState("Malaysia")
  if (!countries) return <p>Fetching Specific Countries Data ...</p>
  return (
    <div className="text-center">
      <h4>Country selected : {selectedCountry}</h4>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value)
        }}
      >
       {countries.map(item => {
          return (
            <option
            selected={selectedCountry === item.country}
              value={item.country}
              key={item.country}
            >
              {item.country}
            </option>
          )
        })}
      </select>
      <SpecificStats
        url={`https://corona.lmao.ninja/countries/${selectedCountry}`}
      ></SpecificStats>
    </div>
  )
}

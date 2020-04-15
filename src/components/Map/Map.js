import React from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import styled from "styled-components"
import axios from "axios"
import "./Map.css"
// import root from 'window-or-global'

//wrapper for map

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`

export default class Map extends React.Component {
  async componentDidMount() {
    this.map = L.map("map", {
      maxZoom: 19,
      // zoom: 6,
      zoomControl: false,
      trackResize: false
    })

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        detectRetina: false,
        noWrap: true,
        // maxNativeZoom: L.Browser.retina ? 10 : 11,
      }
    ).addTo(this.map)

    this.map.setView([1, 1], 1)
    this.map.invalidateSize()
    let response

    try {
      response = await axios.get("https://corona.lmao.ninja/countries")
    } catch (e) {
      console.log(`Failed to fetch countries: ${e.message}`, e)
      return
    }
    const { data = [] } = response

    const hasData = Array.isArray(data) && data.length > 0

    if (!hasData) return
    const geoJson = {
      type: "FeatureCollection",
      features: data.map((country = {}) => {
        const { countryInfo = {} } = country
        const { lat, long: lng } = countryInfo
        return {
          type: "Feature",
          properties: {
            ...country,
          },
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        }
      }),
    }

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature
        let updatedFormatted
        let casesString

        const { country, updated, cases, deaths, recovered } = properties

        casesString = `${cases}`

        if (cases > 1000) {
          casesString = `${casesString.slice(0, -3)}k+`
        }

        if (updated) {
          updatedFormatted = new Date(updated).toLocaleString()
        }

        const html = `
            <span class="icon-marker">
              <span class="icon-marker-tooltip">
                <h2>${country}</h2>
                <ul>
                  <li><strong>Confirmed:</strong> ${cases}</li>
                  <li><strong>Deaths:</strong> ${deaths}</li>
                  <li><strong>Recovered:</strong> ${recovered}</li>
                  <li><strong>Last Update:</strong> ${updatedFormatted}</li>
                </ul>
              </span>
              ${casesString}
            </span>
          `

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html,
          }),
  
        })
      },
    })
    geoJsonLayers.addTo(this.map)
  }

  render() {
    return <Wrapper className="col-12" height="400px" id="map" />
  }
}

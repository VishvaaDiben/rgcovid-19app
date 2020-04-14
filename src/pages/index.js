import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Dashboard/Stats"
import SpecificStats from "../components/Dashboard/SpecificStats"
import CountrySelector from "../components/Dashboard/CountrySelector"
import Map from "../components/Map/Map"
import "font-awesome/css/font-awesome.min.css"
import ScrollUpButton from "react-scroll-up-button"

const IndexPage = () => (
  <Layout>
    <SEO title="Covid-19-News" />
    <h3 className="text-center">[Global Overall Stat]</h3>
    <Stats></Stats>
    <hr />
    <h3 className="text-center">[Specific Country Stat]</h3>
    <CountrySelector></CountrySelector>

    <SpecificStats></SpecificStats>
    <ScrollUpButton />
    <Map />
  </Layout>
)

export default IndexPage

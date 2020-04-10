import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/Global/Main"
import Infoblock from "../components/Global/Infoblock"
import DualInfoblock from "../components/Global/DualInfoblock"
import Ngo from "../components/Ngo/Ngo"

import "font-awesome/css/font-awesome.min.css"
import ScrollUpButton from "react-scroll-up-button"

const GovernmentPage = ({data}) => (
  <Layout>
    <SEO title="Covid-19-News" />
    <Main
    img={data.img.childImageSharp.fluid}
    // title="Covid-19 Info Center"
    subtitle="Covid-19-Information"
    mainclass="main-section-bg"
    />
    <Infoblock heading="External Links"/>
    <DualInfoblock heading="Goverment Aid Links"/>
    <Ngo heading="NGO"></Ngo>
    <ScrollUpButton/>
  </Layout>
)

export const query = graphql `{
  img: file(relativePath: {eq: "museum.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default GovernmentPage

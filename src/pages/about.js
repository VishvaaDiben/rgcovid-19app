import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/Global/Main"
import About from "../components/About/About"

import "font-awesome/css/font-awesome.min.css"
import ScrollUpButton from "react-scroll-up-button"


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Covid-19-News" />
    <Main
      img={data.img.childImageSharp.fluid}
      title=""
      subtitle="Covid-19-Information"
      mainclass="about-section-bg"
    />
    {/* <DualInfoblock heading="About" />
    <Infoblock heading="About" /> */}
    <About heading="About"/>
    <ScrollUpButton/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "japan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage

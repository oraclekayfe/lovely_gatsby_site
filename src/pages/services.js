import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const ServicesPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Menu />
    <h1>Our Services</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default ServicesPage

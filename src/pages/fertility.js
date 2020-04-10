import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"


const FertilityPage = () => (
  <Layout>
    <SEO title="Fertility Unit" />
    <Menu />
    <h1>Welcome to St Ives Fertility Unit</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FertilityPage;

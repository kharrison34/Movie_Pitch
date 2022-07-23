import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SponsorsPage = () => (
  <Layout>
    <Seo title="Sponsors Page" />
    <h1>Hi from the Sponsors page</h1>
    <p>represestn by</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SponsorsPage

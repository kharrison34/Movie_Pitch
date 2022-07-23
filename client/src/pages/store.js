import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StorePage = () => (
  <Layout>
    <Seo title="Store Page" />
    <h1>Hi from the Store</h1>
    <p>Welcome buy our merch</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StorePage

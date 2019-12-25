import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>Hello Arizona</h1>
    <p>More text content here.</p>
    <Link to="/about/">&rarr; About</Link>
  </Layout>
)

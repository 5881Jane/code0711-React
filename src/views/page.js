import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - code0711</title>
        <meta property="og:title" content="Page - code0711" />
      </Helmet>
    </div>
  )
}

export default Page

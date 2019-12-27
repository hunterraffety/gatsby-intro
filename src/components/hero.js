import React from 'react'
import styled from '@emotion/core'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
  return (
    <div>
      <h1>Crafts by Carolyn &hearts;</h1>
      <p>
        Hello Arizona (and beyond!){' '}
        <Link to="/about/">Learn about my things</Link>
      </p>
    </div>
  )
}

export default Hero

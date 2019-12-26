import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import ReadLink from '../components/read-link'

const PostTemplate = () => {
  return (
    <Layout>
      <h1>post title</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        who wrote it
      </p>
      <p>post body</p>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}

export default PostTemplate

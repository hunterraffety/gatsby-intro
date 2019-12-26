import React from 'react'
import { Link } from 'gatsby'

import usePosts from '../hooks/usePosts'

import Layout from '../components/layout'
import PostPreview from '../components/post-preview'

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Crafts by Carolyn</h1>
      <p>Site under development! Coming soon.</p>
      <Link to="/about/">&rarr; About</Link>

      <h2>Read the blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

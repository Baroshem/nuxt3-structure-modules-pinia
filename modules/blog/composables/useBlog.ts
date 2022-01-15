import { useState } from "#app"

export const useBlog = () => {
  const blogPostId = useState('blog-post-id', () => 1)
  
  return {
    blog: `Test blog post ${blogPostId.value}`
  }
}
import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'

function PostDetail() {
  const { id } = useParams()
  const postId = Number(id)

  const post = posts.find((item) => item.id === postId)

  if (!post) {
    return (
      <section className="not-found">
        <p className="not-found-code">404</p>

        <h2>Post not found</h2>

        <p>
          The post you are looking for does not exist.
        </p>

        <Link className="read-more" to="/posts">
          ← Back to posts
        </Link>
      </section>
    )
  }

  return (
    <article className="post-detail">
      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <Link className="back-link" to="/posts">
        ← Back to posts
      </Link>
    </article>
  )
}

export default PostDetail
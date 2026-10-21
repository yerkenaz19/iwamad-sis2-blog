import { Link } from 'react-router'
import type { Post } from '../data/posts'
import LikeButton from './LikeButton'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-number">
        #{post.id}
      </div>

      <h3>{post.title}</h3>

      <p>{post.excerpt}</p>

      <div className="post-actions">
        <Link
          className="read-more"
          to={`/posts/${post.id}`}
        >
          Read more →
        </Link>

        <LikeButton />
      </div>
    </article>
  )
}

export default PostCard
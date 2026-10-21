import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function Posts() {
  return (
    <section>
      <div className="page-header">
        <h2>Blog posts</h2>

        <p>
          Thoughts, lessons and experiences from my journey
          through web development.
        </p>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Posts
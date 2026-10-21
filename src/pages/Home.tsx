import { Link } from 'react-router'

function Home() {
  return (
    <section className="hero">
      <div className="hero-badge">
        My personal development blog
      </div>

      <h2>
        Building, learning,
        <br />
        and growing with <span>React.</span>
      </h2>

      <p>
        Welcome to my blog. Here I share my journey in web
        development, React and TypeScript, along with lessons
        I learn while building practical projects.
      </p>

      <Link className="hero-button" to="/posts">
        Explore my posts →
      </Link>
    </section>
  )
}

export default Home
import { useState } from 'react'
import {
  Link,
  Route,
  Routes,
} from 'react-router'

import Layout from './layouts/Layout'
import ProtectedLayout from './layouts/ProtectedLayout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Contact from './pages/Contact'
import Protected from './pages/Protected'
import SignIn from './pages/SignIn'

function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found-code">404</p>

      <h2>Page not found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link className="read-more" to="/">
        ← Back to home
      </Link>
    </section>
  )
}

function App() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/posts" element={<Posts />} />

        <Route
          path="/posts/:id"
          element={<PostDetail />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

       <Route element={<ProtectedLayout signedIn={signedIn} />}>
  <Route
    path="/protected"
    element={
      <Protected
        onSignOut={() => setSignedIn(false)}
      />
    }
  />
</Route>

        <Route
          path="/signin"
          element={
            <SignIn
              onSignIn={() => setSignedIn(true)}
            />
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default App
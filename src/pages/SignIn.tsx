type SignInProps = {
  onSignIn: () => void
}

function SignIn({ onSignIn }: SignInProps) {
  return (
    <section className="simple-page">
      <h2>Sign in</h2>

      <p>
        You must be signed in to view this protected page.
      </p>

      <button
        className="primary-button"
        type="button"
        onClick={onSignIn}
      >
        Sign in
      </button>
    </section>
  )
}

export default SignIn
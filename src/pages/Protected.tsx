type ProtectedProps = {
  onSignOut: () => void
}

function Protected({ onSignOut }: ProtectedProps) {
  return (
    <section className="simple-page">
      <h2>Protected page</h2>

      <p>
        You are signed in and can see this page.
      </p>

      <button
        className="primary-button"
        type="button"
        onClick={onSignOut}
      >
        Sign out
      </button>
    </section>
  )
}

export default Protected
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import { MemoryRouter } from 'react-router'
import App from './App'

function renderApp(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Blog app', () => {
  test('shows all blog posts', () => {
    renderApp('/posts')

    expect(
      screen.getByText('Starting My Web Development Journey'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Why I Like React'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Learning TypeScript'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Building Better UI'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('What I Learned From Projects'),
    ).toBeInTheDocument()
  })

  test('like count increases when clicked', async () => {
    const user = userEvent.setup()

    renderApp('/posts')

    const likeButtons = screen.getAllByRole('button')

    expect(likeButtons[0]).toHaveTextContent('♥ 0')

    await user.click(likeButtons[0])

    expect(likeButtons[0]).toHaveTextContent('♥ 1')
  })

  test('protected page redirects signed-out users to sign in', () => {
    renderApp('/protected')

    expect(
      screen.getByRole('heading', {
        name: 'Sign in',
      }),
    ).toBeInTheDocument()
  })
})
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type LikesContextValue = {
  likes: Record<number, number>
  addLike: (postId: number) => void
}

const LikesContext = createContext<LikesContextValue | undefined>(
  undefined,
)

type LikesProviderProps = {
  children: ReactNode
}

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState<Record<number, number>>({})

  function addLike(postId: number) {
    setLikes((current) => ({
      ...current,
      [postId]: (current[postId] ?? 0) + 1,
    }))
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  )
}

export function useLikes() {
  const context = useContext(LikesContext)

  if (!context) {
    throw new Error(
      'useLikes must be used inside a LikesProvider',
    )
  }

  return context
}
import { useState } from 'react'

type LikeButtonProps = {
  initialLikes?: number
}

function LikeButton({ initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <button
      className="like-button"
      type="button"
      onClick={() => setLikes((current) => current + 1)}
    >
      ♥ {likes}
    </button>
  )
}

export default LikeButton
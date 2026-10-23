import { useLikes } from '../context/LikesContext'

type LikeButtonProps = {
  postId: number
}

function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes()

  const count = likes[postId] ?? 0

  return (
    <button
      className="like-button"
      type="button"
      onClick={() => addLike(postId)}
    >
      ♥ {count}
    </button>
  )
}

export default LikeButton
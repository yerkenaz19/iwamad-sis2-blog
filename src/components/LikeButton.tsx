import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button
      className="like-button"
      type="button"
      onClick={addLike}
    >
      ♥ {likes}
    </button>
  )
}

export default LikeButton
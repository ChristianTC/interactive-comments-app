import { IComment, User } from "../interfaces/interfaces"
import { useState } from 'react';

interface Props {
  user: User,
  handleComment: React.Dispatch<React.SetStateAction<IComment[]>>,
  repliedTo?: string,
}

const CommentInput = ({user, handleComment, repliedTo = ''}:Props) => {

  const [message, setMessage] = useState(repliedTo)
  const id = Math.random() * (10000 * 3) - 3

  const toggleSend = () => {
    if (message.length > 0) {
      handleComment(prev => [...prev, {
        id: id,
        content: message,
        createdAt: 'today',
        score: 0,
        user: user
      }])
      setMessage('')
    }

  }

  return (
    <section className="comment-input">
      <img src={user.image.webp} alt="Profile" />
      <textarea 
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Add a comment..."/>
      <button onClick={toggleSend}>SEND</button>
    </section>
  )
}

export default CommentInput
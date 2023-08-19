import { UserContext } from "../context/UserContext";
import { useState, useContext } from 'react';

import data from '../../data.json'
import { CommentsContext } from "../context/CommentsContext";

interface Props {
  repliedTo?: string,
  commentId?: number
}

const CommentInput = ({ repliedTo = '', commentId }:Props) => {

  const [message, setMessage] = useState(repliedTo ? `@${repliedTo} ` : repliedTo)
  const {setComments} = useContext(CommentsContext)
  const id = Math.random() * (10000 * 3) - 3

  const user = useContext(UserContext)

  const toggleSend = () => {
    if (commentId && message.length > 0) {
      setComments(prev => prev.map((comment) => {
        if (comment.id === commentId) {
          comment.replies?.push({
            id: id,
            content: message,
            createdAt: 'today',
            score: 0,
            user: user,
            replyingTo: repliedTo
          })
        }
        return comment
      }))
    }
    else if (message.length > 0) {
      setComments(prev => [...prev, {
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
      <img src={data.currentUser.image.webp} alt="Profile" />
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
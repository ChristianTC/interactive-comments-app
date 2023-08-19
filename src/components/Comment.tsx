
import Reply from '../assets/icons/icon-reply.svg';
import { IComment } from '../interfaces/interfaces';
import { useState } from 'react';
import CommentInput from './CommentInput';

interface Props {
  comment: IComment,
  commentId?: number
}

const Comment = ({comment, commentId}: Props) => {
  
  const [score, setScore] = useState(comment.score)
  const [showReplyInput, setShowReplyInput] = useState(false)

  const handleScore = (value:number):void => {
    setScore(prevState => Math.max(prevState + value, 0))
  }

  const handleReplyInput = () => {
    setShowReplyInput(prev => !prev)
  }

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
    <article className="comment">
      <section className="counter">
        <button onClick={()=>handleScore(1)}>+</button>
        <span>{score}</span>
        <button onClick={()=>handleScore(-1)}>-</button>
      </section>
      <section className="header">
        <div className="details">
          <img width={'25px'} src={comment.user.image.webp} alt="profile" />
          <span className="detail__user">{comment.user.username}</span>
          <span className="detail__date">{comment.createdAt}</span>
        </div>
        <div onClick={handleReplyInput} className="reply">
          <img src={Reply} alt="" /> 
          <span>Reply</span>
        </div>
        <p className="content">
          {comment.content}
        </p>
      </section>
    </article>
    {
      showReplyInput &&
        <CommentInput repliedTo={comment.user.username} commentId={commentId ? commentId : comment.id} handleReplyInput={handleReplyInput} />
    }
    </section>
  )
}

export default Comment
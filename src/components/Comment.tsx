
import Reply from '../assets/icons/icon-reply.svg';
import { IComment } from '../interfaces/interfaces';
import { useState } from 'react';

interface Props {
  comment: IComment
}

const Comment = ({comment}: Props) => {

  const [score, setScore] = useState(comment.score)

  const handleScore = (value:number):void => {
    setScore(prevState => Math.max(prevState + value, 0))
  }

  return (
    <article className="comment">
      <section className="counter">
        <button onClick={()=>handleScore(1)}>+</button>
        <span>{score}</span>
        <button onClick={()=>handleScore(-1)}>-</button>
      </section>
      <section className="header">
        <div className="details">
          <img width={'25px'} src={comment.user.image.webp} alt="profile" />
          <div className="detail__user">{comment.user.username}</div>
          <div className="detail__date">{comment.createdAt}</div>
        </div>
        <div className="reply">
          <img src={Reply} alt="" /> 
          <span>Reply</span>
        </div>
        <p className="content">
          {comment.content}
        </p>
      </section>
    </article>
  )
}

export default Comment
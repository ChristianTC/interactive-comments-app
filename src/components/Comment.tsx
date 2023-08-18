
import Reply from '../assets/icons/icon-reply.svg';
import { IComment } from '../interfaces/interfaces';

interface Props {
  comment: IComment
}

const Comment = ({comment}: Props) => {
  return (
    <article className="comment">
      <section className="counter">
        <button>+</button>
        <span>{comment.score}</span>
        <button>-</button>
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
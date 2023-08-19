import { IComment } from "../interfaces/interfaces"
import Comment from './Comment';
import RepliesList from "./RepliesList";

interface Props {
  comments: IComment[]
}

const CommentsList = ({comments}:Props) => {
  
  return (
    <section className="comments-list">
      {
        comments.map((comment) => 
          <div key={comment.id}>
            <Comment comment={comment} />
            {
              comment.replies &&
                <RepliesList replies={comment.replies} />
            }
          </div>
        )
      }
    </section>
  )
}

export default CommentsList
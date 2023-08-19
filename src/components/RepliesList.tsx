import { IComment } from "../interfaces/interfaces"
import Comment from "./Comment"

interface Props {
  replies: IComment[],
  commentId: number
}

const RepliesList = ({replies, commentId}:Props) => {
  return (
    <section className="replies-container">
      <hr />
      <section className="replies-list">
        {
          replies.map((reply) => 
            <div key={reply.id}>
              <Comment comment={reply} commentId={commentId} />
            </div>
          )
        }
      </section>
    </section>
  )
}

export default RepliesList
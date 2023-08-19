import { IComment } from "../interfaces/interfaces"
import Comment from './Comment';

interface Props {
  comments: IComment[]
}

const CommentsList = ({comments}:Props) => {
  
  return (
    <>
      {
        comments.map((comment) => <Comment key={comment.id} comment={comment} />)
      }
    </>
  )
}

export default CommentsList
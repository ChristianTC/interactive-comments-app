import { CommentsContext } from "../context/CommentsContext";
import { IComment } from "../interfaces/interfaces"
import Comment from './Comment';
import RepliesList from "./RepliesList";
import { useContext } from 'react';


const CommentsList = () => {
  
  const {comments} = useContext(CommentsContext)

  return (
    <>
      {
        comments && comments.map((comment) => 
          <section key={comment.id} className="comments-list">
            <Comment comment={comment} />
            {
              comment.replies && comment.replies.length > 0 &&
                <RepliesList replies={comment.replies} commentId={comment.id} />
            }
          </section>
        )
      }
    </>
  )
}

export default CommentsList
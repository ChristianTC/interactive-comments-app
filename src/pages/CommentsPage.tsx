
import CommentsList from '../components/CommentsList';
import data from "../../data.json";
import { IComment, User } from '../interfaces/interfaces';
import { useState } from 'react';
import CommentInput from '../components/CommentInput';

const CommentsPage = () => {

  const [comments, setComments] = useState<IComment[]>(data.comments);
  const [user, setUser] = useState<User>(data.currentUser);

  return (
    <section className="comments-page">
      <CommentsList comments={comments} />
      <CommentInput user={user} handleComment={setComments}/>
    </section>
  )
}

export default CommentsPage

import CommentsList from '../components/CommentsList';
import data from "../../data.json";
import { IComment } from '../interfaces/interfaces';
import { useState } from 'react';

const CommentsPage = () => {

  const [comments, setComments] = useState<IComment[]>(data.comments);

  return (
    <section className="comments-page">
      <CommentsList comments={comments} />
    </section>
  )
}

export default CommentsPage
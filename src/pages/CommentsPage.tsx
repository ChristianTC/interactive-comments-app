
import CommentsList from '../components/CommentsList';
import CommentInput from '../components/CommentInput';
import UserProvider from '../context/UserProvider';
import { CommentsProvider } from '../context/CommentsProvider';

const CommentsPage = () => {

  return (
    <UserProvider>
      <section className="comments-page">
        <CommentsProvider>
          <CommentsList />
          <CommentInput />
        </CommentsProvider>
      </section>
    </UserProvider>
  )
}

export default CommentsPage
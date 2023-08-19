import { ReactElement, useState } from 'react';
import { CommentsContext } from './CommentsContext';
import data from '../../data.json'
import { IComment } from '../interfaces/interfaces';

interface ICommentsProvider {
  children: ReactElement | ReactElement []
}


export const CommentsProvider = ({children}: ICommentsProvider) => {
  
  const [comments, setComments] = useState<IComment[]>(data.comments)

  return (
    <CommentsContext.Provider value={{ 
      comments,
      setComments
    }}>
      {children}
    </CommentsContext.Provider>
  )
}

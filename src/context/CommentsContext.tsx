import { createContext } from 'react';
import { IComment } from '../interfaces/interfaces';


interface ICommentsContextProps {
  comments: IComment[],
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>,
}

export const CommentsContext = createContext({} as ICommentsContextProps)

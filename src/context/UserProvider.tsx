import { UserContext } from "./UserContext"
import data from '../../data.json'
import { ReactElement } from "react"

interface IUserProvider {
  children: ReactElement | ReactElement[],
}

const UserProvider = ({ children }: IUserProvider) => {
  const user = data.currentUser
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
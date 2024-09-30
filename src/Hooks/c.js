import React , {useContext} from 'react'
import UserContext from '../context/createcontext'
function Profile() {
  const {User} = useContext(UserContext)
  return (
    <div>profile : {User.email}</div>
  )
}

export default Profile
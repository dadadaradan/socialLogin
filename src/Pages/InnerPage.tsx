import { Auth } from 'aws-amplify'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function InnerApp() {

    const {user} = useContext(UserContext);

    console.log({user});
    
    console.log(Auth.Credentials);
    
    
    return (
    <div>
      <h1>Hello</h1>
      <h3>Welcome to App</h3>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default InnerApp
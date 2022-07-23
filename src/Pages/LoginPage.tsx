import { Auth } from 'aws-amplify'

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => Auth.federatedSignIn({ provider: 'Facebook' as any })}>
        Sign In with Facebook
      </button>

      <button onClick={() => Auth.federatedSignIn({ provider: 'Google' as any })}>
        Sign In with Google
      </button>
    </div>
  )
}

export default LoginPage
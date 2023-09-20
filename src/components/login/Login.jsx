import './login.css'

export default function Login() {
  return (
    <div className="login">
        <div className="leftPart">
            <h1 className="logo">
                Social App
            </h1>
            <div className="proposal">Connect with friends and the world around you on Social App</div>
        </div>
        <div className="rightPart">
            <div className="loginForm">
                <input className='email' placeholder='Email' />
                <input className='password' placeholder='Password'/>
                <button className='loginBtn'>Log In</button>
                <button className="forgetPassword">Forgot Password?</button>
                <button className='createBtn'>Create New Account</button>
            </div>
        </div>
    </div>
  )
}

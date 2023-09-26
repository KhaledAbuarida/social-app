import './login.css'

export default function Login() {
  return (
    <div className="loginPage">
        <div className="leftPart">
            <img className='logo' src="/assets/logo2.png" alt="" />
            <div className="proposal">Connect with friends and the world around you on Social App</div>
        </div>
        <div className="rightPart">
            <div className="loginForm">
                <input className='email' placeholder='Email' />
                <input className='password' placeholder='Password'/>
                <button className='loginBtn'>Log In</button>
                <button className="forgetPassword">Forgot Password?</button>
                <button className='createBtn'>Create Account</button>
            </div>
        </div>
    </div>
  )
}

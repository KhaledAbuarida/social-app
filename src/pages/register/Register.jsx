import './register.css'

export default function Register() {
  return (
    <div className="register">
        <div className="leftPart">
            <h1 className="logo">
                Social App
            </h1>
            <div className="proposal">Connect with friends and the world around you on Social App</div>
        </div>
        <div className="rightPart">
            <div className="registerForm">
                <input className='email' placeholder='Username' />
                <input className='email' placeholder='Email' />
                <input className='password' placeholder='Password'/>
                <input className='password' placeholder='Repeat Password'/>
                <button className='loginBtn'>Log In</button>
                <button className='createBtn'>Log into Account</button>
            </div>
        </div>
    </div>
  )
}

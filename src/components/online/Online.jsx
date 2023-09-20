import './online.css'

export default function Online({user}) {
  return (
    <li className="listItem">
        <div className="profilePic">
            <img className='friendImg' src={user.profilePicture} alt="" />
            <span className='onlineDot'></span>
        </div>
        <span className='friendName'>{user.username}</span>
    </li>
  )
}

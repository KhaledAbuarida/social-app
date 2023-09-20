import './closeFriends.css'

export default function CloseFriends({user}) {
  return (
    <li className="friendListItem">
            <img className="friendImg" src={user.profilePicture} alt="friend" />
            <span className="friendName">{user.username}</span>
    </li>  
  )
}

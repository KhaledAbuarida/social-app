import Online from '../online/Online'
import './rightbar.css'
import { Users } from '../../dummyData'

export default function Rightbar() {

  return (
    <div className='rightbar'>
      <div className="rightbarContainer">
        <div className="birthdaySection">
          <img className='giftImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText'><b>Ahmed</b> and <b>4 other friends</b> have a birthday today.</span>
        </div>

        <hr className='rightbarHr'/>

        <div className="adContainer">
          <span>Advertise</span>
          <img className='adImg' src="/assets/ad.png" alt="" />
        </div>

        <hr className='rightbarHr'/>

        <div className="onlineFriendsSection">
          <div className="header">
            Online Friends
          </div>
          <ul className="friendList">
            {Users.map((u) => ( 
              <Online key={u.id} user={u}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

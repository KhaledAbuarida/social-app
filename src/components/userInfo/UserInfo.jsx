import './userInfo.css'

export default function UserInfo() {
    return( 
        <>
          <div className="userInformation">
            <div className="header">User Information</div>
            <ul className='infoList'>
              <li className='infoItem'>
                <span className="infoKey">City:</span>
                <span className="infoValue">New York</span>
              </li>
              <li className='infoItem'>
                <span className="infoKey">From:</span>
                <span className="infoValue">Madrid</span>
              </li>
              <li className='infoItem'>
                <span className="infoKey">Relationship:</span>
                <span className="infoValue">Single</span>
              </li>
            </ul>
          </div>
          <div className="userFriends">
            <div className="header">User Friends</div>
            <div className="friendsList">
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/1.jpeg" alt="" />
                <div className='friendName'>Kama john</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/2.jpeg" alt="" />
                <div className='friendName'>Safak Kocaogl</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/3.jpeg" alt="" />
                <div className='friendName'>Janell Shrum</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/4.jpeg" alt="" />
                <div className='friendName'>Alex Durden</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/5.jpeg" alt="" />
                <div className='friendName'>Dora Hawks</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/6.jpeg" alt="" />
                <div className='friendName'>Thomas Holden</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/7.jpeg" alt="" />
                <div className='friendName'>Shirley Beauchamp</div>
              </div>
              <div className="friendItem">
                <img className='friendImg' src="/assets/person/8.jpeg" alt="" />
                <div className='friendName'>Travis Bennett</div>
              </div>
            </div>
          </div>
        </>
      )
}

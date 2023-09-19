import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightbarContainer">
        <div className="birthdaySection">
          <img className='giftImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText'><b>Ahmed</b> and <b>4 other friends</b> have a birthday today.</span>
        </div>
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
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/7.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Khaled Abuarida</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/1.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Rawda Ali</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/2.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Hossam Mostafa</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/3.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Hassan Ahmed</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/4.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Ebrahim Abdo</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/5.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Khaled Abuarida</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/6.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Khaled Abuarida</span>
          </li>
          <li className="listItem">
            <div className="profilePic">
              <img className='friendImg' src="/assets/person/8.jpeg" alt="" />
              <span className='onlineDot'></span>
            </div>
            <span className='friendName'>Nada Ebrahim</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

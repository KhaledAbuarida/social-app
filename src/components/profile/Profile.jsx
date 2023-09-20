import './profile.css'
import Topbar from '../topbar/Topbar'
import Feed from '../feed/Feed.jsx';
import Rightbar from '../rightbar/Rightbar.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRightPart">
                <div className="profileUpperPart">
                    <div className="profileCover">
                        <img className='coverImg' src='/assets/posts/9.jpeg' alt="" />
                        <img className='userImg' src='/assets/person/8.jpeg' alt="" />
                    </div>
                    <div className="userName">Khaled Abuarida</div>
                    <div className='bio'>stop being perfect :)</div>
                </div>
                <div className="profileLowerPart">
                    <Feed />
                    <Rightbar />
                </div>
            </div>
        </div>
    </>
  )
}

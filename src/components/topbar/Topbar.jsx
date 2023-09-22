import './topbar.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <>
      <div className="container">
        <div className="leftSide">
          <Link to='/' className="logo">
            Social App
          </Link>
        </div>
        <div className="center">
          <div className="searchBar">
            <SearchIcon className='searchIcon'/>
            <input type="text" placeholder='search for a friend, post or video'/>
          </div>
        </div>
        <div className="rightSide">
          <div className="links">
            <Link to='/' className='homeLink'>Home</Link>
            <Link to='/' className='homeLink'>TimeLine</Link>
          </div>
          <div className="topbarIcons">
            <div className="friendRequests">
              <PersonIcon />
              <span className="badgeNumber">1</span>
            </div>
            <div className="chat">
              <ChatIcon />
              <span className="badgeNumber">2</span>

            </div>
            <div className="notification">
              <NotificationsIcon />
              <span className="badgeNumber">14</span>
            </div>
          </div>
          <div className="profilePic">
            <img src='/assets/person/1.jpeg' alt="profile Picture" />
          </div>
        </div>
      </div>
    </>
  )
}

import './topbar.css'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
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
          <div className="topbarIcons">
            <div className="homeIcon">  
              <Link to='/'>
                <HomeIcon htmlColor='#fff' />
              </Link>
            </div>
            <div className="friendRequests">
              <PersonIcon htmlColor='#fff' />
              <span className="badgeNumber">1</span>
            </div>
            <div className="chat">
              <ChatIcon htmlColor='#fff' />
              <span className="badgeNumber">2</span>

            </div>
            <div className="notification">
              <NotificationsIcon htmlColor='#fff'/>
              <span className="badgeNumber">14</span>
            </div>
          </div>
          <div className="profilePic">
            <Link to='/profile'>
              <img src='/assets/person/khaled.jpg' alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

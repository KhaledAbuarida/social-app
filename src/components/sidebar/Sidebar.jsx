import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className='sidebarListItem'>
            <RssFeedIcon />
            <span className='listItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatIcon />
            <span className='listItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleIcon />
            <span className='listItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <GroupIcon />
            <span className='listItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarksIcon />
            <span className='listItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutlineIcon />
            <span className='listItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutlineIcon />
            <span className='listItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <EventIcon />
            <span className='listItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <SchoolIcon />
            <span className='listItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarBtn'>show more</button>
        <hr className='sidebarHr'/>
        <ul className="friendList">
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          <li className="friendListItem">
            <img className="friendImg" src="/assets/person/1.jpeg" alt="friend" />
            <span className="friendName">John Don</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

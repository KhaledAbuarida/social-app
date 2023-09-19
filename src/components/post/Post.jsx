import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'


export default function Post({post}) {
  return (
    <div className='post'>
      <div className="postContainer">
        <div className="postUpperPart">
          <div className="leftUpperPart">
            <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
            <div>
              <span className='postProfileName'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
              <div className='postDate'>{post.date}</div>
            </div>
          </div>
          <div className="rightUpperPart">
            <MoreVertIcon className='moreIcon'/>
          </div>
        </div>
        <div className="postMiddlePart">
          <div className="content">
            <div className="postText">
              {post.desc}
            </div>
            <img className='postPic' src={post.photo} alt="" />
          </div>
        </div>
        <div className="postLowerPart">
          <div className="reactions">
            <img className='likeIcon' src="/assets/like.png" alt="" />
            <img className='likeIcon' src="/assets/heart.png" alt="" />
            <span className='likeCount'>{post.like} people like this</span>
          </div>
          <div className="comments">
            <span>{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

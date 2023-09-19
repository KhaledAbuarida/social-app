import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
      <div className="postContainer">
        <div className="postUpperPart">
          <div className="leftUpperPart">
            <img className='postProfileImg' src="/assets/person/khaled.jpg" alt="" />
            <div>
              <span className='postProfileName'>Khaled Abuarida</span>
              <div className='postDate'>5 mins ago</div>
            </div>
          </div>
          <div className="rightUpperPart">
            <MoreVertIcon className='moreIcon'/>
          </div>
        </div>
        <div className="postMiddlePart">
          <div className="content">
            <div className="postText">
              Hello this is my first post :)
            </div>
            <img className='postPic' src="/assets/posts/5.jpeg" alt="" />
          </div>
        </div>
        <div className="postLowerPart">
          <div className="reactions">
            <img className='likeIcon' src="/assets/like.png" alt="" />
            <img className='likeIcon' src="/assets/heart.png" alt="" />
            <span className='likeCount'>67 people like this</span>
          </div>
          <div className="comments">
            <span>19 Comment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

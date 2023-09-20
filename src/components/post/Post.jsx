import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData'
import { useState } from 'react';


export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }
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
            {isLiked ? <FavoriteIcon className='likedHeart' onClick={likeHandler}/> : <FavoriteBorderIcon className='unLikedHeart' onClick={likeHandler}/> }
            <span className='likeCount'>{like} people like this</span>
          </div>
          <div className="comments">
            <span>{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

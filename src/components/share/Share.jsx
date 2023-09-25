import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='shareContainer' >
        <div className="shareUpperPart">
            
            <img className='profileImg' src="/assets/person/1.jpeg" alt="profilePic" />
            <input className='shareInput' placeholder="What's in your mind?" type="text"  />
        </div>
        <hr className='shareHr'/>
        <div className="shareLowerPart">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='#28B463' className='shareOptionIcon'/>
                    <span className="shareOptionText"> Photos </span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor='#2471A3' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor='#E74C3C' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='#F1C40F' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
                <button className="shareBtn">Share</button>

            </div>
        </div>
    </div>
  )
}

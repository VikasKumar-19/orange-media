import React from 'react'
import Cover from '../../assets/img/cover.jpg';
import Profile from '../../assets/img/profileImg.jpg';
import './profile-card.css';

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Cover} alt="cover" />
        <img src={Profile} alt="profile pic" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className='followStatus'>
        <hr />
        <div  >
          <div className='follow'>
            <span>4,555</span>
            <span>followers</span>
          </div>
          <div className="vl"></div>
          <div className='follow'>
            <span>4</span>
            <span>following</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard
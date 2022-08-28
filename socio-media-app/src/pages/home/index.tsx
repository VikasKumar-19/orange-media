import React from 'react'
import ProfileSide from '../../components/profile-side';
import './home.css';

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <div className='postSide'>Posts</div>
      <div className='rightSide'>RightSide</div>
    </div>
  )
}

export default Home;
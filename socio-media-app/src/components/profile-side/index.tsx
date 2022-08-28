import React from 'react'
import LogoSearch from '../logo-search';
import ProfileCard from '../profile-card';
import './profile-side.css'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard />
    </div>
  )
}

export default ProfileSide;
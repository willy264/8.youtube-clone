import React from 'react'
import styled from 'styled-components'
import menu_icon from '../assets/menu.png'
import logo from '../assets/video-removebg-preview.png'
import glogo from '../assets/OIP__26_-removebg-preview.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({ setSidebar }) => {
  return (
    <Nav className='flex-div'>
      <Image className='flex-div'>
        <img src={menu_icon} onClick={() => setSidebar(prev => prev === false ? true : false)} className='menu-icon' alt="" />
        <Link to='/' className='logos'>
          <img src={logo} alt="" className="logo" />
          <img src={glogo} alt="" className="glogo" />
        </Link>
      </Image>
      <Input className='flex-div'>
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="" />
        </div>
      </Input>
      <Profile className='flex-div menu-icon'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </Profile>
    </Nav>
  )
}


const Nav = styled.nav`
  padding: 10px 2%;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
`

const Image = styled.div`
  .menu-icon {
    width: 22px;
    margin-right: 25px;
  }
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .logo {
    width: 5%;
  }
  .glogo {
    width: 30%;
  }
  @media (max-width: 900px) {
    .logos {
      justify-content: start;
    }
    .logo {
      width: 10%;
    }
  }
`

const Input = styled.div`
  .search-box {
    border: 1px solid #ccc;
    margin-right: 15px;
    padding: 8px 12px;
    border-radius: 25px;

    input {
      width: 400px;
      border: 0;
      outline: 0;
      background-color: transparent;
    }
    img {
      width: 15px;
    }
    @media (max-width: 900px) {
    input {
      width: 100px;
    }
  }
  }
`

const Profile = styled.div`
  img {
    width: 25px;
    margin-right: 25px;
  }
  .user-icon {
    width: 35px;
    border-radius: 50%;
  }
  @media (max-width: 900px) {
    img {
      display: none;
    }
    .user-icon {
      display: block;
      width: 30px;
    }
  }
`

export default Navbar
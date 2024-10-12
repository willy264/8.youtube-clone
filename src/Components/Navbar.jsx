import React from 'react'
import styled from 'styled-components'
import menu_icon from '../assets/menu.png'
import logo from '../assets/logo.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <Nav className='flex-div'>
      <Image className='flex-div'>
        <img src={menu_icon} onClick={()=> setSidebar(prev=>prev === false ? true : false)} className='menu-icon' alt="" />
        <Link to='/'><img src={logo} alt="" className="logo" />
</Link>
      </Image>
      <Input className='flex-div'>
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="" />          
        </div>
      </Input>
      <Profile className='flex-div'>
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
  .logo {
    width: 130px;
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
`

export default Navbar
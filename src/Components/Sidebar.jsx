import React from 'react'
import styled from 'styled-components'

import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <Aside className={sidebar ? "" : "small-sidebar"} >
      <ShortCut>
        <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Anime</p>
        </div>
        <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </ShortCut>
      <Subscribed>
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </Subscribed>
    </Aside>
  )
}

const Aside = styled.div`
  background-color: #fff;
  width: fit-content;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 80px 0 0 2%;

  .side-link {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: fit-content; 
    flex-wrap: wrap;
    cursor: pointer; 
  }
  .side-link.active img {
    padding-bottom: 2px;
    border-bottom: 3px solid red;
  }

  &.small-sidebar {
    width: fit-content;

    p {
      display: none;
    }
    h3 {
      display: none;
    }  
    hr {
      width: 50%;
      margin-bottom: 25px;
    }
  }
`
const ShortCut = styled.div`
  img {
    width: 20px;
    margin-right: 20px;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: #ccc;
    width: 85%;
  }
  @media (max-width: 900px) {
    p {
      display: none;
    }
  }
`

const Subscribed = styled.div`
  h3 {
    font-size: 13px;
    margin: 20px 0;
    color: #5a5a5a;
  }
  img {
    width: 25px;
    border-radius: 50%;
    margin-right: 20px;
  }
  @media (max-width: 900px) {
    margin-top: 30px;
    h3, p {
      display: none;
    }
  }
`

export default Sidebar
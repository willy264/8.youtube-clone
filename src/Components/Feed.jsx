import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../data'
import moment from 'moment'


const Feed = ({category}) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
  }

  useEffect(() => {
    fetchData();
  }, [category])

  return (
    <Feeds>
      {data.map((item, index) => {
        return (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          {/* <p>{category}</p> */}
        </Link>           
        )
      })}
  
    </Feeds>

  )
}

const Feeds = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  margin-top: 15px;

  .card {
    img {
      width: 100%;
      border-radius: 5px;
    }
    h2 {
      font-size: 16px;
      font-weight: 600;
      color: #000;
      margin: 5px 0;
    }
    h3 {
      font-size: 14px;
      font-weight: 600;
      color: #555;
      margin: 6px 0;
    }
    p {
      font-size: 14px;
    }
  }
`


export default Feed
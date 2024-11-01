import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_KEY, value_converter } from '../data'
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {

    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))

  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Recommend>
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>          
        )
      })}

    </Recommend>
  )
}

const Recommend = styled.div`
  flex-basis: 30%;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-basis: 100%;
  }

  .side-video-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    img {
      flex-basis: 49%;
      width: 50%;
    }
    .vid-info {
      flex-basis: 49%;

      h4 {
        font-size: 13px;
        margin-bottom: 5px;
      }
    }
  }
`

export default Recommended
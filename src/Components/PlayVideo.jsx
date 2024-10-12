import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import user_profile from '../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'



const PlayVideo = () => {

  const {videoId} = useParams()

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
  }

  const fetchOtherData = async () => {
    const channelData_url =  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

    // fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId])

  useEffect(() => {
    fetchOtherData()
  }, [apiData])

  return (
    <PlayingVideo>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
      <PlayVideoInfo>
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : '16k'} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : "155"}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </PlayVideoInfo>
      <hr />
      <Publisher>
        <img src={channelData ? channelData.snippet.thumbnails.default.url : user_profile} alt="" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : '16k'} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </Publisher>
      <VidDescription>
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'}</p>
        <p>Subscribe {apiData ? apiData.snippet.channelTitle : ''} to Watch More</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "155"} Comments</h4>
        {commentData.map((item, index) => {

          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>            
          )
        })}


      </VidDescription>
    </PlayingVideo>
  )
}

const PlayingVideo = styled.div`
  flex-basis: 69%;

  iframe {
    width: 100%;
    height: 37vw;
  }
  h3 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 22px;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
  }
`
const PlayVideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 14px;
  color: #5a5a5a;
  
  img {
    width: 20px;
    margin-right: 8px;
  }
  span {
    display: inline-flex;
    align-items: center;
    margin-left: 15px;
  }
`
const Publisher = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  div {
    flex: 1;
    line-height: 18px;

    p {
      color: #000;
      font-weight: 600;
      font-size: 18px;
    } 
    span {
      font-size: 13px;
      color: #5a5a5a;
    }
  }
  img {
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
  button {
    background-color: red;
    color: #fff;
    padding: 8px 30px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;
  }

`
const VidDescription = styled.div`
  padding-left: 55px;
  margin: 15px 0;

  p {
    font-size: 14px;
    margin-bottom: 5px;
    color: #5a5a5a;
  }
  h4 {
    font-size: 14px;
    color: #5a5a5a;
    margin-top: 15px;
  }
  .comment {
    display: flex;
    align-items: flex-start;
    margin: 20px 0;

    img {
      width: 35px;
      border-radius: 50%;
      margin-right: 15px;
    }
    h3 {
      font-size: 14px;
      margin-bottom: 2px;

      span {
        font-size: 12px;
        color: #5a5a5a;
        font-weight: 500;
        margin-left: 8px;
      }
    }
    .comment-action {
      display: flex;
      align-items: center;
      margin: 8px 0;
      font-size: 14px;

      img {
        border-radius: 0;
        width: 20px;
        margin-right: 5px;
      }
      span {
        margin-right: 20px;
        color: #5a5a5a;
      }
    }
  }

`

export default PlayVideo
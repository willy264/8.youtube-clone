import React from 'react'
import styled from 'styled-components'
import PlayVideo from '../Components/PlayVideo'
import Recommended from '../Components/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const { videoId, categoryId } = useParams();

  return (
    <PlayContainer>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </PlayContainer>
  )
}

const PlayContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`

export default Video
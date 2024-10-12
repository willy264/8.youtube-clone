import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <Container className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed category={category} />
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px 2% 20px 17%;

  &.large-container {
    padding-left: 7%;
  }

  @media (max-width: 900px) {
    &.large-container, .container {
    padding-left: 15%;
    padding-right: 5%;
    }
  }
`

export default Home
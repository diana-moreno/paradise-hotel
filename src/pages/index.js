import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from "../components/Layout"
import Header from "../components/Header"
import SEO from "../components/seo"
import HotelImage from '../components/HotelImage'
import HomeContent from '../components/Home'
import useRooms from '../hooks/use-rooms';
import PreviewRoom from '../components/PreviewRoom';
import './styles.css'

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 4rem auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }
`

const IndexPage = () => {
  const rooms = useRooms()

  return (
    <Layout>
      <HotelImage />
      <HomeContent />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our rooms
      </h2>
      <RoomsList>
        {
          rooms.map(room => (
            <PreviewRoom
              key={room.id}
              room={room}
            />
          ))
        }
      </RoomsList>
    </Layout>
  )
}

export default IndexPage

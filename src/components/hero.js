import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import styles from './hero.module.css'

const ShortBio = styled.p`
  font-size: 1em;
  width: 100%;
  max-width: 30em;
  filter: saturate(0.5);
  opacity: 0.5;
  color: #095f88;
`
const Title = styled.p`
  color: #095f88;
`

const StyledImg = styled(Img)`
  display: block;
  height: 200px;
  width: 300px;
  filter: grayscale(); 
  float: right;
  box-shadow: 0 1px 1px rgba(9,95,136,0.12), 
            0 2px 2px rgba(9,95,136,0.12), 
            0 4px 4px rgba(9,95,136,0.12), 
            0 8px 8px rgba(9,95,136,0.12),
            0 16px 16px rgba(9,95,136,0.12);
  @media(max-width: 600px){
    width: 100%;
  }
`
const HeroInfo = styled.div`
  height: 61.8vh;
  max-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5vmin;
  box-sizing: border-box;
  @media(max-width: 600px){
    flex-direction: column;
    display: block;
  }
`

const HeroDetails = styled.div`
  font-size: 14px;
  padding: .33333rem .5rem;
  @media(max-width: 600px){
    margin-top: 2rem;
    padding: 0;
  }
`

export default ({ data }) => (
  <div className={styles.hero}>
    <HeroInfo>
      <HeroDetails>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <Title className={styles.heroTitle}>{data.title}</Title>
        <ShortBio>{data.shortBio.shortBio}</ShortBio>
      </HeroDetails>
      <StyledImg alt="profile image" fluid={data.heroImage.fluid} />
    </HeroInfo>
  </div>
)

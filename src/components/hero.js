import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import styles from './hero.module.css'

const ShortBio = styled.p`
  font-size: 1em;
  width: 30em;
  filter: saturate(0.5);
  opacity: 0.5;
  color: #095f88;
`
const Title = styled.p`
  color: #095f88;
`

const StyledImg = styled(Img)`
  display: block;
  height: 100px;
  width: 100px;
`

export default ({ data }) => (
  <div className={styles.hero}>
    <div
      className={styles.heroArea}
    >
      <div className={styles.heroDetails}>
        <StyledImg alt="profile image" fluid={data.heroImage} />
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <Title className={styles.heroTitle}>{data.title}</Title>
        <ShortBio>{data.shortBio.shortBio}</ShortBio>
      </div>
    </div>
  </div>
)

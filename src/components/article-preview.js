import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import styles from './article-preview.module.css'

const StyledSmall = styled.small`
  display: block;
  font-size: 1em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover{
    color: black;
    }
  }
`

const ArticleTitle = styled.h3`
  color: #095f88;
  margin-bottom:0;
`

export default ({ article }) => (
  <div className={styles.preview}>
    <StyledLink to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <ArticleTitle className={styles.previewTitle}>
        {article.title}
      </ArticleTitle>
    </StyledLink>
    <StyledSmall >{article.publishDate}</StyledSmall>
    {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
)

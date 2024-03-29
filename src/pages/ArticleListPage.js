import React from 'react'
import ArticleContent from './ArticleContent'
// import ArticlePage from './ArticlePage'
// import { computeHeadingLevel } from '@testing-library/react'
// import { Link } from 'react-router-dom'
import ArticleList from '../components/ArticleList'
function ArticleListPage() {
  return (
    <>
    <h1>ArticleListPage</h1>
    {
       <ArticleList ArticleContent={ArticleContent}/>
    }

    </>
  )
}

export default ArticleListPage
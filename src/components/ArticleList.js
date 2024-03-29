import { Link } from "react-router-dom";
const ArticleList = ({ArticleContent})=>{

    return (
        <>

        {
            ArticleContent.map(article=>(
            <>

           <Link key={article.title}className="article-list-item" to={`/articles/${article.name}`}
           >
           
            <h3>{article.name}</h3>
          
           </Link>
            <p>{article.content[0].substring(0,300)}...</p>
            </>
        )) 
        }
        </>
    )
}

export default ArticleList;
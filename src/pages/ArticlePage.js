import React from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "./ArticleContent";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import useUser from "../hooks/useUser";
import axios from 'axios'
import { toast } from "react-toastify";
import CommentList from "../components/CommentList";
import AddCommentForm from "../components/AddCommentForm";
import { Link } from "react-router-dom";

function ArticlePage() {
  const [articleInfo, setArticleInfo] = useState();
  const[comment,setcomment]=useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const{user}=useUser();
  const { articlesId } = useParams();
  
  useEffect(() => {
    var loadArticleInfo=async()=>{
  
      const result=await axios.get(`http://localhost:8000/api/articles/${articlesId}`)
      if(result.status===200){
        const newArticleInfo = result.data;
        console.log(newArticleInfo.data)
        setArticleInfo(newArticleInfo.data);
  
      }
      if(result.status===404)
          console.log("Article Not found")
  
    }

    const loadCommment=async()=>{
      const result=await axios.get(`http://localhost:8000/api/articlescomment/${articlesId}`)
      if(result.status===200){
        console.log(result.data.data);
        setcomment(result.data.data);
        console.log("COmments ",comment)
      }
    }

    loadArticleInfo();
    loadCommment();
  
    },[]);

  const artical = ArticleContent.find((article) => article.name === articlesId);

  if (artical === undefined) {
    return <NotFoundPage />;
  }
const  upvoteArticle=async(currarticlesId)=>{
    const result=await axios.put(`http://localhost:8000/api/articles/${currarticlesId}/upvote`)

    if(result.status===200){
        toast.success("Article Upvoted Succefully");;
    }
    // loadArticleInfo();
    setIsButtonDisabled(true);
}

  return (
    <div>
      <h1>{articlesId} </h1>
      {articleInfo &&
        <p>This article has {articleInfo} 👍 Upvotes</p>
      }
      <div className="upvotes-section">

      {user ?
        <button  onClick={()=>{upvoteArticle(articlesId)} } disabled={isButtonDisabled}>Upvote</button>
        :
        <Link to="/login">Login in to upvote</Link>
      }
      </div>
      
      {artical?.content?.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ?
      <AddCommentForm articleName={articlesId}/>
      :
      <div className="upvotes-section">

      <Link  to="/login">Login in to upvote</Link>
      </div>
      }
      {comment.length > 0 && <CommentList comments={comment} />}
    </div>
  );
}

export default ArticlePage;

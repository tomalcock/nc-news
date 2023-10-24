import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import * as API from './API';

export default function IndividualArticle() {

    const [currentArticle, setArticle] = useState('');

    const [ isLoading, setIsLoading ] = useState(true)

    const { article_id } = useParams();

    useEffect(() => {
        API.getSingleArticle(article_id).then(({ article }) => {
            setArticle(article);
            setIsLoading(false);  
        });
        },[]);

    return isLoading ? (
        <p>Loading...</p>
        ) : (
        <div key={`individual article ${currentArticle.title}`}>
            <h2>{currentArticle.title}</h2>
            <img className='article-image' src={currentArticle.article_img_url} alt="lives above the body and describes the article" />
            <p>{currentArticle.body}</p>
            <p>Number of comments: {currentArticle.comment_count}</p>
            <Link to={`/articles/${article_id}/comments`}>View Comments</Link >
        </div>
    )
}
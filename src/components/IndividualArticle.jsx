import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import * as API from './API';
import * as utils from '../utils/utils';
import Voting from './Voting';
import Comments from './Comments';

export default function IndividualArticle() {

    const [currentArticle, setArticle] = useState('');

    const [ isLoading, setIsLoading ] = useState(true);

    const [ seeCurrentComments, setSeeComments ] = useState(false);

    const [ currentVotes, setVotes ] = useState(0)

    const { article_id } = useParams();

    useEffect(() => {
        API.getSingleArticle(article_id).then(({ article }) => {
            setArticle(article);
            setIsLoading(false);
            setVotes(article.votes)  
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
            <p>Created: {utils.createdAt(currentArticle.created_at)}</p>
            <p>Number of votes: {currentVotes}</p>
            <Voting currentVotes={currentVotes} setVotes={setVotes}/>
            <Comments article_id={currentArticle.article_id} seeCurrentComments={seeCurrentComments} setSeeComments={setSeeComments} />
        </div>
    )
}
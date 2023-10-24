import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from './API';
import * as utils from '../utils/utils';

export default function CommentsPage() {

    const [ isLoading, setIsLoading ] = useState(true);

    const [ currentComments, setComments ] = useState([]);

    const { article_id } = useParams();

    useEffect(() => {
        API.getComments(article_id).then(({ comments }) => {
            console.log(comments)
            setComments(comments);
            setIsLoading(false);  
        });
        },[]);


    return isLoading ? (
        <p>Loading...</p>
        ) : (
            <div className="all-comments">
            <h2>All Comments</h2>
            <Link to={`/articles/${article_id}`}>Back to article</Link >
        <ul>
            {currentComments.map((comment) => {
                return <li key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>Created: {utils.createdAt(comment.created_at)}</p>
                    <p>Votes: {comment.votes}</p>
                </li>
            })}
        </ul>
        </div>
        )
}
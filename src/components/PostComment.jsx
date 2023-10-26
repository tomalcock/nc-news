import { useState } from 'react';
import * as API from './API';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from './contexts/UserContext';
import * as utils from '../utils/utils';


export default function PostComment() {
    const [ showNewComment, setNewComment ] = useState(true);
    const [ inputComment, setInputComment ] = useState('');
    const [ commentSubmitted, setCommentSubmitted ] = useState(true);
    const [ commentBack, setCommentBack ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);
    const [ error, setError ] = useState(null);
    const { article_id } = useParams();
    const { currentUser } = useContext(UserContext);

    const handleClick = () => {
        if(showNewComment) {
        setNewComment(false)
        }
        else {
            setNewComment(true)
        }
    }

    const handleSubmit = (e) => {
        if(disabled) {
            return
        }
        else {
            setDisabled(true)
            e.preventDefault();
            setIsLoading(true)
            API.postComment(article_id, inputComment, currentUser)
            .then(({comment}) => {
                console.log(comment)
            setInputComment('')
            setIsLoading(false)
            setCommentSubmitted(false);
            setCommentBack(comment);
        })
        .catch((err) => {
            setError(true);
        })
        }
    }
    
    return (
        <div className='post-comment'>
            {showNewComment && <button onClick={handleClick}>Post Comment</button>}
            {!showNewComment && 
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                id="comment-input"
                aria-label="input-field"
                disabled={disabled}
                value={inputComment}
                placeholder="Write comment here"
                onChange={(event) => {
                    const value = event.target.value
                    setInputComment(value)
                }}
                />
                <button>Submit Comment</button>
            </form>
            }
            {isLoading && !error && <p>Loading ...</p>}
            {error && <p>Sorry, there was a problem connecting. Try refreshing the page</p>}
            {!commentSubmitted && <p>Comment Submitted!</p>}
            {commentBack && 
            <li className="comment-card"> 
                <p>{commentBack.body}</p>
                <p>Author: {commentBack.author}</p>
                <p>Created: {utils.createdAt(commentBack.created_at)}</p>
                <p>Votes: {commentBack.votes}</p>
            </li>}
        </div>
    )
}

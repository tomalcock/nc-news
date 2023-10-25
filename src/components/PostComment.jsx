import { useState } from 'react';
import * as API from './API';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from './contexts/UserContext';
import * as utils from '../utils/utils';


export default function PostComment() {
    const [ showNewComment, setNewComment ] = useState(true)
    const [ inputComment, setInputComment ] = useState('')
    const [ commentSubmitted, setCommentSubmitted ] = useState(true)
    const [ commentBack, setCommentBack ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)
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
        e.preventDefault();
        setIsLoading(false)
        API.postComment(article_id, inputComment, currentUser)
        .then(({comment}) => {
            setIsLoading(true)
            setCommentSubmitted(false);
            setCommentBack(comment);
        })
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
            {!isLoading && <p>Loading ...</p>}
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

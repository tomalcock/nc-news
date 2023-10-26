import { useState } from 'react';
import * as API from './API';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from './contexts/UserContext';
import * as utils from '../utils/utils';
import DeleteComment from './DeleteComment';


export default function PostComment({deleteButtonClicked, setDeleteButtonClicked, currentComments, setComments, isAlertVisable, setIsAlertVisable}) {

    const [ showNewComment, setNewComment ] = useState(true);
    const [ inputComment, setInputComment ] = useState('');
    const [ commentSubmitted, setCommentSubmitted ] = useState(false);
    const [ commentBack, setCommentBack ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);
    const [ error, setError ] = useState(null);
    const [inputEmpty, setInputEmpty ] = useState(false)
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
        console.log(inputComment.length)
        if(inputComment.length === 0) {
            setInputEmpty(true)
            e.preventDefault();
            setTimeout(() => {
                setInputEmpty(false)
            }, 3000)
        }
        else if(disabled) {
            return
        }
        
        else {
            setIsAlertVisable(true)

            setTimeout(() => {
                setIsAlertVisable(false)
            }, 3000)
            setDisabled(true)
            e.preventDefault();
            setIsLoading(true)
            API.postComment(article_id, inputComment, currentUser)
            .then(({comment}) => {
            setInputComment('')
            setIsLoading(false)
            setCommentSubmitted(true);
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
                <button onClick={()=> setDeleteButtonClicked(false)}>Submit Comment</button>
            </form>
            }
            {inputEmpty && <p>Make sure to type a comment!</p>}
            {isLoading && !error && !deleteButtonClicked && <p>Loading ...</p>}
            {error && <p>Sorry, there was a problem connecting. Try refreshing the page</p>}
            {commentSubmitted && !deleteButtonClicked && isAlertVisable && <p>Comment Submitted!</p>}
            {commentBack && !deleteButtonClicked &&
            <li className="comment-card"> 
                <p>{commentBack.body}</p>
                <p>Author: {commentBack.author}</p>
                <p>Created: {utils.createdAt(commentBack.created_at)}</p>
                <p>Votes: {commentBack.votes}</p>
                <DeleteComment deleteButtonClicked={deleteButtonClicked} setDeleteButtonClicked={setDeleteButtonClicked} comment_id={commentBack.comment_id} article_id={article_id} currentComments={currentComments} setComments={setComments} setDisabled={setDisabled} setIsAlertVisable={setIsAlertVisable}/>
            </li>}
            {deleteButtonClicked && !isLoading && isAlertVisable && <p>Comment deleted!</p>}
            {deleteButtonClicked && null}
        </div>
    )
}


// Sort out not being able to post unless you've typed a body!!!!!!!

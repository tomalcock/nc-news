import { useEffect, useState } from 'react';
import * as API from './API';
import * as utils from '../utils/utils';
import PostComment from './PostComment';


export default function Comments({article_id, seeCurrentComments, setSeeComments}) {

    const [ isLoading, setIsLoading ] = useState(true);

    const [ currentComments, setComments ] = useState([]);

    const [ buttonClicked, setButtonClicked ] = useState(true);

    const [ currentState, setState ] = useState('Show')

    const handleClick = () => {
        
        if(buttonClicked) {
                setButtonClicked(false);
                setIsLoading(true)
            API.getComments(article_id).then(({ comments }) => {
                setComments(comments);
                setIsLoading(false);
                setSeeComments(true);
                setState('Hide');
            })
        } 
        else {
        setButtonClicked(true)
        setState('Show')

        }
    }


    return (
        <div>

            <button className='show-comments-button' onClick={handleClick}>{currentState} Comments</button> 

            {isLoading && !buttonClicked && <p>Loading ...</p>}

            {currentState==='Hide' && seeCurrentComments && !isLoading &&
                <div className="all-comments"> 

                    <h2>All Comments</h2>
                    
                    <PostComment />

                    <ul>
                        {currentComments.map((comment) => {
                    return <li className="comment-card"key={comment.comment_id}>
                            <p>{comment.body}</p>
                            <p>Author: {comment.author}</p>
                            <p>Created: {utils.createdAt(comment.created_at)}</p>
                            <p>Votes: {comment.votes}</p>
                            </li>
                        })}
                    </ul>

                </div>
            }

        </div>
    )
}
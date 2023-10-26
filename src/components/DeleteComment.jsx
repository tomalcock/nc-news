import { useState } from 'react';
import * as API from './API';

export default function DeleteComment({deleteButtonClicked, setDeleteButtonClicked, comment_id, article_id, currentComments, setComments, setDisabled, setIsAlertVisable}) {

    const [ isLoading, setisLoading ] = useState(false);

    const [ isDeleted, setIsDeleted ] = useState(false);

    const clickHandler = () => {
        setDeleteButtonClicked(true);
        setisLoading(true);
        setIsAlertVisable(true);
        setTimeout(() => {
            setIsAlertVisable(false)
        },3000);
        API.deleteComment(comment_id)
        .then(() => {
            setIsDeleted(true)
            setDisabled(false)
            return API.getComments(article_id)
        })
        .then(({comments}) => {
            setisLoading(false)
            setComments(comments)
        })
    }
    return (
        <div>
            {isLoading && <p>Loading ...</p>}
            <button onClick={clickHandler}>Delete Comment</button>
        </div>
    )
}

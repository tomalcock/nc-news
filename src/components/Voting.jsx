import * as API from './API';
import { useState } from 'react';
import { useParams } from 'react-router';


export default function Voting({currentVotes, setVotes}) {

    const { article_id } = useParams();

    const [ clickedVote, setClickedVote] = useState(true)

    const [ voteButton, setVoteButton ] = useState('Vote')

    const handleClick = () => {
        if(clickedVote) {
        setVotes(currentVotes => currentVotes + 1)
        setClickedVote(false)
        setVoteButton('Remove Vote')
        if(!article_id) {
            API.patchVote(1,1)
        } else{
            API.patchVote(article_id,1)
        } 
    } else {
        setVotes(currentVotes => currentVotes - 1)
        setClickedVote(true)
        setVoteButton('Vote')
        if(!article_id) {
            API.patchVote(1,-1)
        } else {
            API.patchVote(article_id,-1)
        }  
    }
    }

return <button className='vote-button' onClick={handleClick}>{voteButton}</button>;

}

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
        API.patchVote(article_id,1)
        .then(({updatedArticle}) => {
            {console.log(updatedArticle.votes)}
        })
    } else {
        setVotes(currentVotes => currentVotes - 1)
        setClickedVote(true)
        setVoteButton('Vote')
        API.patchVote(article_id,-1)
        .then(({updatedArticle}) => {
            {console.log(updatedArticle.votes)}
        })
    }
    }

return <button className='vote-button' onClick={handleClick}>{voteButton}</button>;

}

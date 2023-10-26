import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as API from './API';

export default function SortByBar({path, articlesList, setArticlesList}) {

    const [ sortByClicked, setSortByClicked ] = useState(false)

    const [ sortBy, setSortBy ] = useState('')

    const [ isLoading, setIsLoading ] = useState(false);

    const [ dateButtonClicked, setDateButtonClicked ] = useState(false);

    const [ commentButtonClicked, setCommentButtonClicked ] = useState(false);

    const [ votesButtonClicked, setVotesButtonClicked ] = useState(false);

    const navigate = useNavigate()

    const handleClickDate = () => {
        setCommentButtonClicked(false);
        setVotesButtonClicked(false);
        setDateButtonClicked(true);
        setIsLoading(true);
        setSortByClicked(true);
        setSortBy('created_at');
        navigate(`/${path}?sort_by=created_at`);
        API.getArticlesUsingQuery('created_at','')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })

    }

    const handleClickComment = () => {
        setCommentButtonClicked(true);
        setVotesButtonClicked(false);
        setDateButtonClicked(false);
        setIsLoading(true)
        setSortByClicked(true);
        setSortBy('comment_count');
        navigate(`/${path}?sort_by=comment_count`);
        API.getArticlesUsingQuery('comment_count','')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
    }

    const handleClickVotes = () => {
        setCommentButtonClicked(false);
        setVotesButtonClicked(true);
        setDateButtonClicked(false);
        setSortByClicked(true);
        setSortBy('votes');
        navigate(`/${path}?sort_by=votes`)
        API.getArticlesUsingQuery('votes','')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
    }

    const handleClickAsc = () => {
        setIsLoading(true)
        if(sortBy === 'created_at') {
            navigate(`/${path}?sort_by=created_at&direction=ascending`)
            API.getArticlesUsingQuery('created_at','ascending')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
            
        }
        if(sortBy === 'comment_count') {
            navigate(`/${path}?sort_by=comment_count&direction=ascending`)
            API.getArticlesUsingQuery('comment_count','ascending')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
        }
        if(sortBy === 'votes') {
            navigate(`/${path}?sort_by=votes&direction=ascending`)
            API.getArticlesUsingQuery('votes','ascending')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
        }
    }

    const handleClickDesc = () => {
        setIsLoading(true)
        if(sortBy === 'created_at') {
            navigate(`/${path}?sort_by=date&direction=descending`)
            API.getArticlesUsingQuery('created_at','descending')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
        }
        if(sortBy === 'comment_count') {
            navigate(`/${path}?sort_by=comment_count&direction=descending`)
            API.getArticlesUsingQuery('comment_count','descending')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
        }
        if(sortBy === 'votes') {
            navigate(`/${path}?sort_by=votes&direction=descending`)
            API.getArticlesUsingQuery('votes','descending')
            .then(({articles}) => {
            setIsLoading(false)
            setArticlesList(articles);
        })
        }
    }

    return (
        <div>
        <div id="sortby-bar">
            <p id="sortby-bar-title">Sort by</p>
            <button className={`date-${dateButtonClicked}`} onClick={handleClickDate}>Date</button>
            <button className={`comment-count-${commentButtonClicked}`} onClick={handleClickComment}>Comment Count</button>
            <button className={`votes-${votesButtonClicked}`} onClick={handleClickVotes}>Votes</button>
        </div>
        {sortByClicked &&
        <div id="orderby-bar">
            <button onClick={handleClickAsc}> ascending</button>
            <button onClick={handleClickDesc}> descending</button>
        </div>}
        {isLoading && <p>Loading ...</p>}
        </div>
    )
}
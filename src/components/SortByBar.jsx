import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as API from './API';

export default function SortByBar(props) {

    const { path } = props

    const [ sortByClicked, setSortByClicked ] = useState(false)

    const [ sortBy, setSortBy ] = useState('')

    const [ orderBy, setOrderBy ] = useState('')

    const navigate = useNavigate()

    const handleClickDate = () => {
        setSortByClicked(true);
        setSortBy('date');
        navigate(`/${path}?sort_by=date`);
    }

    const handleClickComment = () => {
        setSortByClicked(true);
        setSortBy('comment_count');
        navigate(`/${path}?sort_by=comment_count`);
    }

    const handleClickVotes = () => {
        setSortByClicked(true);
        setSortBy('votes');
        navigate(`/${path}?sort_by=votes`)
    }

    const handleClickAsc = () => {
        setOrderBy('ascending');
        if(sortBy === 'date') {
            navigate(`/${path}sort_by=date&direction=ascending`)
        }
        if(sortBy === 'comment_count') {
            navigate(`/${path}?sort_by=comment_count&direction=ascending`)
        }
        if(sortBy === 'votes') {
            navigate(`/${path}?sort_by=votes&direction=ascending`)
        }
    }

    const handleClickDesc = () => {
        setOrderBy('descending');
        if(sortBy === 'date') {
            navigate(`/${path}?sort_by=date&direction=descending`)
        }
        if(sortBy === 'comment_count') {
            navigate(`/${path}?sort_by=comment_count&direction=descending`)
        }
        if(sortBy === 'votes') {
            navigate(`/${path}?sort_by=votes&direction=descending`)
        }
    }

    return (
        <div>
        <div id="sortby-bar">
            <p id="sortby-bar-title">Sort by</p>
            <button onClick={handleClickDate}>Date</button>
            <button onClick={handleClickComment}>Comment Count</button>
            <button onClick={handleClickVotes}>Votes</button>
        </div>
        {sortByClicked &&
        <div id="orderby-bar">
            <button onClick={handleClickAsc}> ascending</button>
            <button onClick={handleClickDesc}> descending</button>
        </div>}
        </div>
    )
}
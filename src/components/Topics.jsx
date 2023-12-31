import { useEffect, useState } from 'react';
import * as API from './API';
import { Link } from 'react-router-dom';
import SearchTopicsBar from './SearchTopicsBar'

export default function Topics() {

    const [ currentTopics, setTopics ] = useState([])

    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        API.getAllArticles().then(({ articles }) => {
            const topics = articles.map((article)=>(article.topic))
            const noRepeats = topics.filter((item,index) => topics.indexOf(item)===index);
            setTopics(noRepeats)
            setIsLoading(false)
        })
        },[]
    );

    return isLoading ? (
        <p>Loading...</p>
        ) : (
        <div className="topics-list">
            <SearchTopicsBar />
            <h2>All Topics</h2>
            <ul>
                {currentTopics.map((topic) => {
                    return (
                    <Link  key={topic} to={`/topics/${topic}`}>
                    <li className='topic-heading' key={topic}>
                        <p className='topic-name'>{topic}</p>
                    </li>
                    </Link>
                )})}
            </ul>
        </div>
    )
}
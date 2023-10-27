import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import * as API from './API';
import * as utils from '../utils/utils';
import SortByBar from './SortByBar';

export default function AllArticlesPage() {

    const [ articlesList, setArticlesList ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(true);


    useEffect(() => {
        API.getAllArticles().then(({ articles }) => {
            setArticlesList(articles);
            setIsLoading(false)
        });
        },[]
    );

    return isLoading ? (
        <p>Loading...</p>
        ) : (
        <div className="all-articles">
            <h2>All Articles</h2>
            <SortByBar path={'allarticles'} articlesList={articlesList} setArticlesList={setArticlesList}/>
            <ul>
                {articlesList.map((article) => {
                    return <li className='article-card-from-list'key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                        <p>{article.title}</p>
                        <img className='article-image' src={article.article_img_url} alt="lives below the title of the article and describes the article" />
                        <h4>Topic: {article.topic}</h4>
                        <p>Comment Count: {article.comment_count}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Created: {utils.createdAt(article.created_at)}</p>
                        </Link >
                    </li>
                })}
            </ul>
        </div>
    )
}
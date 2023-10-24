import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import * as API from './API';
import * as utils from '../utils/utils';
import Comments from './Comments';

export default function AllArticlesPage() {

    const [ articlesList, setArticlesList ] = useState([]);

    const [ seeCurrentComments, setSeeComments ] = useState(false);

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
            <ul>
                {articlesList.map((article) => {
                    return <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>{article.title}</Link >
                        <img className='article-image' src={article.article_img_url} alt="lives below the title of the article and describes the article" />
                        <h4>Topic: {article.topic}</h4>
                        <p>Created: {utils.createdAt(article.created_at)}</p>
                        <Comments article_id={article.article_id} seeCurrentComments={seeCurrentComments} setSeeComments={setSeeComments} />
                    </li>
                })}
            </ul>
        </div>
    )
}
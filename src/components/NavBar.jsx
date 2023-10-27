import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from './contexts/UserContext';

export default function NavBar() {

    const { currentUser, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleClick = () => {
        setUser(null)
        navigate(`/`)
    }

    return (
        <nav>
            <Link to='/allarticles'>All Articles</Link>
            <Link to='/alltopics'>Topics</Link>
            {!currentUser && <Link to='/signin'>Sign In</Link>}
            {currentUser && <div className='account-nav'>
                <Link to={`/account/${currentUser}`}>Account</Link>
                <button onClick={handleClick}>Sign Out</button>
            </div>
            }
        </nav>
    )
}
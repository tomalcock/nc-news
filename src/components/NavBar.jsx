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
            <Link className='nav-a'to='/allarticles'>All Articles</Link>
            <Link className='nav-a'to='/alltopics'>Topics</Link>
            {!currentUser && <Link className='nav-a'to='/signin'>Sign In</Link>}
            {currentUser && <div className='account-nav'>
            <Link className='nav-a'to={`/account/${currentUser}`}>Account</Link>
            <button className='nav-a signout-button' onClick={handleClick}>Sign Out</button>
            </div>
            }
        </nav>
        
    )
}
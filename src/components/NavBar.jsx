import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to='/allarticles'>All Articles</Link>
            <Link to='/alltopics'>Topics</Link>
        </nav>
    )
}
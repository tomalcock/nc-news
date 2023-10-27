import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from './API';
import { UserContext } from './contexts/UserContext';

export default function SignIn() {

    const [ inputUsername, setInputUsername ] = useState('');

    const [ isAUser, setIsAUser ] = useState(true);

    const [ isError, setIsError ] = useState(false)

    const { currentUser, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(e);
        API.getUser(inputUsername)
        .then(() => {
            setUser(inputUsername)
            navigate(`/account/${inputUsername}`)
        })
        .catch((err) => {
            setIsAUser(false)
        })
    }

    if(isError) return <p>This User does not exist</p>


    return (
        <div>
        <form id="user-form-with-button" onSubmit={handleSubmit}>
            <div id="user-form">
            <label htmlFor="username-field">Username</label>
            <input 
            type="text"
            id="username-field"
            aria-label="input-field"
            value={inputUsername}
            placeholder="type username"
            onChange={(event) => {
                const value = event.target.value;
                setInputUsername(value)
            }} 
            />
            <label htmlFor="password-field">Password</label>
            <input 
            type="text"
            id="password-field"
            disabled={true}
            aria-label="input-field"
            placeholder="type password" 
            />
            </div>
            <button>Sign In</button>
        </form>
        {!isAUser && <p>User Does Not Exist</p>}
         <h4>Accepted Usernames</h4>
         <p>tickle122</p>
         <p>grumpy19</p>
         <p>happyamy2016</p>
         <p>cooljmessy</p>
         <p>weegembump</p>
         <p>Gemma Bump</p>
         <p>jessjelly</p>
         </div>
    )
}
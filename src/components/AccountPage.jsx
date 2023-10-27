import { useContext } from 'react'
import { UserContext } from './contexts/UserContext';


export default function AccountPage() {

    const { currentUser, setUser } = useContext(UserContext);


    return <h2>Welcome {currentUser} </h2>;
}
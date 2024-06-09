import { useParams } from 'react-router-dom';
import './Profile.css';

export const Profile = () => {
    let { user } = useParams()

    return (
        <main className='profile'>
            <h1>Made By <strong><em>{user}</em></strong></h1>
        </main>
    )
}

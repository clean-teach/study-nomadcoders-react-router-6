import { users } from '../db';
import {Link, useSearchParams} from 'react-router-dom';

function Home() {
    const [readSearchParams, setSearchParams] = useSearchParams();

    setTimeout(() => {
        setSearchParams({
            day: 'today',
            tomorrow: '123',
        });
        // console.log(readSearchParams.get('day'));
        // console.log(readSearchParams.has('day'));
    }, 2000);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Home;
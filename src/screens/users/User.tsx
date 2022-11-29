import {useParams} from 'react-router-dom';
import { users } from '../../db';

function User() {
    const params = useParams();
    console.log(params.userId)
    return (
        <>
            <h1>{users[Number(params.userId)-1].name}</h1>
            <p>User with id {params.userId} is named: {users[Number(params.userId)-1].name}</p>
        </>
    );
}

export default User;
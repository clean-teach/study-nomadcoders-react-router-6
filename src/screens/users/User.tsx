import { useParams, Link, Outlet, useOutletContext } from 'react-router-dom';
import { users } from '../../db';

function User() {
    console.log(useOutletContext());

    const params = useParams();
    const currentUser = users[Number(params.userId)-1].name;
    return (
        <>
            <h1>{currentUser}</h1>
            <p>User with id {params.userId} is named: {currentUser}</p>
            <hr />
            <Link to='followers'>See followers</Link>
            <Outlet context={{
                nameOfMyUser : currentUser
            }} />
        </>
    );
}

export default User;
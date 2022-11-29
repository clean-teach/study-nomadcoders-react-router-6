import { useOutletContext } from 'react-router-dom';

interface IFollowsContext {
    nameOfMyUser: String
}

function Followers() {
    const {nameOfMyUser} = useOutletContext<IFollowsContext>();

    return (
        <h1>Here are "{nameOfMyUser}"의 followers</h1>
    );
}

export default Followers;
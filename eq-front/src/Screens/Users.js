import { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';



export function UsersScreen() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`/users`)
        .then(({data}) => setUsers(data))
        .catch((err) => {console.log(err)})
    }, [])




    if (!users.length) return null

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={`user_item_${index}`}>
                        <Link to={`/users/${user.id}`} >
                            {user.firstname}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}
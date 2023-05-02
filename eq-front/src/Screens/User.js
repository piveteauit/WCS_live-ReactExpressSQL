import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';

export function UserScreen() {
    const {user_id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`/users/${user_id}`)
        .then(({data}) => setUser(data[0]))
        .catch((err) => {console.log(err)})
    }, [user_id])




    if (!user) return null

    return (
        <div>
            
            <p>
                {user.firstname}
            </p>
            <p>
                {user.email}
            </p>
        
        </div>
    )

}
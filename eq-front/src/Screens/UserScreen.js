import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PasswordInput } from '../Components';

import axios from 'axios';

export function UserScreen() {
    const {user_id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`/users/${user_id}`)
        .then(({data}) => {
            console.log(data)
            const fullname = `${data.firstname} ${data.lastname.toUpperCase()}`;
            // data.fullname = fullname
            // setUser(data)
            setUser({
                ...data,
                fullname
            })
        })
        .catch((err) => {console.log(err)})
    }, [user_id])




    if (!user) return null


    // Afficher toutes les informations de l'utilisateur:
            // firstname, lastname, email, city, language
            // Les champs city et language doivent être modifiable
    return (
        <div>
            <p>
                {user.fullname}
            </p>
            <p>
                {user.email}
            </p>
        

            <PasswordInput {...user} />

        </div>
    )

}
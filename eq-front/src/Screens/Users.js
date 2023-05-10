import { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { UserCard } from '../Components/UserCard';


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

                {
                    users.map((user) => {
                        return <UserCard {...user}  key={`user_${user.id}`} />
                    })
                }

                {/* 
                    Afficher les utilisateurs avec une carte plus détaillé: 
                            UserCard (firsname, lastname, email) 
                            et lorsqu'on clique dessus on se rend sur l'écran d'un seul utilisateur 
                */}
            </ul>
        </div>
    )

}
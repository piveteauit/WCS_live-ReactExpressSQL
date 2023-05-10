import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function UserCard ({id, firstname, lastname, email}) {
    const [deleted, setDeleted] = useState(false);

    const deleteUser = async () => {
        const confirmation = window.confirm(
            `Sur de sup : ${firstname} ${lastname} ????`
        )

        if (!confirmation) return;

        console.log('Requesting')
        try {
            await axios.delete(`/users/${id}`);            
            setDeleted(true)
            console.log('Requested FINISH')            

        } catch (error) {
            alert("Une erreur")
        }

        console.log('Ok cest top')



    }

    return (
        <div style={{margin: 10, background: deleted ? 'rgba(255, 100, 100, 0.3)' : 'rgba(100, 100, 100, 0.1)'}}>
            <span> {firstname} {lastname} </span>
            <Link to={`users/${id}`}>
                {email}
            </Link>


            <button onClick={deleteUser}>DELETE user: {firstname} {lastname} </button>

        </div>
    )
}
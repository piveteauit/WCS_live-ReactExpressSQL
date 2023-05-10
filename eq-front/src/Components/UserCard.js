import { Link } from "react-router-dom";

export function UserCard ({id, firstname, lastname, email}) {
    return (
        <div>
            <span> {firstname} {lastname} </span>
            <Link to={`users/${id}`}>
                {email}
            </Link>
            <span></span>
        </div>
    )
}
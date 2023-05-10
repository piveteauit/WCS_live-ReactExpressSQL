import axios from "axios";
import { useState } from "react";

export function PasswordInput({id, password}) {
    const [passwordInput, setPasswordInput] = useState("")
    const [status, setStatus] = useState(""); // "SUCCESS" || "ERROR"


    if (password) return null;


    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value)
    }

    const handleSubmit = () => {
        console.log(passwordInput)
        axios.put(`/users/${id}`, {
            password: passwordInput
        })
        .then((response) => {
            setStatus("SUCCESS")
        })
        .catch((err) => {
            console.error(err)
            setStatus("ERROR")
        })
        .finally(() => {
            setTimeout(() => setStatus(""), 2_000)
        })
    }

    return (
        <>
            <label> Password: </label>
            <input type="password" onChange={handlePasswordChange} />

            <button disabled={!passwordInput} onClick={handleSubmit}>
                Valider
            </button>


            {status === "ERROR" && <div> Badluck </div>}
            {status === "SUCCESS" && <div> Nice </div>}



        </>

    )


}
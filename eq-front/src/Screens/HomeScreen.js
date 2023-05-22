import { createUser } from "../Api";
import "./HomeScreen.css";

export function HomeScreen () {
    // Fields: firstname, lastname, email, password, city, language


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const [firstname, lastname, email, password, city, language] = e.target;
        
        createUser({
            firstname: firstname.value,
            lastname: lastname.value, 

            email: email.value,
            password: password.value,
            
            city: city.value,
            language: language.value

        })
        .then(console.log)
        .catch(console.log)
    }

    return (
        <div>
            
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <div className="form-input">
                        <label htmlFor="input_firstname">
                            Firstname 
                        </label>
                        <input required name="input_firstname" id="input_firstname" type="text" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="input_lastname">
                            Lastname 
                        </label>
                        <input required name="input_lastname" id="input_lastname" type="text" />
                    </div>
                </div>
                

                <div className="form-group">
                    <div className="form-input">
                        <label htmlFor="input_email">
                            Email 
                        </label>
                        <input required name="input_email" id="input_email" type="email" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="input_password">
                            Password 
                        </label>
                        <input name="input_password" id="input_password" type="password" />
                    </div>

                </div>

                <div className="form-group">
                    <div className="form-input">
                        <label htmlFor="input_city">
                            City 
                        </label>
                        <input  name="input_city" id="input_city" type="text" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="input_language">
                            Language 
                        </label>
                        <input name="input_language" id="input_language" type="text" />
                    </div>

                </div>
                

            <input type={"submit"} value={`VALIDER`} />

            </form>
        </div>
    )
}
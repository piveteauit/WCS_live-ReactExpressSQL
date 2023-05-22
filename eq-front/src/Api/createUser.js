import axios from "axios";

/**
 * 
 * @param {*} payload : {firstname, lastname, email, password, city, language}
 * 
 */

export function createUser(payload) {
    return axios.post('/users', payload)
}
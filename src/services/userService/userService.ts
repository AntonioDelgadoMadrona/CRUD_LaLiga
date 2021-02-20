// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';


// GET USER LIST
export async function getUserList() {

    const requestOptions = {
        method: 'GET',
    };

    return await fetch(`https://reqres.in/api/users`, requestOptions).then(handleResponse, handleError);
};
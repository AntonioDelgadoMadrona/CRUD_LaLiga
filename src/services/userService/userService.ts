// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';


// GET USER LIST
export async function getUserList(data: any) {

    const requestOptions = {
        method: 'GET',
    };

    return await fetch(`https://reqres.in/api/users?page=${data.currentPage}`, requestOptions).then(handleResponse, handleError);
};
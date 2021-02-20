// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';


// GET USER LIST
export async function getUserList(data: any) {

    const requestOptions = {
        method: 'GET',
    };

    return await fetch(`https://reqres.in/api/users?page=${data.currentPage}`, requestOptions).then(handleResponse, handleError);
};

// GET AN USER BY ID
export async function getUserDetails(id: string) {

    const requestOptions = {
        method: 'GET',
    };

    return await fetch(`https://reqres.in/api/users/${id}`, requestOptions).then(handleResponse, handleError);
};
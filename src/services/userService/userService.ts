// TYPES
import { IUser } from '../../interfaces/IUser';

// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';


// GET USER LIST
export async function getUserList(data: any) {

    const requestOptions = {
        method: 'GET',
    };

    return await fetch(`https://reqres.in/api/users?delay=1&page=${data.currentPage}`, requestOptions).then(handleResponse, handleError);
};

// GET AN USER BY ID
export async function getUserDetails(id: string) {

    const requestOptions = {
        method: 'GET',
    };

    return await fetch(`https://reqres.in/api/users/${id}?delay=1`, requestOptions).then(handleResponse, handleError);
};

// DELETE AN USER BY ID
export async function deleteUser(id: string) {

    const requestOptions = {
        method: 'DELETE',
    };

    return await fetch(`https://reqres.in/api/users/${id}?delay=1`, requestOptions).then(handleResponse, handleError);
};

// UPDATE AN USER
export async function updateUser(user: IUser) {

    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(user)
    };

    return await fetch(`https://reqres.in/api/users/${user.id}?delay=1`, requestOptions).then(handleResponse, handleError);
};

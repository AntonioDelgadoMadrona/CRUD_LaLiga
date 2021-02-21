
// THIS METHOD IS RESONSIBLE FOR HANDLING THE API RESPONSE
export async function handleResponse(response: any) {

    if (response.status === 200) return response.json();

    if(response.status === 204) return "El usuario fue eliminado";

    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    };

    // NOT AUTHORIZED
    if (response.status === 401) {

        // CLEAR THE LOCAL STORAGE
        localStorage.clear();

        // REDIRECT TO LOGIN
        // history.push('/Login');

        throw new Error("Your session has expired. Please log in.");
    };

    throw new Error("Network response was not ok.");
}

// FOR ERRORS NOT CONTROLED
export function handleError(error: any) {
    return console.error("Not controlled error -> " + error);
};

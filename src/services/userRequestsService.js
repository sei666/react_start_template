import API from "./api";

export async function auth(email, pass) {
    return await API.post('/api/auth/login', { email: email, password: pass });
}

export async function logOutApi() {
    return await API.post('/api/auth/logOut');
}

export async function getUserByToken(){
    return await API.get('/api/auth/getUserByToken');
}











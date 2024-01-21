import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = 'http://localhost/api'

const config = {
    baseURL: apiUrl,
    headers: { "Content-type": "application/json" },
}

const token = localStorage.getItem('token');
if(token) config.headers['authorization'] = `Bearer ${token}`;

const publicApiInstance = axios.create(config);
const privateApiInstance = axios.create(config);

privateApiInstance.interceptors.response.use(
    response => response,
    error => {
        // Ошибка авторизации
        if (error.response.status === 401) {
            // Удаляем токен
            localStorage.removeItem('token');
            window.location.reload();
        }

        if (error.response.status === 422) {
            toast('Validation error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        return Promise.reject(error);
    }
)

export {publicApiInstance, privateApiInstance}
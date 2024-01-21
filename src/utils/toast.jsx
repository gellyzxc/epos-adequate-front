import { ToastContainer, toast } from "react-toastify"
import { MESSAGES } from "../constants"

export const presentToast = (text) => {
    toast[MESSAGES[text]['type']](MESSAGES[text]['text'])
}

export const Toast = () => {
    return <ToastContainer />
}
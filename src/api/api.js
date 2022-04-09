import axios from "axios";


const api = axios.create({
    baseURL:"https://todo-app-32-227b6.firebaseio.com/"
})


export default api
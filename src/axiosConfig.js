import axios from 'axios';

const axiosBase = axios.create({

    baseURL:'https://evangadi-forum-backend-awan.onrender.com/api'
})

export default axiosBase
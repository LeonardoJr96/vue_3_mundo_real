import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/leonardojr96/vue_3_mundo_real',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
    //Added new call
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}
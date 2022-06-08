import axios from "axios";
import {apiCall} from "../api";


const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== apiCall.type) {
        next(action);
        return;
    }
    next(action)
    const {url, method, onSuccess, onFail, data, header} = action.payload
    let token = localStorage.getItem('access')
    let headers = !header && token ? {'Authorization': token} : header

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        ...headers
    }

    // http://50.116.20.197:9095/
    axios({
        baseURL: 'http://50.116.20.197:9095/',
        url,
        method,
        data,
        headers,
        proxy: {
            host: '50.116.20.197',
            port: 9595
        }
    }).then(res => {
        dispatch({
            type: onSuccess,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: onFail,
            payload: err.response
        })
    })
}

export default api;
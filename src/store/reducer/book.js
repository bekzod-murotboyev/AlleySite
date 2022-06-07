import {createAction, createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';

const slice = createSlice({
    name: 'book',
    initialState: {books: [],current:{},currentWriter:{}, file_path: '',dropBook:false},
    reducers: {
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onUploadSuccess: (state, {payload}) => {
            state.file_path = payload.generated_name

        },
        onGetSuccess: (state, {payload}) => {
            state.books = payload
        },
        onSingleGetSuccess: (state, {payload}) => {
            state.current = payload
        },
        setCurrent:(state,{payload})=>{
            state.current=payload
        },
        setCurrentWriter:(state,{payload})=>{
            state.currentWriter=payload
        },
        onFail: (state, {payload: {data, status}}) => {
            if (status === 401) {
                localStorage.setItem('access', '')
                state.dropBook=true
            }
            status === 403 ? toast.error('You don\'t have this permission', {autoClose: 1500})
                : toast.error(data.detail?data.detail:data.detail.error, {autoClose: 1500})
        }
    }
})

export const {setCurrent,setCurrentWriter}=slice.actions

export const create = (data) => apiCall({
    url: 'books',
    method: 'POST',
    onSuccess: slice.actions.onCreateSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});
export const upload = (data) => apiCall({
    url: 'file',
    method: 'POST',
    onSuccess: slice.actions.onUploadSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});
export const getAll = () => apiCall({
    url: 'books',
    method: 'GET',
    onSuccess: slice.actions.onGetSuccess.type,
    onFail: slice.actions.onFail.type,
});
export const get = (id) => apiCall({
    url: 'books/'+id+'?book_id='+id,
    method: 'GET',
    onSuccess: slice.actions.onSingleGetSuccess.type,
    onFail: slice.actions.onFail.type,
});


export default slice.reducer
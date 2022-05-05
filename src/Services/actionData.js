import http from "./Services";

export const getAllUsers = () => {
    return (
        http.get("/Users") 
    );
}

export const deleteUser = (id) => {
    return(
        http.delete(`/Users/${id}`)
    )
}

export const addUser = (data) => {
    return http.post("/Users" , data) ;
}

export const getOneUser = (id) => {
    return http.get(`/Users/${id}`) ;
}

export const editUser = (data)=>{
    return http.put(`/Users/${data.id}` , {Name : data.Name , Email : data.Email}) ; 
}
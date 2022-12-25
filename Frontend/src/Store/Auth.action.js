import axios from "axios"
import { Auth_Logout, Auth_Success, Error_user, Get_data } from "./Auth.type"




export const LoginData = (data) => async (dispatch) => {
    try {
        let res = await axios.post("http://localhost:8000/user/login", data) 
        // console.log(res.data.token)
     dispatch({type:Auth_Success,payload:res.data.token})   
    } catch (err) {
             dispatch({type:Error_user})   

    }
}


export const GetData = () => async (dispatch) => {
    try {
        let res = await axios.get("http://localhost:8000/course")
        // console.log(res.data)
        dispatch({type:Get_data,payload:res.data})
        
    } catch (err) {
        console.log(err)
    }
}


export const DeleteData = (id) => async(dispatch) =>{
    try {
        let res = await axios.delete(`http://localhost:8000/course/${id}`)
        // console.log(res.data)
        // dispatch({type:Get_data,payload:res.data})
    } catch (err) {
        console.log(err)
 }
}

export const LogoutUser = () =>async(dispatch)=>{
    dispatch({ type:Auth_Logout})
}










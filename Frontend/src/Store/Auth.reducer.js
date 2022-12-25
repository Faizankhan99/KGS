import { Auth_Logout, Auth_Success, Error_user, Get_data } from "./Auth.type";

const initial = {
    error: false,
    data:[],
    token:""
}

export const AuthReducer = (state = initial, { type, payload })=>{
    switch (type) {
    
        case Auth_Success:{
          return  {
                ...state,
                token:payload
            }
        }
            
        case Error_user: {
            return {
                ...state,
                error: true
            }
         }


        case Auth_Logout: {
            return {
                ...state,
                token:""
            }
        }
        case Get_data: {
            return {
               ...state,
               data:payload
            }
           }
            
            
        default:{
            return state;
        }
            
            
            
    }

}
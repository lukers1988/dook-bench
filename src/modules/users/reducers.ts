import { ADD_USER, GET_USERS } from "./constants";

const initialUsers = {
    users: [
        {
            "id": 1,
            "username": "Lukers1988",
            "email": "lukaszgadzina1988@gmail.com"
        },
        {
            "id": 2,
            "username": "ŁukaszGadzina",
            "email": "l.gadzina@dook.pro"
        }
    ],
}


export const userReducer = (state = initialUsers, action: any) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state, users: [...state.users, action.user]
            }
        case GET_USERS:
            return state.users;
        default:
            return state;
    }
}

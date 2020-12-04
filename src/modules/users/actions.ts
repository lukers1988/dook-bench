import { ADD_USER, GET_USERS } from "./constants";

export interface UserInterface {
    id: number,
    username: string,
    email: string
}

export const addUser = (user: UserInterface) => ({
    type: ADD_USER, user
});

export const getUsers = () =>({
    type: GET_USERS
});

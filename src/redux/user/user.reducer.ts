import { UserActionTypes } from './user.types';

const INITIAL_STATE =
{
    currentUser: null,
    countUser: null
}

export const userReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case UserActionTypes.SET_COUNT_USER:
            return {
                ...state,
                countUser: action.payload
            }
        case UserActionTypes.SET_SINGLE_USER:
            return {
                ...state,
                singleUser: action.payload
            }
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

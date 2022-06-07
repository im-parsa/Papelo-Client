import { UserActionTypes } from './user.types';

export const setCountUser = (user: any) =>
({
    type: UserActionTypes.SET_COUNT_USER,
    payload: user
});

export const setSingleUser = (user: any) =>
({
    type: UserActionTypes.SET_SINGLE_USER,
    payload: user
});

export const setCurrentUser = (user: any) =>
({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

import { NavActionTypes } from './nav.types';

const INITIAL_STATE =
{
    openNav: false
}

export const navReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case NavActionTypes.SET_OPEN_NAV:
            return {
                ...state,
                openNav: action.payload
            }
        default:
            return state;
    }
}

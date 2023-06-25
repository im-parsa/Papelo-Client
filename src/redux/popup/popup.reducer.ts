import { PopupActionTypes } from './popup.types';

const INITIAL_STATE =
{
    hiddenLogin: true
};

export const popupReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case PopupActionTypes.TOGGLE_POPUP_HIDDEN_LOGIN:
            return {
                ...state,
                hiddenLogin: !state.hiddenLogin
            };
        default:
            return state;
    }
};

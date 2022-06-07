import { PopupActionTypes } from './popup.types';

const INITIAL_STATE =
{
    hiddenEmotes: true,
    hiddenCreate: true,
    hiddenUpdate: true,
    hiddenConfirm: true
};

export const popupReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case PopupActionTypes.TOGGLE_POPUP_HIDDEN_EMOTES:
            return {
                ...state,
                hiddenEmotes: !state.hiddenEmotes
            }
        case PopupActionTypes.TOGGLE_POPUP_HIDDEN_CREATE:
            return {
                ...state,
                hiddenCreate: !state.hiddenCreate
            }
        case PopupActionTypes.TOGGLE_POPUP_HIDDEN_UPDATE:
            return {
                ...state,
                popupUpdateType: action.payload,
                hiddenUpdate: !state.hiddenUpdate
            }
        case PopupActionTypes.TOGGLE_POPUP_HIDDEN_CONFIRM:
            return {
                ...state,
                popupUpdatePayload: action.payload,
                hiddenConfirm: !state.hiddenConfirm
            }
        default:
            return state;
    }
}

import { PopupActionTypes } from './popup.types';

export const togglePopupHiddenCreate = () =>
({
    type: PopupActionTypes.TOGGLE_POPUP_HIDDEN_CREATE
});

export const togglePopupHiddenEmotes = () =>
({
    type: PopupActionTypes.TOGGLE_POPUP_HIDDEN_EMOTES
});

export const togglePopupHiddenUpdate = (payload?: any) =>
({
    type: PopupActionTypes.TOGGLE_POPUP_HIDDEN_UPDATE,
    payload
});

export const togglePopupHiddenConfirm = (payload?: any) =>
({
    type: PopupActionTypes.TOGGLE_POPUP_HIDDEN_CONFIRM,
    payload
});

import { combineReducers } from 'redux';

import { popupReducer } from './popup/popup.reducer';

export default combineReducers(
    {
        popup: popupReducer
    });

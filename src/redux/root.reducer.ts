import { combineReducers } from 'redux';

import { botReducer } from './bot/bot.reducer';
import { navReducer } from './nav/nav.reducer';
import { userReducer } from './user/user.reducer';
import { popupReducer } from './popup/popup.reducer';
import { guildReducer } from './guild/guild.reducer';

export default combineReducers(
{
    bot: botReducer,
    nav: navReducer,
    user: userReducer,
    guild: guildReducer,
    popup: popupReducer
});

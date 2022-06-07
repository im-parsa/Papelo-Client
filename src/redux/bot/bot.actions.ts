import { BotActionTypes } from './bot.types';

export const setCountBot = (bot: any) =>
({
    type: BotActionTypes.SET_COUNT_BOT,
    payload: bot
});

export const setSingleBot = (bot: any) =>
({
    type: BotActionTypes.SET_SINGLE_BOT,
    payload: bot
});

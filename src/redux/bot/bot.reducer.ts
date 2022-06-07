import { BotActionTypes } from './bot.types';

const INITIAL_STATE =
{
    singleBot: null,
    countBot: null
}

export const botReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case BotActionTypes.SET_COUNT_BOT:
            return {
                ...state,
                countBot: action.payload
            }
        case BotActionTypes.SET_SINGLE_BOT:
            return {
                ...state,
                singleBot: action.payload
            }
        default:
            return state;
    }
}

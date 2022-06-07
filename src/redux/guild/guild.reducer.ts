import { GuildActionTypes } from './guild.types';

const INITIAL_STATE =
{
    pinGuild: null,
    singleGuild: null,
    countGuild: null
}

export const guildReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case GuildActionTypes.SET_PIN_GUILD:
            return {
                ...state,
                pinGuild: action.payload
            }
        case GuildActionTypes.SET_COUNT_GUILD:
            return {
                ...state,
                countGuild: action.payload
            }
        case GuildActionTypes.SET_SINGLE_GUILD:
            return {
                ...state,
                singleGuild: action.payload
            }
        default:
            return state;
    }
}

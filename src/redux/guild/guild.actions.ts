import { GuildActionTypes } from './guild.types';

export const setCountGuild = (guild: any) =>
({
    type: GuildActionTypes.SET_COUNT_GUILD,
    payload: guild
});

export const setPinGuild = (guild: any) =>
({
    type: GuildActionTypes.SET_PIN_GUILD,
    payload: guild
});

export const setSingleGuild = (guild: any) =>
({
    type: GuildActionTypes.SET_SINGLE_GUILD,
    payload: guild
});

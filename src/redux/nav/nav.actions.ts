import { NavActionTypes } from './nav.types';

export const setOpenNav = (nav: any) =>
({
    type: NavActionTypes.SET_OPEN_NAV,
    payload: nav
});

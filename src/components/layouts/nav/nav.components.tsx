import React from 'react';
import Tooltip from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';

import { togglePopupHiddenCreate } from '../../../redux/popup/popup.actions';

import {
    BsCodeSlash
} from 'react-icons/bs';

import { ReactComponent as VIP } from '../../../assets/icons/vip.svg';
import { ReactComponent as Bot } from '../../../assets/icons/bot.svg';
import { ReactComponent as Blog } from '../../../assets/icons/blog.svg';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Explore } from '../../../assets/icons/explore.svg';

import {
    NavContainer,
    NavItemContainer,
    NavItemTooltipContainer,
    NavLinkContainer,
    NavListContainer
} from './nav.styles';
import 'tippy.js/dist/tippy.css';

const Nav = () =>
{
    const dispatch = useDispatch();
    const openNav = useSelector((state: any) => state.nav.openNav);
    const pinGuild = useSelector((state: any) => state.guild.pinGuild);
    const currentUser = useSelector((state: any) => state.user.currentUser);

    return (
        <>
            <NavContainer className={ openNav ? 'active' : '' }>
                <NavListContainer>
                    <NavItemContainer>
                        <Tooltip
                            placement='right'
                            render={() =>
                                (
                                    <NavItemTooltipContainer>
                                        Home
                                    </NavItemTooltipContainer>
                                )}
                        >
                            <NavLinkContainer to='/'>
                                <Logo />
                            </NavLinkContainer>
                        </Tooltip>
                    </NavItemContainer>
                    {
                        <Tooltip
                            placement='right'
                            render={() =>
                                (
                                    <NavItemTooltipContainer>
                                        Get Start
                                    </NavItemTooltipContainer>
                                )}
                        >
                            <NavItemContainer>
                                {
                                    currentUser
                                        ?
                                        <NavLinkContainer to='#' onClick={() => dispatch(togglePopupHiddenCreate())}>
                                            <Plus />
                                        </NavLinkContainer>
                                        :
                                        <NavLinkContainer to='/login'>
                                            <Plus />
                                        </NavLinkContainer>
                                }
                            </NavItemContainer>
                        </Tooltip>
                    }
                    <Tooltip
                        placement='right'
                        render={() =>
                            (
                                <NavItemTooltipContainer>
                                    Explore Servers
                                </NavItemTooltipContainer>
                            )}
                    >
                        <NavItemContainer>
                            <NavLinkContainer to='/servers?page=1&category=all'>
                                <Explore />
                            </NavLinkContainer>
                        </NavItemContainer>
                    </Tooltip>
                    <Tooltip
                        placement='right'
                        render={() =>
                            (
                                <NavItemTooltipContainer>
                                    Explore Bots
                                </NavItemTooltipContainer>
                            )}
                    >
                        <NavItemContainer>
                            <NavLinkContainer to='/bots?page=1&category=all'>
                                <Bot />
                            </NavLinkContainer>
                        </NavItemContainer>
                    </Tooltip>
                    <Tooltip
                        placement='right'
                        render={() =>
                            (
                                <NavItemTooltipContainer>
                                    Explore Users
                                </NavItemTooltipContainer>
                            )}
                    >
                        <NavItemContainer>
                            <NavLinkContainer to='/users?page=1&category=all'>
                                <User />
                            </NavLinkContainer>
                        </NavItemContainer>
                    </Tooltip>
                    <Tooltip
                        placement='right'
                        render={() =>
                            (
                                <NavItemTooltipContainer>
                                    Explore Blogs
                                </NavItemTooltipContainer>
                            )}
                    >
                        <NavItemContainer>
                            <NavLinkContainer to='/blogs'>
                                <Blog />
                            </NavLinkContainer>
                        </NavItemContainer>
                    </Tooltip>
                    <Tooltip
                        placement='right'
                        render={() =>
                            (
                                <NavItemTooltipContainer>
                                    Buy VIP
                                </NavItemTooltipContainer>
                            )}
                    >
                        <NavItemContainer>
                            <NavLinkContainer to='/vip'>
                                <VIP />
                            </NavLinkContainer>
                        </NavItemContainer>
                    </Tooltip>
                    {/*{*/}
                    {/*    currentUser*/}
                    {/*        ?*/}
                    {/*        (*/}
                    {/*            <Tooltip*/}
                    {/*                placement='right'*/}
                    {/*                render={() =>*/}
                    {/*                    (*/}
                    {/*                        <NavItemTooltipContainer>*/}
                    {/*                            Basket*/}
                    {/*                        </NavItemTooltipContainer>*/}
                    {/*                    )}*/}
                    {/*            >*/}
                    {/*                <NavItemContainer>*/}
                    {/*                    <NavItemDotContainer>*/}
                    {/*                    <span>*/}
                    {/*                        3*/}
                    {/*                    </span>*/}
                    {/*                    </NavItemDotContainer>*/}
                    {/*                    <NavLinkContainer to='/basket'>*/}
                    {/*                        <BsBasket2Fill size={24} />*/}
                    {/*                    </NavLinkContainer>*/}
                    {/*                </NavItemContainer>*/}
                    {/*            </Tooltip>*/}
                    {/*        )*/}
                    {/*        :*/}
                    {/*        null*/}
                    {/*}*/}
                    {
                        currentUser && (currentUser?.role === 'ADMIN' || currentUser?.role === 'OWNER' || currentUser?.role === 'FOUNDER')
                            ?
                            (
                                <Tooltip
                                    placement='right'
                                    render={() =>
                                        (
                                            <NavItemTooltipContainer>
                                                Admin Panel
                                            </NavItemTooltipContainer>
                                        )}
                                >
                                    <NavItemContainer>
                                        <NavLinkContainer to='/panel'>
                                            <BsCodeSlash size={24} />
                                        </NavLinkContainer>
                                    </NavItemContainer>
                                </Tooltip>
                            )
                            :
                            null
                    }
                    {
                        pinGuild?.guilds?.map((guild: any) =>
                            (
                                <Tooltip
                                    key={guild?.guildId}
                                    placement='right'
                                    render={() =>
                                        (
                                            <NavItemTooltipContainer>
                                                {guild?.name}
                                            </NavItemTooltipContainer>
                                        )}
                                >
                                    <NavItemContainer>
                                        <NavLinkContainer to={ `/servers/${guild?.guildId}` } style={{ background: `url(https://cdn.discordapp.com/icons/${guild?.guildId}/${guild?.icon}?size=512)` }}/>
                                    </NavItemContainer>
                                </Tooltip>
                            ))
                    }
                </NavListContainer>
            </NavContainer>
        </>
    );
};

export default Nav;

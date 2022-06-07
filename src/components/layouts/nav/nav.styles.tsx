import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav
`
    display: flex;
    justify-content: center;
    grid-template: nav-start / nav-end;

    padding: 1rem 0;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: all .2s;
    background-color: #202225;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar
    {
        display: none;
    }

    @media only screen and (max-width: 56.25rem)
    {
        position: fixed;
        z-index: 201;
        height: 100%;
        width: 7.25rem;
        left: -7.25rem;
        padding-top: 8rem;

        &.active
        {
            left: 0;
        }
    }
`;

export const NavListContainer = styled.ul
`
    display: flex;
    flex-direction: column;
`;

export const NavItemContainer = styled.li
`
    display: flex;
    justify-content: center;
    transition: all .2s;
    cursor: pointer;
    background-color: #36393f;
    min-width: 4.8rem;
    min-height: 4.8rem;
    border-radius: 50%;
    margin: 0.4rem 0;
    position: relative;
    overflow: hidden;

    &:after
    {
        content: "";
        position: absolute;
        width: 1rem;
        border-radius: 1rem;
        background: white;
        left: -50%;
        top: 25%;
        transition: all .2s;
    }

    &:first-child
    {
        & > a > svg
        {
            width: 2.8rem;
            height: 2.8rem;
        }

        margin-bottom: 2rem;
        border-radius: 1.4rem;

        &:hover
        {
            background: #5865F2;
        }

        &:before
        {
            content: "";
            position: absolute;
            height: .1rem;
            width: 80%;
            border-radius: .1rem;
            background: #383838;
            bottom: -1.1rem;
        }
    }

    & > a,
    & > svg
    {
        color: #3BA55D;
        fill: #3BA55D;
        height: 100%;
        width: 100%;
    }

    &:hover
    {
        border-radius: 1.8rem;
        background: #3BA55D;

        & a svg,
        & span
        {
            color: #ffffff;
            fill: #ffffff;
            opacity: 1;
            visibility: visible;
        }

        &:after
        {
            height: 50%;
            left: -37%;
        }

        & > div
        {
            background: white;

            & > span
            {
                color: #3BA55D;
            }
        }
    }
`;

export const NavItemDotContainer = styled.div
`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -.1rem;
    right: -.2rem;
    width: 1.65rem;
    height: 1.65rem;
    border-radius: 50%;
    background: #3BA55D;
    transition: all .2s;
`;

export const NavItemTooltipContainer = styled.span
`
    margin-left: 1rem;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.5rem;
    white-space: nowrap;
    border-radius: .6rem;
    padding: .8rem 1.2rem;
    background-color: #141417;
    box-shadow: 0 0 20px -10px rgba(0,0,0,0.8);

    &:before
    {
        content: "";
        margin-left: 1rem;
        top: 36%;
        width: 1rem;
        height: 1rem;
        left: -.4rem;
        position: absolute;
        background: #141417;
        transform: rotate(45deg);
    }
`

export const NavLinkContainer = styled(Link)
`
    display: flex;
    align-items: center;
    justify-content: center;

    background-size: cover !important;
    background-position: center !important;
`

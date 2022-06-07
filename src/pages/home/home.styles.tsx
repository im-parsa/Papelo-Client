import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PlaneHeader from '../../assets/images/header-1.svg';
import HotelHeader from '../../assets/images/header-2.svg';
import TourHeader from '../../assets/images/header-3.svg';
import TrainHeader from '../../assets/images/header-4.svg';
import BusHeader from '../../assets/images/header-5.svg';

export const HomeHeaderContainer = styled.header
    `
        display: grid;
        grid-template-columns: 1.25fr 1fr;

        height: 100vh;
        margin-bottom: 3rem;
    `;

export const HomeHeaderImageContainer = styled.div
    `
        display: flex;
        position: relative;
    `;

export const HomeHeaderImageContentParentContainer = styled.div
    `
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        position: relative;
        margin: auto;
        margin-top: 7rem;
        width: 50rem;
        height: 65rem;

        &::before
        {
            display: block;
            content: 'shadow';
            position: absolute;
            background: #ffffff;
            bottom: -2rem;
            opacity: .5;
            width: 85%;
            height: 100%;
            border-radius: 3.5rem;
        }
    `;

export const HomeHeaderImageContentBoxContainer = styled.div
    `
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 4rem;
        padding: 3.5rem;

        background: #FEFFFF;
    `;

export const HomeHeaderImageContentContainer = styled.div
    `
        display: flex;
        align-items: center;
        flex-direction: column;

        position: relative;
        width: 100%;
        height: 100%;
    `;

export const HomeHeaderImageContentItemContainer = styled.div
    `
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: right;

        position: relative;
        width: 100%;
        height: 100%;
    `;

export const HomeHeaderImageBackgroundContainer = styled.div
    `
        position: absolute;

        border-radius: 0 0 11.5rem 0;
        background: #A8B2BF;
        background-size: cover;
        height: 90%;
        width: 100%;

        &.plane
        {
            background: url(${PlaneHeader});
        }
        &.hotel
        {
            background: url(${HotelHeader});
        }
        &.tour
        {
            background: url(${TourHeader});
        }
        &.train
        {
            background: url(${TrainHeader});
        }
        &.bus
        {
            background: url(${BusHeader});
        }
    `;

export const HomeHeaderMainContainer = styled.div
    `

    `;

export const HomeHeaderImageContentNavContainer = styled.ul
    `
        display: flex;
        align-items: center;

        margin: auto;
        margin-top: 0;
        width: 100%;
        height: 10rem;
    `;

export const HomeHeaderImageContentNavItemContainer = styled.li
    `
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        color: #A8B2BF;
        padding: 0 1.25rem 2.75rem 1.25rem;
        border-bottom: #F5F6F8 solid .25rem;
        font-size: 2rem;
        transition: all .3s;

        &:hover
        {
            cursor: pointer;
            color: #98a0ac;
            border-color: #e0e2e5;
        }

        &.active
        {
            padding: 0 0 2.75rem 0;
            color: #4A6192;
            border-color: #4A6192;
        }
    `;

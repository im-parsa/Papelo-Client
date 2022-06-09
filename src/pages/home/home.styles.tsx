import styled from 'styled-components';

import PlaneHeader from '../../assets/images/header-1.svg';
import HotelHeader from '../../assets/images/header-2.svg';
import TourHeader from '../../assets/images/header-3.svg';
import TrainHeader from '../../assets/images/header-4.svg';
import BusHeader from '../../assets/images/header-5.svg';
import ContentImage from '../../assets/images/texture.svg';
import NavbarBackground from '../../assets/icons/navbar-bg.svg';

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
        margin-top: 11rem;
        width: 50rem;
        height: 68rem;

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
        flex-direction: column;
        justify-content: flex-start;

        position: relative;
        width: 100%;
        height: 100%;

        & > button
        {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            margin: auto;
            margin-bottom: 0;
            color: #ffffff;
            font-size: 1.75rem;
            border: none;
            padding: 1.5rem;
            border-radius: 1rem;
            background: #4A6193;
            transition: all .2s;

            &:hover
            {
                cursor: pointer;
                background: #394f80;
            }
        }
    `;

export const HomeHeaderImageContentItemContainer = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: right;

        position: relative;
        width: 100%;
        padding: 0;

        &:first-child
        {
            padding: 1.5rem 0 2.5rem 0;
        }

        & .date
        {
            display: flex;
            flex-direction: column;

            padding: 1.5rem;
            border-radius: 2rem;
            border: #EBEFF4 solid .2rem;

            &:first-child
            {
                margin-left: 1.5rem;
            }

            & input
            {
                width: 100%;
                color: #4A6193;
                border: none;
                outline: none;
                transition: all .2s;
                font-size: 2.5rem;
                color: #4A6193;
            }

            & label
            {

                color: #a0a8b1;
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }

        & span
        {
            position: absolute;
            z-index: 99;
            bottom: 42%;
            left: 4rem;

            display: none;
            align-items: center;
            justify-content: center;

            background: #ffffff;
            width: 5rem;
            height: 5rem;
            border: #EBEFF4 solid .2rem;
            border-radius: 10rem;

            & svg
            {
                width: 2rem;
                height: 2rem;
            }

            &.active
            {
              display: flex;
            }
        }

        & p
        {
            margin-left: 1rem;

            [type='radio']:checked,
            [type='radio']:not(:checked)
            {
                position: absolute;
                right: -9999px;
            }
            [type='radio']:checked + label,
            [type='radio']:not(:checked) + label
            {
                position: relative;
                padding-right: 2.25rem;
                cursor: pointer;
                line-height: 2rem;
                display: inline-block;
                font-size: 1.5rem;
                color: #4A6193;
            }
            [type='radio']:checked + label:before,
            [type='radio']:not(:checked) + label:before
            {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                width: 18px;
                height: 18px;
                border: .25rem solid #4A6193;
                border-radius: 100%;
            }
            [type='radio']:checked + label:after,
            [type='radio']:not(:checked) + label:after
            {
                content: '';
                width: 1rem;
                height: 1rem;
                background: #4A6193;
                position: absolute;
                top: 4px;
                right: 4px;
                border-radius: 100%;
                -webkit-transition: all 0.2s ease;
                transition: all 0.2s ease;
            }
            [type='radio']:not(:checked) + label:after
            {
                opacity: 0;
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            [type='radio']:checked + label:after
            {
                opacity: 1;
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }

        &.column
        {
            flex-direction: column;
        }
    `;

export const HomeHeaderImageContentItemParentInputContainer = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: space-between;

        position: relative;

        width: 100%;
        padding: 2rem;
        padding-left: 3.5rem;
        border-radius: 2rem;
        outline: none;
        margin-bottom: 1.25rem;
        background: #ffffff;
        border: #EBEFF4 solid .2rem;

        & .origin_options,
        & .destination_options
        {
            position: absolute;
            z-index: 101;

            display: none;

            width: 100%;
            height: 27rem;
            top: 12rem;
            right: 0;
            background: #ffffff;
            padding: 2.5rem;
            border-radius: 2rem;
            transition: all .2s;
            box-shadow: 0 0 4rem 0 rgba(44, 44, 52, .25);

            &.active
            {
                display: block;
            }

            & ul
            {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                overflow: scroll;
                width: 100%;
                height: 100%;
            }

            & li
            {
                display: flex;
                align-items: center;

                padding: 2rem 1.5rem;
                border-radius: 1rem;
                font-size: 1.5rem;
                color: #a0a8b1;
                cursor: pointer;
                transition: all .2s;

                & svg
                {
                    margin-left: 1rem;
                    width: 2rem;
                }

                &:hover,
                &.active
                {
                    background: #f5f8ff;
                    color: #c;
                }

                &.deactivate
                {
                    display: none;
                }
            }
        }

        & > svg
        {
            width: 3rem;
            height: 3rem;
        }

        & > div
        {
            display: flex;
            flex-direction: column;

            & input
            {
                font-size: 2.5rem;
                width: 100%;
                color: #4A6193;
                border: none;
                outline: none;
                transition: all .2s;
            }

            & label
            {
                color: #a0a8b1;
                font-size: 1.25rem;
                margin-bottom: .75rem;
            }
        }

        &.active
        {
            z-index: 100;
            border-color: transparent;
            box-shadow: 0 0 4rem 0 rgba(44, 44, 52, .25);
        }
    `;

export const HomeHeaderPassengersContainer = styled.div
    `
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        position: absolute;
        z-index: 100;
        top: 8rem;
        left: 0;

        padding: 2rem;
        width: 35rem;
        border-radius: 2.5rem;
        min-height: 10rem;
        background: #ffffff;
        box-shadow: 0 0 4rem 0 rgba(44, 44, 52, .25);
    `;

export const HomeHeaderPassengersItemContainer = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: space-between;

        & div
        {
            display: flex;
            align-items: center;

            *
            {
                fill: #4A6193;
            }

            & h2
            {
                font-size: 2rem;
            }

            & p
            {
                margin-right: .75rem;
                font-size: 1.25rem;
                color: #7b8393;
            }
        }
    `;

export const HomeHeaderPassengersButtonContainer = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: center;

        border: #c1cad5 solid .2rem;
        border-left: none;
        border-right: none;
        width: 2rem;
        height: 4rem;
        font-size: 1.75rem;

        &.right
        {
            width: 4rem;
            height: 4rem;
            border: #c1cad5 solid .2rem;
            border-left: none;
            border-radius: 0 5rem 5rem 0;
        }

        &.left
        {
            width: 4rem;
            height: 4rem;
            border: #c1cad5 solid .2rem;
            border-right: none;
            border-radius: 5rem 0 0 5rem;
        }

        &.active
        {
            border-color: #4A6193;
        }
    `;

export const HomeHeaderImageBackgroundContainer = styled.div
    `
        position: absolute;

        border-radius: 0 0 11.5rem 0;
        background: #A8B2BF;
        background-size: cover;
        height: 97%;
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
        position: relative;
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

        & svg
        {
            margin-left: .75rem;
            max-height: 2.2rem;
        }

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

export const HomeHeaderNavContainer = styled.nav
    `
        display: flex;
        align-items: center;
        justify-content: space-between;

        position: relative;
        top: 0;

        width: 100%;
        height: auto;
        padding: 0 12rem;

        & svg
        {
            margin-top: 2rem;
        }
    `;

export const HomeHeaderAsideContainer = styled.nav
    `
        display: flex;
        align-items: center;
        justify-content: space-between;

        position: relative;
        top: 0;

background: red;

        width: 15rem;
        height: 100vh;
        padding: 10rem 1.5rem;

        & h3
        {
            margin: auto;
            margin-top: 0;
            transform: rotate(-90deg);
        }
    `;

export const HomeHeaderMainBackgroundContainer = styled.div
    `
        position: absolute;

        background-image: url(${ContentImage});
        background-position-x: 20rem;
        background-position-y: 10rem;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    `;

export const HomeHeaderNavItemsContainer = styled.ul
    `
        display: flex;
        align-items: center;
        justify-content: right;

        padding-top: 3rem;
        gap: 2rem;
    `;

export const HomeHeaderNavItemContainer = styled.li
    `
        display: flex;
        align-items: center;
        justify-content: center;

        color: #A5AFC4;
        font-size: 1.5rem;
        transition: all .2s;
        cursor: pointer;
        height: 12rem;

        & svg
        {
            width: 2rem;
        }

        &.arrow
        {
            &:after
            {
                content: '';
                display: inline-block;
                width: .75rem;
                height: .75rem;
                border-bottom: .15rem solid currentColor;
                border-left: .15rem solid currentColor;
                border-bottom-left-radius: 2px;
                transform: rotate(45deg) translate(50%, 0%);
                transform-origin: center center;
                transition: transform ease-in-out 100ms;
                margin: auto;
                margin-left: 0;
                margin-right: 1rem;
            }

            &:hover:after
            {
                transform: rotate(-45deg) translate(0%, 0%);
            }

            &:hover > div
            {
                display: flex;
            }
        }

        &:hover
        {
            color: #838da1;
        }

        &.active
        {
            color: #4A6193;
        }
    `;

export const HomeHeaderNavItemPopupContainer = styled.div
    `
        display: none;
        flex-direction: column;

        position: absolute;
        z-index: 110;
        top: 12rem;
        left: -15rem;

        cursor: auto;
        width: 60rem;
        min-height: 10rem;
        background: #ffffff;
        border-radius: 2rem;
        box-shadow: 0 0 4rem 0 rgba(44, 44, 52, .25);

        &:before
        {
            content: '';
            display: inline-block;
            position: absolute;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: .5rem;
            transform: rotate(45deg) translate(50%, 0%);
            top: -1rem;
            right: 5rem;
            background: #ffffff;
        }

        & h3
        {
            padding: 2.75rem 4rem;
            color: #B7BAC6;
        }

        &:hover
        {
            display: flex;
        }
    `;

export const HomeHeaderNavItemPopupItemsContainer = styled.ul
    `
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;

        padding: 2.75rem 4rem;
        padding-top: 0;
    `;

export const HomeHeaderNavItemPopupItemContainer = styled.li
    `
        display: flex;
        align-items: center;

        & a
        {
            color: #4A6193;
            font-size: 1.75rem;
            margin-bottom: .5rem;
            transition: all .2s;

            &:hover
            {
                color: #354b7c;
            }
        }

        & p
        {
            font-size: 1.35rem;
        }

        & span
        {
            display: flex;
            align-items: center;
            justify-content: center;

            margin-left: 1.5rem;
            width: 5rem;
            height: 5rem;
            background: url(${NavbarBackground});
            border-radius: 10rem;
        }
    `;

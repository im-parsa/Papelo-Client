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

        height: 100vh;
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
            border: 2px solid #EDEFF6;

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
            border: 2px solid #EDEFF6;
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
        border: 2px solid #EDEFF6;

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
            box-shadow: 0px 30px 70px #48609233;

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
                    color: #4A6193;
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
            box-shadow: 0px 30px 70px #48609233;
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
        box-shadow: 0px 30px 70px #48609233;
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

        border: #EDEFF6 solid .2rem;
        border-left: none;
        border-right: none;
        width: 2rem;
        height: 4rem;
        font-size: 1.5rem;

        & svg
        {
            width: 1rem;
        }

        &.right
        {
            width: 4rem;
            height: 4rem;
            border: #EDEFF6 solid .2rem;
            border-left: none;
            border-radius: 0 5rem 5rem 0;
        }

        &.left
        {
            width: 4rem;
            height: 4rem;
            border: #EDEFF6 solid .2rem;
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
        height: 92.25%;
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
        display: grid;
        grid-template-rows: 10rem 1fr;

        position: relative;

        height: 100vh;

        & > div
        {
            display: grid;
            grid-template-columns: 15rem 1fr;
        }
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

        position: fixed;
        z-index: 110;
        top: 0;

        background: #f5f6fa;
        height: 10rem;
        width: 55.5%;
        padding: 0 12rem;
        padding-left: 5rem;

        & svg
        {
            margin-top: 2rem;
        }
    `;

export const HomeHeaderAsideContainer = styled.aside
    `
        display: flex;
        flex-direction: column;

        width: 15rem;
        height: 100vh;
        padding: 20rem 0 0 0;

        & a
        {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: auto;
            margin-top: 0;
            color: #96A5C6;
            transition: all .2s;
            transform: rotate(-90deg) scale(1.5);

            &:hover
            {
                color: #7486af;
            }

            & svg
            {
                max-width: 1rem;
                margin-right: .5rem;
            }
        }

        & > div
        {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            width: 100%;
            margin: auto;
            margin-bottom: 1.5rem;

            & a
            {
                width: 5rem;
                height: 5rem;

                *
                {
                    transition: all .2s;
                }

                &:hover *
                {
                    fill: #7486af !important;
                }
            }

            & svg
            {
                transform: rotate(90deg) scale(1.75);
            }
        }
    `;

export const HomeHeaderMainBackgroundContainer = styled.span
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
        justify-content: left;
        gap: 3.5rem;

        width: 100%;
        height: 100%;
    `;

export const HomeHeaderNavItemContainer = styled.li
    `
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        color: #A5AFC4;
        font-size: 1.75rem;
        transition: all .2s;
        cursor: pointer;
        height: 100%;

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
                margin-top: 4.25rem;
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
        top: 10rem;
        left: -40rem;

        cursor: auto;
        width: 60rem;
        min-height: 10rem;
        background: #ffffff;
        border-radius: 2rem;
        box-shadow: 0px 30px 70px #48609233;

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
            right: 15rem;
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

            & svg
            {
                display: flex;
                align-items: center;
                justify-content: center;

                margin: auto;
            }
        }
    `;

export const HomeHeaderContentContainer = styled.div
    `
        display: flex;
        flex-direction: column;

        position: relative;

        padding-left: 10rem;
        padding-top: 20rem;
        height: 100%;
        width: 100%;

        & span
        {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            color: #496193;
            font-size: 1.5rem;
            margin-top: 10rem;
            letter-spacing: -0.27px;

            & i
            {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 4rem;
                height: 4rem;
                border-radius: 5rem;
                background: transparent linear-gradient(180deg, #FFFFFF 0%, #F5F6FA 100%) 0% 0% no-repeat padding-box;

                & svg
                {
                    width: 2rem;
                }
            }

            & > svg
            {
                width: 2rem;
            }
        }

        & > div
        {
            display: flex;
            align-items: center;

            gap: 2rem;

            margin-top: 4rem;

            & a
            {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                height: 8rem;
                width: auto;
                padding: 0 5rem;
                font-size: 2rem;
                border-radius: 10rem;

                &:first-child
                {
                    color: #ffffff;
                    background: #496193;
                }
                &:last-child
                {
                    color: #496193;
                    background: #f5f6fa;
                    border: 5px solid #EDEFF6;
                    position: relative;

                    &:before
                    {
                        content: 'جدید';
                        position: absolute;
                        padding: .25rem 1.5rem;
                        top: 0;
                        left: -2rem;
                        font-size: 1.75rem;
                        letter-spacing: -0.27px;
                        color: #ffffff;
                        background: #09BAB5;
                        border-radius: 21px 21px 5px 21px;
                    }
                }
            }
        }

        & p
        {
            font-family: 'YekanBakhRegular', sans-serif;
            font-size: 4rem;
            letter-spacing: -0.6px;
            color: #96A5C6;
            margin-top: 4rem;
            font-weight: bold;
        }

        & h1
        {
            font-family: 'YekanBakhMedium', sans-serif;
            font-size: 7.75rem;
            letter-spacing: -1.26px;

            & strong
            {
                font-family: 'YekanBakhHeavy', sans-serif;
            }
        }
    `;

import { createGlobalStyle } from 'styled-components';

import YekanWoff from './assets/fonts/yekan/IRANYekanWeb.woff';
import YekanWoff2 from './assets/fonts/yekan/IRANYekanWeb.woff2';
import YekanTtf from './assets/fonts/yekan/IRANYekanWeb.ttf';

export default createGlobalStyle
    `
        @font-face
        {
            font-family: 'Yekan';
            src: local('Yekan'), local('Yekan'),
            url(${YekanWoff}) format('woff'),
            url(${YekanWoff2}) format('woff2'),
            url(${YekanTtf}) format('truetype');
            font-weight: 300;
            font-style: normal;
        }

        *,
        *::after,
        *::before
        {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
            -ms-overflow-style: none;
            scrollbar-width: none;
            font-family: 'Yekan', sans-serif;

            &::-webkit-scrollbar
            {
                display: none;
            }
        }

        html
        {
            font-size: 62.5%;
            scroll-behavior: smooth;
        }

        body
        {
            box-sizing: border-box;
            font-weight: 300;
        }

        a
        {
            text-decoration: none;
        }

        strong
        {
            font-weight: 500;
            color: white;
        }

        li
        {
            list-style: none;
        }

        #root
        {
            color: #4A6193;
            overflow: hidden;
            height: 100vh;
            background: #F5F6FA;
        }

        .custom-select-menu
        {
            details
            {
                position: relative;
                width: 14rem;
                margin-right: 1rem;

                &.passengers
                {
                    width: 11rem;
                }
            }

            details[open]
            {
                z-index: 1;
            }

            summary
            {
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 1.25rem 1.55rem;
                cursor: pointer;
                list-style: none;
                border-radius: 150rem;
                border: #EBEFF4 solid .3rem;
                font-size: 1.5rem;
                color: #4A6192;
            }

            summary::-webkit-details-marker
            {
                display: none;
            }

            details[open] summary
            {
                border-color: #4A6192;
            }

            details[open] summary:before
            {
                content: '';
                display: block;
                width: .75rem;
                height: .75rem;
                background: transparent;
                position: fixed;
                top: 0;
                left: 0;
            }

            summary:after
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
                margin-top: .5rem;
            }

            summary:focus
            {
                outline: none;
            }

            details[open] summary:after
            {
                transform: rotate(-45deg) translate(0%, 0%);
            }

            ul
            {
                width: 100%;
                background: #ddd;
                position: absolute;
                top: calc(100% + .5rem);
                left: 0;
                padding: 1rem;
                margin: 0;
                box-sizing: border-box;
                border-radius: 5px;
                max-height: 200px;
                overflow-y: auto;
            }

            li:first-child
            {
                padding-top: 0;
            }

            li:last-child
            {
                padding-bottom: 0;
                border-bottom: none;
            }

            summary.radios
            {
                counter-reset: radios;
            }

            input[type=radio]
            {
                counter-increment: radios;
                appearance: none;
                display: none;
            }

            input[type=radio]:checked
            {
                display: inline;
            }

            input[type=radio]:after
            {
                content: attr(title);
                display: inline;
                font-size: 1.5rem;
                color: #4A6192;
            }

            ul.list
            {
                display: flex;
                flex-direction: column;

                width: 20rem;
                counter-reset: labels;
                background: #FFFFFF;
                border-radius: 1rem;
                padding: 1.75rem;
                gap: .5rem;
                box-shadow: 0 0 4rem 0 rgba(44, 44, 52, .25);

                & li
                {
                    display: flex;
                    align-items: center;

                    position: relative;
                    border-radius: 1rem;
                    font-size: 1.5rem;
                    padding: 1rem;
                    background: #F9FAFD;
                    transition: all .2s;
                    cursor: pointer;

                    & label
                    {
                        height: 100%;
                        width: 100%;
                    }

                    &:hover
                    {
                        background: #f2f2f6;
                    }
                }
            }

            label
            {
                width: 100%;
                display: block;
                cursor: pointer;
            }
        }
    `;

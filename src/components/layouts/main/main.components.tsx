import React from 'react';
import { MainContainer } from './main.styles';

const Main = (props: any) =>
{
    return (
        <MainContainer>
            { props.children }
        </MainContainer>
    );
};

export default Main;

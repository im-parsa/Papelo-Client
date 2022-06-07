import React, { useCallback, useState } from 'react';

import Main from '../../components/layouts/main/main.components'
import {
    HomeHeaderContainer,
    HomeHeaderImageContainer,
    HomeHeaderMainContainer,
    HomeHeaderImageBackgroundContainer,
    HomeHeaderImageContentContainer,
    HomeHeaderImageContentBoxContainer,
    HomeHeaderImageContentNavContainer,
    HomeHeaderImageContentNavItemContainer,
    HomeHeaderImageContentItemContainer,
    HomeHeaderImageContentParentContainer
} from './home.styles';

import { ReactComponent as Plane } from '../../assets/icons/plane.svg';

const Home = () =>
{
    const [page, setPage] = useState('plane');
    const handlePage = useCallback(
        (page: string) =>
        {
            setPage(page);
        }, [setPage]);

    return (
        <Main>
            <HomeHeaderContainer>
                <HomeHeaderMainContainer>

                </HomeHeaderMainContainer>
                <HomeHeaderImageContainer>
                    <HomeHeaderImageBackgroundContainer className={page} />
                    <HomeHeaderImageContentParentContainer>
                        <HomeHeaderImageContentBoxContainer>
                            <HomeHeaderImageContentNavContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'plane' ? 'active' : ''} onClick={() => handlePage('plane')}>
                                    هواپیما
                                    {
                                        page ===  'plane'
                                            ?
                                            <Plane />
                                            :
                                            null
                                    }
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'hotel' ? 'active' : ''} onClick={() => handlePage('hotel')}>
                                    هتل
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'tour' ? 'active' : ''} onClick={() => handlePage('tour')}>
                                    تور
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'train' ? 'active' : ''} onClick={() => handlePage('train')}>
                                    قطار
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'bus' ? 'active' : ''} onClick={() => handlePage('bus')}>
                                    اتوبوس
                                </HomeHeaderImageContentNavItemContainer>
                            </HomeHeaderImageContentNavContainer>
                            <HomeHeaderImageContentContainer>
                                <HomeHeaderImageContentItemContainer>
                                    <div className='custom-select-menu'>
                                        <details className='custom-select'>
                                            <summary className='radios'>
                                                <input type='radio' name='item' id='default' title='یک طرفه' checked/>
                                                <input type='radio' name='item' id='item1' title='Item 1'/>
                                                <input type='radio' name='item' id='item2' title='Item 2'/>
                                                <input type='radio' name='item' id='item3' title='Item 3'/>
                                                <input type='radio' name='item' id='item4' title='Item 4'/>
                                                <input type='radio' name='item' id='item5' title='Item 5'/>
                                            </summary>
                                            <ul className='list'>
                                                <li>
                                                    <label htmlFor='item1'>Item 1</label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item2'>Item 2</label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item3'>Item 3</label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item4'>Item 4</label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item5'>Item 5</label>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                </HomeHeaderImageContentItemContainer>

                            </HomeHeaderImageContentContainer>
                        </HomeHeaderImageContentBoxContainer>
                    </HomeHeaderImageContentParentContainer>
                </HomeHeaderImageContainer>
            </HomeHeaderContainer>
        </Main>
    );
};

export default Home;

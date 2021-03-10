import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container, 
    SearchWrapper, 
    SeachInput, 
    SeachIcon, 
    Body, 
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SeachInput placeholder="Buscar no Twitter" />
            <SeachIcon />
        </SearchWrapper>

        <StickyBox>
            <Body>
                <List
                    title="Talvez você curta"  
                    elements={[
                        <FollowSuggestion name="BBC News Brasil" nickname="@bbcbrasil"/>,
                        <FollowSuggestion name="Whindersson Nunes" nickname="@whindersson"/>,
                        <FollowSuggestion name="Nilce Moretto" nickname="@nilcemoretto"/>
                    ]}
                />
                <List
                    title="Talvez você curta"  
                    elements={[<News />,<News />,<News />]}
                />
                <List
                    title="Talvez você curta"  
                    elements={[<News />,<News />,<News />]}
                />
                <List
                    title="Talvez você curta"  
                    elements={[<News />,<News />,<News />]}
                />
            </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;
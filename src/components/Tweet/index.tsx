import React from 'react';

import { 
    Container, 
    Retweeted, 
    RetweetedGrayIcon, 
    Body, 
    Avatar, 
    Content, 
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RetweetedGrayIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                        <strong>CNN Brasil</strong>
                        <span>@CNNBrasil</span>
                        <Dot />
                        <time>27 de jun</time>
                  </Header>

                  <Description>Medidas contra COVID.</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          258
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;
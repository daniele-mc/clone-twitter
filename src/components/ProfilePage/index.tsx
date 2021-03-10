import React from 'react';
import Feed from  '../Feed';
import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton, 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined> Editar perfil</EditButton>
            <h1>Daniele Carvalho</h1>
            <h2>@dani</h2>
            <p>
                Developer at <a href="https://www.ufrn.br/">@UFRN</a>
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    Rio grande do Norte, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 20 de julho de 1993
                </li>
            </ul>
            <Followage>
                <span>
                    seguindo <strong>178</strong>
                </span>
                <span>
                    <strong>116 </strong>seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;
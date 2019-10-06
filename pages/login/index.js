import styled from 'styled-components';
import {
    Button,
    Container,
    Image,
    Menu,
} from 'semantic-ui-react';

const CenterContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header href="https://enforge.de">
                    <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                    Project Name
            </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                </Menu.Menu>

            </Container>
        </Menu >


        <CenterContainer>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
            </div>
        </CenterContainer>
    </div>
);
export default Home;
import styled from 'styled-components';
import {
  Container,
  Menu,
  Button,
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
        <Menu.Item as='a' header href="/">
          enforge.de
          </Menu.Item>
          <Menu.Item as='a' header href="till.hoffmann">
          Till Hoffmann
          </Menu.Item>
      </Container>
    </Menu >

    <CenterContainer>
      <div>
        This page is about Till Hoffmann.
      </div>
      <br/>
      <div>
        <Button as='a' secondary icon='github' href="https://github.com/tillhoff" />
        <Button as='a' secondary icon='xing' href="https://www.xing.com/profile/Till_Hoffmann21" />
        <Button as='a' secondary icon='linkedin' href="https://linkedin.com/in/till-h-9879b6182/" />
      </div>
    </CenterContainer>
  </div >
);
export default Home;

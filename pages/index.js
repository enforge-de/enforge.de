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
        Almost nothing to see here.
      </div>
      <br/>
      <div>
        <Button as='a' secondary icon='github' href="https://github.com/enforge-de" />
      </div>
    </CenterContainer>
  </div >
);
export default Home;

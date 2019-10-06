import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const CenterContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <CenterContainer>
    <div>
      <h1>Login</h1>
    </div>
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  </CenterContainer>
);
export default Home;
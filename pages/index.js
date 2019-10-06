import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <CenterContainer>
    Almost nothing to see here.
  </CenterContainer>
);
export default Home;
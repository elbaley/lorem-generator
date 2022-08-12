import styled from "styled-components";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
function App() {
  return (
    <Wrapper>
      <Header />
      <TextArea />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 0 auto;
`;

export default App;

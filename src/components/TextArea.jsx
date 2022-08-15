import { useSelector } from "react-redux";
import styled from "styled-components";

const TextArea = () => {
  const text = useSelector((state) => state.text);
  return (
    <Wrapper>
      <button
        onClick={(e) => {
          navigator.clipboard.writeText(JSON.stringify(text.text));
        }}
        className='copy'
      >
        <svg class='copyIcon' viewBox='0 0 24 24'>
          <path d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z'></path>
        </svg>
      </button>
      <div className='text'>{text.text}</div>
    </Wrapper>
  );
};

export default TextArea;
const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  max-height: 55vh;
  overflow: scroll;
  position: relative;
  .copy {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
  }
  .copyIcon {
    fill: white;
    height: 1.25rem;
  }
  .text {
    margin-top: 1.6rem;
  }
`;

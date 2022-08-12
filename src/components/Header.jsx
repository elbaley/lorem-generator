import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchText } from "../features/text/textSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  const [format, setFormat] = useState("text");
  useEffect(() => {
    dispatch(
      fetchText({
        length: num,
        format: format,
      })
    );
  }, [num, format]);
  return (
    <Wrapper>
      <h1>Lorem Generator</h1>
      <section className='controls'>
        <label htmlFor='paragraph'>Paragraph:</label>
        <input
          name='paragraph'
          className='paragraph'
          type='number'
          onChange={(e) => {
            if (e.target.value > 0) {
              setNum(e.target.value);
            }
          }}
          value={num}
        />
        <label htmlFor='format'>Format:</label>
        <select
          onChange={(e) => {
            setFormat(e.target.value);
          }}
          name='format'
          className='format'
          id=''
          value={format}
        >
          <option value='text'>Text</option>
          <option value='html'>HTML</option>
        </select>
      </section>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  .paragraph {
    margin: 0 0.5rem;
    width: 5ch;
    height: 1.5rem;
  }
  .format {
    margin: 0 0.5rem;
    height: 1.5rem;
    padding: 1px 2px;
  }
`;

import styled from "styled-components";

const HeadingTest = styled.h1`
  display: flex;
  gap: 1rem;
  color: #2f99f5;
  ${(props) =>
    props.as === "h1" && `font-size: 3rem;font-weight: 700;color:yellow`}
  ${(props) =>
    props.as === "h2" && `font-size: 2rem;font-weight: 600;color:yellow`}
    ${(props) =>
    props.as === "h3" && `font-size: 1.5rem;font-weight: 500;color:yellow`}
`;
export default HeadingTest;

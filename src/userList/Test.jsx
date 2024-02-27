import styled from "styled-components";
export default function Test({ children }) {
  const Button = styled.div`
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: ${(props) =>
      props.variant === "primary" ? "blue" : "green"};
    width: 4rem;
    text-align: center;
  `;

  return (
    <div>
      <Button as={"button"} variant="primary">
        sub
      </Button>
      <Button as={"button"}>unSub</Button>
    </div>
  );
}

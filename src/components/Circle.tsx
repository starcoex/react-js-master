import React, { useState } from "react";
import styled from "styled-components";

type CircleProps = {
  bgColor: string;
};
type ContainerProps = {
  bgColor: string;
};

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
`;

export default function Circle({ bgColor }: CircleProps) {
  const [counter, setCounter] = useState("");
  const handleChangeValue = (event: React.FormEvent<HTMLInputElement>) => {
    // const value = event.currentTarget.value;
    const {
      currentTarget: { value },
    } = event;
    console.log(value);
    setCounter(value);
  };
  const handleClick = () => {
    setCounter((prev) => prev + "1");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", counter);
  };
  return (
    <Container bgColor={bgColor}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={counter}
          onChange={handleChangeValue}
          placeholder="username"
        />
        <p>Counter : {counter}</p>
        <button onClick={handleClick}>Click</button>
      </form>
    </Container>
  );
}

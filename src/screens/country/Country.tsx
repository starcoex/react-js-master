import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../atoms/atoms";

export default function Country() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setText(value);
    event.currentTarget.value = "";
  };
  const onClick = () => {};
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>내가 싶은 나라들</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="이름"
          onChange={onChange}
          required
        />
        <button type="submit">가자!</button>
      </form>
      <br />
      <p>내가 가본 나라들</p>
      <p>{text}</p>
    </div>
  );
}

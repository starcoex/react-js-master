import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../atoms";

export default function ToDoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  interface ITodo {
    id: number;
    text: string;
    isComplete: boolean;
  }

  let id = 0;
  function getId() {
    return id++;
  }

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setInputValue(value);
  };
  const addItem = () => {
    // setTodoList((oldTodoList) => [
    //   ...oldTodoList,
    //   {
    //     id: getId(),
    //     text: inputValue,
    //     isComplete: false,
    //   },
    // ]);
    setInputValue("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="name"
        value={inputValue}
        onChange={onChange}
      ></input>
      <button onClick={addItem}>Add</button>
    </form>
  );
}

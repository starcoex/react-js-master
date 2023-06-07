import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../atoms";
import { useForm } from "react-hook-form";

export default function ToDoItemCreator() {
  const { control, register, trigger, watch, getValues } = useForm();
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setInputValue(value);
  };
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    console.log(id);
    setInputValue("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  console.log(todoList);
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
let id = 0;
function getId() {
  return id++;
}

import React from "react";
import ToDoItemCreator from "./ToDoItemCreator";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms";

export default function ToDoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <ToDoItemCreator></ToDoItemCreator>
    </>
  );
}

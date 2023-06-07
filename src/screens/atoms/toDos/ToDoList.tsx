import React from "react";
import ToDoItemCreator from "./ToDoItemCreator";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";

export default function ToDoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoListFilters />
      <ToDoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          // text={todoItem.text}
          // id={todoItem.id}
          // isComplete={todoItem.isComplete}
          item={todoItem}
        />
      ))}
    </>
  );
}

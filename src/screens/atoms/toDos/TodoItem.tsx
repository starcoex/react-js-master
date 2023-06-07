import React from "react";
import { constSelector, useRecoilState } from "recoil";
import { ITodo, todoListState } from "../atoms";

interface ToDoProps {
  item: string;
}

export default function TodoItem({ item }: { item: ITodo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  // const editItemText = (event: React.FormEvent<HTMLInputElement>) => {
  //   const { currentTarget: value } = event;
  //   const newList = replaceItemAtIndex(todoList, index, {
  //     ...item,
  //     text: value,
  //   });
  //   setTodoList(newList);
  // };
  const editItemText: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
    // const editItemText = (event: React.FormEvent<HTMLInputElement>) => {
    //   setTodoList((oldtoDos) => {
    //     const index = todoList.findIndex((listItem) => listItem === item);
    //     console.log("index", index);
    //     const { currentTarget: value } = event;

    //     const newToDo = { id: item.id, text: value as any };
    //     console.log(newToDo);
    //     return [
    //       ...oldtoDos.slice(0, index),
    //       newToDo,
    //       ...oldtoDos.slice(index + 1),
    //     ];
    //   });
    // };
  };
  const deleteItem = () => {
    const newList = removeItemIndex(todoList, index);
    setTodoList(newList);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      {/* <button onClick={onClick}>0</button> */}
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(
  arr: ITodo[],
  index: number,
  newValue: ITodo
): ITodo[] {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
function removeItemIndex(arr: ITodo[], index: number): ITodo[] {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

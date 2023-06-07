import { lstat } from "fs";
import { atom, selector } from "recoil";

export const fontSizeState = atom({
  key: "fontSizeState",
  default: 14,
});

export const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";
    return `${fontSize}${unit}`;
  },
});

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
});

export const isDarkState = atom({
  key: "isDark",
  default: true,
});

export interface ITodo {
  id: number;
  text: string;
  isComplete?: boolean;
  category?:
    | "내가 가고싶은 나라들"
    | "내가 가본 나라들"
    | "내가 좋아하는 나라들";
}

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filterdTodoListState = selector({
  key: "filterdTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Complete":
        return list.filter((item) => item.isComplete);
      case "Show UnCompleted":
        return list.filter((item) => item.isComplete);
      default:
        return list;
    }
  },
});
export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

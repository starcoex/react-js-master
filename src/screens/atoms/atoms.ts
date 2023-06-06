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

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const isDarkState = atom({
  key: "isDark",
  default: true,
});

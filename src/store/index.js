import { create } from "zustand";

// 예시.  원하는 상태 추가하려면 use"명칭"Store 라는 변수로 생성하기
export const useExampleStore = create((setState) => ({
  state: "",
  changeState1() {
    setState(() => ({ state: "1" }));
  },
  changeState2() {
    setState(() => ({ state: "2" }));
  },
}));

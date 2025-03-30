import { create } from "zustand";

const parkStore = create((set) => ({
  from: null,
  to: null,
  activeElements: [
    "v151",
    "v152",
    "p87",
    "327Б",
    "v207",
    "v208",
    "v209",
    "p125",
    "ЗМ-46",
    "p126",
    "p127",
    "i77",
  ],

  setFrom: (title) =>
    set((state) => {
      const newFrom = state.from === title ? null : title;
      return {
        from: newFrom,
        activeElements: [],
        to: newFrom === null ? null : state.to,
      };
    }),

  setTo: (title) =>
    set((state) => {
      const newTo = state.to === title ? null : title;
      return {
        to: newTo,
        activeElements: newTo === null ? [] : state.activeElements,
      };
    }),

  addActiveElement: (titles) =>
    set(() => ({
      activeElements: [...titles],
    })),
}));

export default parkStore;

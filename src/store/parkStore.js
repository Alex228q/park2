import { create } from "zustand";

const parkStore = create((set) => ({
  from: null,
  to: null,
  activeElements: [],
  activePump: [],

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

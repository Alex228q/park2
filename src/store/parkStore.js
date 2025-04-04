import { create } from "zustand";

const parkStore = create((set) => ({
  from: null,
  to: null,
  activeElements: [],
  activeElementsAfterPump: [],
  activePump: [],

  setFrom: (title) =>
    set((state) => {
      const newFrom = state.from === title ? null : title;
      return {
        from: newFrom,
        activePump: [],
        activeElements: [],
        activeElementsAfterPump: [],
        to: newFrom === null ? null : state.to,
      };
    }),

  setTo: (title) =>
    set((state) => {
      const newTo = state.to === title ? null : title;
      return {
        to: newTo,
        activePump: [],
        activeElementsAfterPump: [],
        activeElements: newTo === null ? [] : state.activeElements,
      };
    }),

  addActiveElement: (titles) =>
    set(() => ({
      activeElements: [...titles],
    })),
  addActiveElementAfterPump: (titles) =>
    set(() => ({
      activeElementsAfterPump: [...titles],
    })),

  // Добавляем новый метод для управления активными насосами
  setActivePump: (newActivePump) =>
    set(() => ({
      activePump: newActivePump,
    })),
}));

export default parkStore;

import { create } from "zustand";

const parkStore = create((set) => ({
  isMazutTransferVisibleKgpn: false,
  isMazutTransferVisiblePst: false,
  from: null,
  to: null,
  activeElements: [],
  activeElementsGpn: [],
  activeElementsPst: [],
  activeElementsAfterPump: [],
  activePump: [],

  toggleMazutTransferVisibilityKgpn: () =>
    set((state) => ({
      isMazutTransferVisibleKgpn: !state.isMazutTransferVisibleKgpn,
    })),

  toggleMazutTransferVisibilityPst: () =>
    set((state) => ({
      isMazutTransferVisiblePst: !state.isMazutTransferVisiblePst,
    })),

  addElementsTransferGpn: (titles) =>
    set(() => ({
      activeElementsGpn: [...titles],
    })),

  addElementsTransferPst: (titles) =>
    set(() => ({
      activeElementsPst: [...titles],
    })),

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

import { create } from "zustand";

const parkStore = create((set) => ({
  isMazutTransferVisibleKgpn: false,
  isMazutTransferVisiblePst: false,
  from: null,
  to: null,
  reverse: false, // true, если источник — эстакада (обратная откачка)
  pipelineVariant: null, // "61,64" | "62,63"
  activeElements: [],
  activeElementsGpn: [],
  activeElementsPst: [],
  activeElementsAfterPump: [],
  activePump: [],
  activePumpStation: [],
  lineAorB: [],

  setActivePumpStation: (newStation) =>
    set(() => ({
      activePumpStation: newStation,
    })),

  setLine: (newLine) =>
    set(() => ({
      activeElementsAfterPump: [],
      activePump: [],
      lineAorB: newLine,
    })),

  setPipelineVariant: (variant) =>
    set(() => ({
      pipelineVariant: variant,
    })),

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

  setFrom: (title, reverse = false) =>
    set((state) => {
      const newFrom = state.from === title ? null : title;
      return {
        lineAorB: [],
        activePumpStation: [],
        from: newFrom,
        reverse: newFrom === null ? false : reverse,
        pipelineVariant: null,
        activePump: [],
        activeElements: [],
        activeElementsAfterPump: [],
        to: newFrom === null ? null : state.to,
      };
    }),

  setTo: (title) =>
    set((state) => {
      const newTo = state.to === title ? null : title;
      const shouldClearElements =
        newTo === null || state.activePump.length === 0;

      return {
        to: newTo,
        lineAorB: [],
        // в обратном режиме трубопровод выбирается раньше резервуара, поэтому сохраняем его
        pipelineVariant: state.reverse ? state.pipelineVariant : null,
        activePump: [],
        activeElementsAfterPump: [],
        activeElements: shouldClearElements ? [] : state.activeElements,
      };
    }),

  addActiveElement: (titles) =>
    set((state) => ({
      activeElements:
        state.to === null || state.activePump.length === 0 ? [] : [...titles],
    })),


  addActiveElementAfterPump: (titles) =>
    set((state) => ({
      activeElementsAfterPump:
        state.to === null || state.activePump.length === 0 ? [] : [...titles],
    })),

  setActivePump: (newActivePump) =>
    set((state) => ({
      activeElementsAfterPump:
        newActivePump.length === 0 || state.to === null ? [] : [],
      activeElements: newActivePump.length === 0 || state.to === null ? [] : [],
      activePump: newActivePump,
    })),
}));

export default parkStore;
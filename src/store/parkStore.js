import { create } from "zustand";

// Общие пустые значения: стабильные ссылки не вызывают лишних перерисовок
const EMPTY = [];
const EMPTY_SET = new Set();

const sameList = (a, b) =>
  a === b || (a.length === b.length && a.every((v, i) => v === b[i]));

/**
 * Возвращает null, если содержимое не изменилось (писать в стор не нужно),
 * иначе { list, set } для записи.
 */
const nextList = (prev, titles) => {
  if (sameList(prev, titles)) return null;
  if (titles.length === 0) return { list: EMPTY, set: EMPTY_SET };
  const list = [...titles];
  return { list, set: new Set(list) };
};

const parkStore = create((set) => ({
  isMazutTransferVisibleKgpn: false,
  isMazutTransferVisiblePst: false,
  from: null,
  to: null,
  reverse: false, // true, если источник — эстакада (обратная откачка)
  pipelineVariant: null, // "61,64" | "62,63" | "88" | "89" | "90"

  // Массивы оставлены для обратной совместимости...
  activeElements: EMPTY,
  activeElementsGpn: EMPTY,
  activeElementsPst: EMPTY,
  activeElementsAfterPump: EMPTY,
  // ...а Set-версии нужны для быстрой проверки Set.has(title) в элементах схемы
  activeElementsSet: EMPTY_SET,
  activeElementsGpnSet: EMPTY_SET,
  activeElementsPstSet: EMPTY_SET,
  activeElementsAfterPumpSet: EMPTY_SET,

  activePump: EMPTY,
  activePumpStation: EMPTY,
  lineAorB: EMPTY,

  setActivePumpStation: (newStation) =>
    set(() => ({
      activePumpStation: newStation,
    })),

  setLine: (newLine) =>
    set(() => ({
      activeElementsAfterPump: EMPTY,
      activeElementsAfterPumpSet: EMPTY_SET,
      activePump: EMPTY,
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
    set((state) => {
      const next = nextList(state.activeElementsGpn, titles);
      if (!next) return state; // ничего не изменилось — подписчиков не трогаем
      return { activeElementsGpn: next.list, activeElementsGpnSet: next.set };
    }),

  addElementsTransferPst: (titles) =>
    set((state) => {
      const next = nextList(state.activeElementsPst, titles);
      if (!next) return state;
      return { activeElementsPst: next.list, activeElementsPstSet: next.set };
    }),

  setFrom: (title, reverse = false) =>
    set((state) => {
      const newFrom = state.from === title ? null : title;
      return {
        lineAorB: EMPTY,
        activePumpStation: EMPTY,
        from: newFrom,
        reverse: newFrom === null ? false : reverse,
        pipelineVariant: null,
        activePump: EMPTY,
        activeElements: EMPTY,
        activeElementsSet: EMPTY_SET,
        activeElementsAfterPump: EMPTY,
        activeElementsAfterPumpSet: EMPTY_SET,
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
        lineAorB: EMPTY,
        // в обратном режиме трубопровод выбирается раньше резервуара, поэтому сохраняем его
        pipelineVariant: state.reverse ? state.pipelineVariant : null,
        activePump: EMPTY,
        activeElementsAfterPump: EMPTY,
        activeElementsAfterPumpSet: EMPTY_SET,
        activeElements: shouldClearElements ? EMPTY : state.activeElements,
        activeElementsSet: shouldClearElements
          ? EMPTY_SET
          : state.activeElementsSet,
      };
    }),

  addActiveElement: (titles) =>
    set((state) => {
      const source =
        state.to === null || state.activePump.length === 0 ? EMPTY : titles;
      const next = nextList(state.activeElements, source);
      if (!next) return state;
      return { activeElements: next.list, activeElementsSet: next.set };
    }),

  addActiveElementAfterPump: (titles) =>
    set((state) => {
      const source =
        state.to === null || state.activePump.length === 0 ? EMPTY : titles;
      const next = nextList(state.activeElementsAfterPump, source);
      if (!next) return state;
      return {
        activeElementsAfterPump: next.list,
        activeElementsAfterPumpSet: next.set,
      };
    }),

  // При смене насосов элементы всегда сбрасываются, их затем заново
  // рассчитывает эффект в App (как и в исходной версии).
  setActivePump: (newActivePump) =>
    set(() => ({
      activeElementsAfterPump: EMPTY,
      activeElementsAfterPumpSet: EMPTY_SET,
      activeElements: EMPTY,
      activeElementsSet: EMPTY_SET,
      activePump: newActivePump,
    })),
}));

export default parkStore;
import parkStore from "../store/parkStore";

// Статус элемента схемы. Чем больше число, тем выше приоритет
// (совпадает с приоритетом цветов в исходных компонентах).
export const STATUS = {
  NONE: 0,
  ACTIVE: 1, // обычный маршрут (зелёный)
  AFTER_PUMP: 2, // после насоса (синий)
  GPN: 3, // мазут с КГПН (фиолетовый)
  PST: 4, // мазут с ПСТ (коричневый)
};

/**
 * Подписывает компонент ТОЛЬКО на статус одного элемента.
 * Селектор возвращает число, поэтому элемент перерисовывается лишь тогда,
 * когда изменился именно его статус, а не при любом обновлении стора.
 */
export const useElementStatus = (title) =>
  parkStore((s) => {
    if (s.activeElementsPstSet.has(title)) return STATUS.PST;
    if (s.activeElementsGpnSet.has(title)) return STATUS.GPN;
    if (s.activeElementsAfterPumpSet.has(title)) return STATUS.AFTER_PUMP;
    if (s.activeElementsSet.has(title)) return STATUS.ACTIVE;
    return STATUS.NONE;
  });

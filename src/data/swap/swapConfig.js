import { useEffect, useState } from "react";
import {
  SWAP_322_TO323_H1A,
  SWAP_322_TO323_H2A,
  SWAP_322_TO323_H3A,
  SWAP_322_TO323_H4A,
} from "./pumpSwapConfiguration322";

// Конфигурация насосов для разных маршрутов
const pumpConfigurations = {
  "E-322": {
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO323_H1A,
            "H-2": SWAP_322_TO323_H2A,
            "H-3": SWAP_322_TO323_H3A,
            "H-4": SWAP_322_TO323_H4A,
          },
        },
        // Можно добавить другие линии или станции
      },
      // Можно добавить другие направления (to)
    },
    "E-324": {
      // Аналогичная структура для других направлений
    },
    // И так далее для других "to"
  },
  // Можно добавить другие "from"
};

export const useSwapConfiguration = (
  from,
  to,
  lineAorB,
  activePumpStation,
  activePump,
  setActivePump,
  addActiveElementAfterPump
) => {
  const [autoSelected, setAutoSelected] = useState(false);

  useEffect(() => {
    const stationConfig =
      pumpConfigurations[from]?.[to]?.[activePumpStation]?.[lineAorB];

    if (stationConfig) {
      // Сбрасываем флаг автоматического выбора при изменении параметров
      setAutoSelected(false);
    }
  }, [from, to, lineAorB, activePumpStation]);

  useEffect(() => {
    const stationConfig =
      pumpConfigurations[from]?.[to]?.[activePumpStation]?.[lineAorB];

    if (stationConfig && !autoSelected) {
      setActivePump(stationConfig.pumps);
      setAutoSelected(true);

      const routeElements = [];
      stationConfig.pumps.forEach((pump) => {
        if (stationConfig.routes[pump]) {
          routeElements.push(...stationConfig.routes[pump]);
        }
      });

      if (routeElements.length > 0) {
        addActiveElementAfterPump([...new Set(routeElements)]);
      }
    }
  }, [autoSelected, from, to, lineAorB, activePumpStation]);
};

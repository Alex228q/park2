import { useEffect, useState } from "react";

import {
  SWAP_322_TO323_H1A,
  SWAP_322_TO323_H1B,
  SWAP_322_TO323_H2A,
  SWAP_322_TO323_H2B,
  SWAP_322_TO323_H3A,
  SWAP_322_TO323_H3B,
  SWAP_322_TO323_H4A,
  SWAP_322_TO323_H4B,
  SWAP_322_TO324_H1A,
  SWAP_322_TO324_H1B,
  SWAP_322_TO324_H2A,
  SWAP_322_TO324_H3A,
  SWAP_322_TO324_H4A,
  SWAP_322_TO324_H4B,
  SWAP_322_TO325_H1A,
  SWAP_322_TO325_H1B,
  SWAP_322_TO325_H2A,
  SWAP_322_TO325_H3A,
  SWAP_322_TO325_H4A,
  SWAP_322_TO325_H4B,
  SWAP_322_TO326_H1A,
  SWAP_322_TO326_H1B,
  SWAP_322_TO326_H2A,
  SWAP_322_TO326_H3A,
  SWAP_322_TO326_H4A,
  SWAP_322_TO326_H4B,
  SWAP_322_TO327_H1A,
  SWAP_322_TO327_H2A,
  SWAP_322_TO327_H3A,
  SWAP_322_TO327_H4A,
  SWAP_322_TO328_H1A,
  SWAP_322_TO328_H2A,
  SWAP_322_TO328_H3A,
  SWAP_322_TO328_H4A,
  SWAP_322_TO329_H1A,
  SWAP_322_TO329_H2A,
  SWAP_322_TO329_H3A,
  SWAP_322_TO329_H4A,
  SWAP_322_TO330_H1A,
  SWAP_322_TO330_H2A,
  SWAP_322_TO330_H3A,
  SWAP_322_TO330_H4A,
  SWAP_322_TO331_H1A,
  SWAP_322_TO331_H2A,
  SWAP_322_TO331_H3A,
  SWAP_322_TO331_H4A,
  SWAP_322_TO332_H1A,
  SWAP_322_TO332_H2A,
  SWAP_322_TO332_H3A,
  SWAP_322_TO332_H4A,
  SWAP_322_TO333_H1A,
  SWAP_322_TO333_H2A,
  SWAP_322_TO333_H3A,
  SWAP_322_TO333_H4A,
  SWAP_322_TO334_H1A,
  SWAP_322_TO334_H2A,
  SWAP_322_TO334_H3A,
  SWAP_322_TO334_H4A,
} from "./fromPump/pumpSwapConfiguration322";

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
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO323_H1B,
            "H-2": SWAP_322_TO323_H2B,
            "H-3": SWAP_322_TO323_H3B,
            "H-4": SWAP_322_TO323_H4B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO324_H1A,
            "H-2": SWAP_322_TO324_H2A,
            "H-3": SWAP_322_TO324_H3A,
            "H-4": SWAP_322_TO324_H4A,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO324_H1B,
            "H-4": SWAP_322_TO324_H4B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO325_H1A,
            "H-2": SWAP_322_TO325_H2A,
            "H-3": SWAP_322_TO325_H3A,
            "H-4": SWAP_322_TO325_H4A,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO325_H1B,
            "H-4": SWAP_322_TO325_H4B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO326_H1A,
            "H-2": SWAP_322_TO326_H2A,
            "H-3": SWAP_322_TO326_H3A,
            "H-4": SWAP_322_TO326_H4A,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO326_H1B,
            "H-4": SWAP_322_TO326_H4B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO327_H1A,
            "H-2": SWAP_322_TO327_H2A,
            "H-3": SWAP_322_TO327_H3A,
            "H-4": SWAP_322_TO327_H4A,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO328_H1A,
            "H-2": SWAP_322_TO328_H2A,
            "H-3": SWAP_322_TO328_H3A,
            "H-4": SWAP_322_TO328_H4A,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO329_H1A,
            "H-2": SWAP_322_TO329_H2A,
            "H-3": SWAP_322_TO329_H3A,
            "H-4": SWAP_322_TO329_H4A,
          },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO330_H1A,
            "H-2": SWAP_322_TO330_H2A,
            "H-3": SWAP_322_TO330_H3A,
            "H-4": SWAP_322_TO330_H4A,
          },
        },
      },
    },
    "E-331": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO331_H1A,
            "H-2": SWAP_322_TO331_H2A,
            "H-3": SWAP_322_TO331_H3A,
            "H-4": SWAP_322_TO331_H4A,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO332_H1A,
            "H-2": SWAP_322_TO332_H2A,
            "H-3": SWAP_322_TO332_H3A,
            "H-4": SWAP_322_TO332_H4A,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO333_H1A,
            "H-2": SWAP_322_TO333_H2A,
            "H-3": SWAP_322_TO333_H3A,
            "H-4": SWAP_322_TO333_H4A,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO334_H1A,
            "H-2": SWAP_322_TO334_H2A,
            "H-3": SWAP_322_TO334_H3A,
            "H-4": SWAP_322_TO334_H4A,
          },
        },
      },
    },
  },
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
      setAutoSelected(false);
    }
  }, [from, to, lineAorB, activePumpStation]);

  useEffect(() => {
    const stationConfig =
      pumpConfigurations[from]?.[to]?.[activePumpStation]?.[lineAorB];

    if (stationConfig) {
      // Обновляем маршрут при любом изменении activePump
      const routeElements = [];
      activePump.forEach((pump) => {
        if (stationConfig.routes[pump]) {
          routeElements.push(...stationConfig.routes[pump]);
        }
      });

      if (routeElements.length > 0) {
        addActiveElementAfterPump([...new Set(routeElements)]);
      }

      // Автоматически выбираем насосы только при первом выборе конфигурации
      if (!autoSelected && activePump.length === 0) {
        setActivePump(stationConfig.pumps);
        setAutoSelected(true);
      }
    }
  }, [autoSelected, from, to, lineAorB, activePumpStation, activePump]);
};

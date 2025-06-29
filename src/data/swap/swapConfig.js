import { useEffect, useState } from "react";
import {
  SWAP_322_TO_323_35_A1,
  SWAP_322_TO_323_35_A2,
  SWAP_322_TO_323_35_A3,
  SWAP_322_TO_323_35_A4,
} from "./322/to323/35/fromPumpA";
import {
  SWAP_322_TO_323_35_B1,
  SWAP_322_TO_323_35_B2,
  SWAP_322_TO_323_35_B3,
  SWAP_322_TO_323_35_B4,
} from "./322/to323/35/fromPumpB";
import { SWAP_322_TO_323_115_A } from "./322/to323/115/fromPumpA";
import { SWAP_322_TO_323_115_B } from "./322/to323/115/fromPumpB";

const pumpConfigurations = {
  "E-322": {
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_323_35_A1,
            "H-2": SWAP_322_TO_323_35_A2,
            "H-3": SWAP_322_TO_323_35_A3,
            "H-4": SWAP_322_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_323_35_B1,
            "H-2": SWAP_322_TO_323_35_B2,
            "H-3": SWAP_322_TO_323_35_B3,
            "H-4": SWAP_322_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_323_115_B,
          },
        },
      },
    },
    // "E-324": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO324_H1A,
    //         "H-2": SWAP_322_TO324_H2A,
    //         "H-3": SWAP_322_TO324_H3A,
    //         "H-4": SWAP_322_TO324_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO324_H1B,
    //         "H-4": SWAP_322_TO324_H4B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO324_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO324_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-325": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO325_H1A,
    //         "H-2": SWAP_322_TO325_H2A,
    //         "H-3": SWAP_322_TO325_H3A,
    //         "H-4": SWAP_322_TO325_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO325_H1B,
    //         "H-4": SWAP_322_TO325_H4B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO325_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO325_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-326": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO326_H1A,
    //         "H-2": SWAP_322_TO326_H2A,
    //         "H-3": SWAP_322_TO326_H3A,
    //         "H-4": SWAP_322_TO326_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO326_H1B,
    //         "H-4": SWAP_322_TO326_H4B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO326_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO326_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-327": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-2"],
    //       routes: {
    //         "H-1": SWAP_322_TO327_H1A,
    //         "H-2": SWAP_322_TO327_H2A,
    //         "H-3": SWAP_322_TO327_H3A,
    //         "H-4": SWAP_322_TO327_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO327_H1B,
    //         "H-2": SWAP_322_TO327_H2B,
    //       },
    //     },
    //   },

    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO327_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO327_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-328": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-2"],
    //       routes: {
    //         "H-1": SWAP_322_TO328_H1A,
    //         "H-2": SWAP_322_TO328_H2A,
    //         "H-3": SWAP_322_TO328_H3A,
    //         "H-4": SWAP_322_TO328_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO328_H1B,
    //         "H-2": SWAP_322_TO328_H2B,
    //       },
    //     },
    //   },

    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO328_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO328_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-329": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-2"],
    //       routes: {
    //         "H-1": SWAP_322_TO329_H1A,
    //         "H-2": SWAP_322_TO329_H2A,
    //         "H-3": SWAP_322_TO329_H3A,
    //         "H-4": SWAP_322_TO329_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO329_H1B,
    //         "H-2": SWAP_322_TO329_H2B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO329_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO329_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-330": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-2"],
    //       routes: {
    //         "H-1": SWAP_322_TO330_H1A,
    //         "H-2": SWAP_322_TO330_H2A,
    //         "H-3": SWAP_322_TO330_H3A,
    //         "H-4": SWAP_322_TO330_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO330_H1B,
    //         "H-2": SWAP_322_TO330_H2B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO330_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO330_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-331": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-2"],
    //       routes: {
    //         "H-1": SWAP_322_TO331_H1A,
    //         "H-2": SWAP_322_TO331_H2A,
    //         "H-3": SWAP_322_TO331_H3A,
    //         "H-4": SWAP_322_TO331_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO331_H1B,
    //         "H-2": SWAP_322_TO331_H2B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO331_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO331_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-332": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO332_H1A,
    //         "H-2": SWAP_322_TO332_H2A,
    //         "H-3": SWAP_322_TO332_H3A,
    //         "H-4": SWAP_322_TO332_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO332_H1B,
    //         "H-2": SWAP_322_TO332_H2B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO332_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO332_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-333": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO333_H1A,
    //         "H-2": SWAP_322_TO333_H2A,
    //         "H-3": SWAP_322_TO333_H3A,
    //         "H-4": SWAP_322_TO333_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO333_H1B,
    //         "H-2": SWAP_322_TO333_H2B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO333_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO333_N3B,
    //       },
    //     },
    //   },
    // },
    // "E-334": {
    //   "910-35": {
    //     А: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO334_H1A,
    //         "H-2": SWAP_322_TO334_H2A,
    //         "H-3": SWAP_322_TO334_H3A,
    //         "H-4": SWAP_322_TO334_H4A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["H-1"],
    //       routes: {
    //         "H-1": SWAP_322_TO334_H1B,
    //         "H-2": SWAP_322_TO334_H2B,
    //       },
    //     },
    //   },
    //   "910-115": {
    //     А: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO334_N3A,
    //       },
    //     },
    //     Б: {
    //       pumps: ["Н-3"],
    //       routes: {
    //         "Н-3": SWAP_322_TO334_N3B,
    //       },
    //     },
    //   },
    // },
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

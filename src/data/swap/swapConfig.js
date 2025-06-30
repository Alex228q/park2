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
import {
  SWAP_322_TO_324_35_A1,
  SWAP_322_TO_324_35_A2,
  SWAP_322_TO_324_35_A3,
  SWAP_322_TO_324_35_A4,
} from "./322/to324/35/fromPumpA";
import {
  SWAP_322_TO_324_35_B1,
  SWAP_322_TO_324_35_B4,
} from "./322/to324/35/fromPumpB";
import { SWAP_322_TO_324_115_A } from "./322/to324/115/fromPumpA";
import { SWAP_322_TO_324_115_B } from "./322/to324/115/fromPumpB";
import {
  SWAP_322_TO_325_35_A1,
  SWAP_322_TO_325_35_A2,
  SWAP_322_TO_325_35_A3,
  SWAP_322_TO_325_35_A4,
} from "./322/to325/35/fromPumpA";
import {
  SWAP_322_TO_325_35_B1,
  SWAP_322_TO_325_35_B4,
} from "./322/to325/35/fromPumpB";
import { SWAP_322_TO_325_115_A } from "./322/to325/115/fromPumpA";
import { SWAP_322_TO_325_115_B } from "./322/to325/115/fromPumpB";
import {
  SWAP_322_TO_326_35_A1,
  SWAP_322_TO_326_35_A2,
  SWAP_322_TO_326_35_A3,
  SWAP_322_TO_326_35_A4,
} from "./322/to326/35/fromPumpA";
import {
  SWAP_322_TO_326_35_B1,
  SWAP_322_TO_326_35_B4,
} from "./322/to326/35/fromPumpB";
import { SWAP_322_TO_326_115_A } from "./322/to326/115/fromPumpA";
import { SWAP_322_TO_326_115_B } from "./322/to326/115/fromPumpB";
import {
  SWAP_322_TO_327_35_A1,
  SWAP_322_TO_327_35_A2,
  SWAP_322_TO_327_35_A3,
  SWAP_322_TO_327_35_A4,
} from "./322/to327/35/fromPumpA";
import {
  SWAP_322_TO_327_35_B1,
  SWAP_322_TO_327_35_B2,
  SWAP_322_TO_327_35_B3,
  SWAP_322_TO_327_35_B4,
} from "./322/to327/35/fromPumpB";
import { SWAP_322_TO_327_115_A } from "./322/to327/115/fromPumpA";
import { SWAP_322_TO_327_115_B } from "./322/to327/115/fromPumpB";
import {
  SWAP_322_TO_328_35_B1,
  SWAP_322_TO_328_35_B2,
  SWAP_322_TO_328_35_B3,
  SWAP_322_TO_328_35_B4,
} from "./322/to328/35/fromPumpB";
import {
  SWAP_322_TO_328_35_A1,
  SWAP_322_TO_328_35_A2,
  SWAP_322_TO_328_35_A3,
  SWAP_322_TO_328_35_A4,
} from "./322/to328/35/fromPumpA";
import { SWAP_322_TO_328_115_A } from "./322/to328/115/fromPumpA";
import { SWAP_322_TO_328_115_B } from "./322/to328/115/fromPumpB";
import {
  SWAP_322_TO_329_35_A1,
  SWAP_322_TO_329_35_A2,
  SWAP_322_TO_329_35_A3,
  SWAP_322_TO_329_35_A4,
} from "./322/to329/35/fromPumpA";
import {
  SWAP_322_TO_329_35_B1,
  SWAP_322_TO_329_35_B2,
  SWAP_322_TO_329_35_B3,
  SWAP_322_TO_329_35_B4,
} from "./322/to329/35/fromPumpB";
import { SWAP_322_TO_329_115_A } from "./322/to329/115/fromPumpA";
import { SWAP_322_TO_329_115_B } from "./322/to329/115/fromPumpB";
import {
  SWAP_322_TO_330_35_A1,
  SWAP_322_TO_330_35_A2,
  SWAP_322_TO_330_35_A3,
  SWAP_322_TO_330_35_A4,
} from "./322/to330/35/fromPumpA";
import {
  SWAP_322_TO_330_35_B1,
  SWAP_322_TO_330_35_B2,
  SWAP_322_TO_330_35_B3,
  SWAP_322_TO_330_35_B4,
} from "./322/to330/35/fromPumpB";
import { SWAP_322_TO_330_115_A } from "./322/to330/115/fromPumpA";
import { SWAP_322_TO_330_115_B } from "./322/to330/115/fromPumpB";
import {
  SWAP_322_TO_331_35_A1,
  SWAP_322_TO_331_35_A2,
  SWAP_322_TO_331_35_A3,
  SWAP_322_TO_331_35_A4,
} from "./322/to331/35/fromPumpA";
import {
  SWAP_322_TO_331_35_B1,
  SWAP_322_TO_331_35_B2,
  SWAP_322_TO_331_35_B3,
  SWAP_322_TO_331_35_B4,
} from "./322/to331/35/fromPumpB";
import { SWAP_322_TO_331_115_A } from "./322/to331/115/fromPumpA";
import { SWAP_322_TO_331_115_B } from "./322/to331/115/fromPumpB";

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
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_324_35_A1,
            "H-2": SWAP_322_TO_324_35_A2,
            "H-3": SWAP_322_TO_324_35_A3,
            "H-4": SWAP_322_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_324_35_B1,
            "H-4": SWAP_322_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_325_35_A1,
            "H-2": SWAP_322_TO_325_35_A2,
            "H-3": SWAP_322_TO_325_35_A3,
            "H-4": SWAP_322_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_325_35_B1,
            "H-4": SWAP_322_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_326_35_A1,
            "H-2": SWAP_322_TO_326_35_A2,
            "H-3": SWAP_322_TO_326_35_A3,
            "H-4": SWAP_322_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_326_35_B1,
            "H-4": SWAP_322_TO_326_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_326_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_327_35_A1,
            "H-2": SWAP_322_TO_327_35_A2,
            "H-3": SWAP_322_TO_327_35_A3,
            "H-4": SWAP_322_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_327_35_B1,
            "H-2": SWAP_322_TO_327_35_B2,
            "H-3": SWAP_322_TO_327_35_B3,
            "H-4": SWAP_322_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_328_35_A1,
            "H-2": SWAP_322_TO_328_35_A2,
            "H-3": SWAP_322_TO_328_35_A3,
            "H-4": SWAP_322_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_328_35_B1,
            "H-2": SWAP_322_TO_328_35_B2,
            "H-3": SWAP_322_TO_328_35_B3,
            "H-4": SWAP_322_TO_328_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_328_115_B,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_329_35_A1,
            "H-2": SWAP_322_TO_329_35_A2,
            "H-3": SWAP_322_TO_329_35_A3,
            "H-4": SWAP_322_TO_329_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_329_35_B1,
            "H-2": SWAP_322_TO_329_35_B2,
            "H-3": SWAP_322_TO_329_35_B3,
            "H-4": SWAP_322_TO_329_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_329_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_329_115_B,
          },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_330_35_A1,
            "H-2": SWAP_322_TO_330_35_A2,
            "H-3": SWAP_322_TO_330_35_A3,
            "H-4": SWAP_322_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_330_35_B1,
            "H-2": SWAP_322_TO_330_35_B2,
            "H-3": SWAP_322_TO_330_35_B3,
            "H-4": SWAP_322_TO_330_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_330_115_B,
          },
        },
      },
    },
    "E-331": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_331_35_A1,
            "H-2": SWAP_322_TO_331_35_A2,
            "H-3": SWAP_322_TO_331_35_A3,
            "H-4": SWAP_322_TO_331_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_331_35_B1,
            "H-2": SWAP_322_TO_331_35_B2,
            "H-3": SWAP_322_TO_331_35_B3,
            "H-4": SWAP_322_TO_331_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_331_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_331_115_B,
          },
        },
      },
    },
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

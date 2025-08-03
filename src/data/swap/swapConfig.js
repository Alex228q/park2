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
import {
  SWAP_322_TO_332_35_B1,
  SWAP_322_TO_332_35_B2,
  SWAP_322_TO_332_35_B3,
  SWAP_322_TO_332_35_B4,
} from "./322/to332/35/fromPumpB";
import {
  SWAP_322_TO_332_35_A1,
  SWAP_322_TO_332_35_A2,
  SWAP_322_TO_332_35_A3,
  SWAP_322_TO_332_35_A4,
} from "./322/to332/35/fromPumpA";
import { SWAP_322_TO_332_115_A } from "./322/to332/115/fromPumpA";
import { SWAP_322_TO_332_115_B } from "./322/to332/115/fromPumpB";
import {
  SWAP_322_TO_333_35_A1,
  SWAP_322_TO_333_35_A2,
  SWAP_322_TO_333_35_A3,
  SWAP_322_TO_333_35_A4,
} from "./322/to333/35/fromPumpA";
import {
  SWAP_322_TO_333_35_B1,
  SWAP_322_TO_333_35_B2,
  SWAP_322_TO_333_35_B3,
  SWAP_322_TO_333_35_B4,
} from "./322/to333/35/fromPumpB";
import { SWAP_322_TO_333_115_A } from "./322/to333/115/fromPumpA";
import { SWAP_322_TO_333_115_B } from "./322/to333/115/fromPumpB";
import {
  SWAP_322_TO_334_35_A1,
  SWAP_322_TO_334_35_A2,
  SWAP_322_TO_334_35_A3,
  SWAP_322_TO_334_35_A4,
} from "./322/to334/35/fromPumpA";
import {
  SWAP_322_TO_334_35_B1,
  SWAP_322_TO_334_35_B2,
  SWAP_322_TO_334_35_B3,
  SWAP_322_TO_334_35_B4,
} from "./322/to334/35/fromPumpB";
import { SWAP_322_TO_334_115_A } from "./322/to334/115/fromPumpA";
import { SWAP_322_TO_334_115_B } from "./322/to334/115/fromPumpB";
import {
  SWAP_323_TO_322_35_A1,
  SWAP_323_TO_322_35_A2,
  SWAP_323_TO_322_35_A3,
  SWAP_323_TO_322_35_A4,
} from "./323/to322/35/fromPumpA";
import {
  SWAP_323_TO_322_35_B1,
  SWAP_323_TO_322_35_B2,
  SWAP_323_TO_322_35_B3,
  SWAP_323_TO_322_35_B4,
} from "./323/to322/35/fromPumpB";
import { SWAP_323_TO_322_115_A } from "./323/to322/115/fromPumpA";
import { SWAP_323_TO_322_115_B } from "./323/to322/115/fromPumpB";
import { SWAP_323_TO_324_115_B } from "./323/to324/115/fromPumpB";
import { SWAP_323_TO_325_115_B } from "./323/to325/115/fromPumpB";
import { SWAP_323_TO_326_115_B } from "./323/to326/115/fromPumpB";
import {
  SWAP_324_TO_323_35_A1,
  SWAP_324_TO_323_35_A2,
  SWAP_324_TO_323_35_A3,
  SWAP_324_TO_323_35_A4,
} from "./324/to323/35/fromPumpA";
import {
  SWAP_324_TO_323_35_B1,
  SWAP_324_TO_323_35_B2,
  SWAP_324_TO_323_35_B3,
  SWAP_324_TO_323_35_B4,
} from "./324/to323/35/fromPumpB";
import { SWAP_324_TO_323_115_A } from "./324/to323/115/fromPumpA";
import { SWAP_324_TO_323_115_B } from "./324/to323/115/fromPumpB";
import { SWAP_325_TO_324_115_B } from "./325/to324/115/fromPumpB";
import {
  SWAP_325_TO_324_35_A1,
  SWAP_325_TO_324_35_A2,
  SWAP_325_TO_324_35_A3,
  SWAP_325_TO_324_35_A4,
} from "./325/to324/35/fromPumpA";
import {
  SWAP_325_TO_324_35_B1,
  SWAP_325_TO_324_35_B2,
  SWAP_325_TO_324_35_B3,
  SWAP_325_TO_324_35_B4,
} from "./325/to324/35/fromPumpB";
import { SWAP_325_TO_324_115_A } from "./325/to324/115/fromPumpA";
import { SWAP_325_TO_322_115_B } from "./325/to322/115/fromPumpB";
import {
  SWAP_326_TO_325_35_A1,
  SWAP_326_TO_325_35_A2,
  SWAP_326_TO_325_35_A3,
  SWAP_326_TO_325_35_A4,
} from "./326/to325/35/fromPumpA";
import { SWAP_326_TO_325_115_A } from "./326/to325/115/fromPumpA";
import { SWAP_327_TO_323_115_B } from "./327/to323/115/fromPumpB";
import {
  SWAP_327_TO_323_35_B1,
  SWAP_327_TO_323_35_B2,
  SWAP_327_TO_323_35_B3,
  SWAP_327_TO_323_35_B4,
} from "./327/to323/35/fromPumpB";
import {
  SWAP_327_TO_324_35_B1,
  SWAP_327_TO_324_35_B2,
  SWAP_327_TO_324_35_B3,
  SWAP_327_TO_324_35_B4,
} from "./327/to324/35/fromPumpB";
import { SWAP_327_TO_324_115_B } from "./327/to324/115/fromPumpB";
import { SWAP_327_TO_325_115_B } from "./327/to325/115/fromPumpB";
import {
  SWAP_327_TO_326_35_A1,
  SWAP_327_TO_326_35_A2,
  SWAP_327_TO_326_35_A3,
  SWAP_327_TO_326_35_A4,
} from "./327/to326/35/fromPumpA";
import {
  SWAP_327_TO_325_35_B1,
  SWAP_327_TO_325_35_B2,
  SWAP_327_TO_325_35_B3,
  SWAP_327_TO_325_35_B4,
} from "./327/to325/35/fromPumpB";
import {
  SWAP_327_TO_326_35_B1,
  SWAP_327_TO_326_35_B2,
  SWAP_327_TO_326_35_B3,
  SWAP_327_TO_326_35_B4,
} from "./327/to326/35/fromPumpB";
import { SWAP_327_TO_326_115_B } from "./327/to326/115/fromPumpB";
import {
  SWAP_327_TO_329_35_B1,
  SWAP_327_TO_329_35_B2,
} from "./327/to329/35/fromPumpB";
import { SWAP_327_TO_329_115_B } from "./327/to329/115/fromPumpB";
import {
  SWAP_327_TO_330_35_B1,
  SWAP_327_TO_330_35_B2,
} from "./327/to330/35/fromPumpB";
import { SWAP_327_TO_330_115_B } from "./327/to330/115/fromPumpB";
import {
  SWAP_327_TO_330_35_A1,
  SWAP_327_TO_330_35_A2,
  SWAP_327_TO_330_35_A3,
  SWAP_327_TO_330_35_A4,
} from "./327/to330/35/fromPumpA";
import { SWAP_327_TO_330_115_A } from "./327/to330/115/fromPumpA";
import {
  SWAP_327_TO_331_35_B1,
  SWAP_327_TO_331_35_B2,
} from "./327/to331/35/fromPumpB";
import { SWAP_327_TO_331_115_B } from "./327/to331/115/fromPumpB";
import {
  SWAP_327_TO_332_35_B1,
  SWAP_327_TO_332_35_B2,
  SWAP_327_TO_332_35_B4,
} from "./327/to332/35/fromPumpB";
import { SWAP_327_TO_332_115_B } from "./327/to332/115/fromPumpB";
import {
  SWAP_327_TO_333_35_B1,
  SWAP_327_TO_333_35_B2,
  SWAP_327_TO_333_35_B4,
} from "./327/to333/35/fromPumpB";
import { SWAP_327_TO_333_115_B } from "./327/to333/115/fromPumpB";
import {
  SWAP_327_TO_334_35_B1,
  SWAP_327_TO_334_35_B2,
  SWAP_327_TO_334_35_B4,
} from "./327/to334/35/fromPumpB";
import { SWAP_327_TO_334_115_B } from "./327/to334/115/fromPumpB";
import {
  SWAP_328_TO_327_35_A1,
  SWAP_328_TO_327_35_A2,
  SWAP_328_TO_327_35_A3,
  SWAP_328_TO_327_35_A4,
} from "./328/to327/35/fromPumpA";
import { SWAP_328_TO_327_115_A } from "./328/to327/115/fromPumpA";
import {
  SWAP_329_TO_327_35_B1,
  SWAP_329_TO_327_35_B2,
  SWAP_329_TO_327_35_B3,
  SWAP_329_TO_327_35_B4,
} from "./329/to327/35/fromPumpB";
import { SWAP_329_TO_327_115_B } from "./329/to327/115/fromPumpB";
import {
  SWAP_329_TO_328_35_A1,
  SWAP_329_TO_328_35_A2,
  SWAP_329_TO_328_35_A3,
  SWAP_329_TO_328_35_A4,
} from "./329/to328/35/fromPumpA";
import {
  SWAP_329_TO_328_35_B1,
  SWAP_329_TO_328_35_B2,
  SWAP_329_TO_328_35_B3,
  SWAP_329_TO_328_35_B4,
} from "./329/to328/35/fromPumpB";
import { SWAP_329_TO_328_115_B } from "./329/to328/115/fromPumpB";
import { SWAP_329_TO_328_115_A } from "./329/to328/115/fromPumpA";
import {
  SWAP_329_TO_331_35_B1,
  SWAP_329_TO_331_35_B4,
} from "./329/to331/35/fromPumpB";
import { SWAP_329_TO_331_115_B } from "./329/to331/115/fromPumpB";
import { SWAP_329_TO_332_115_B } from "./329/to332/115/fromPumpB";
import { SWAP_329_TO_333_115_B } from "./329/to333/115/fromPumpB";
import { SWAP_329_TO_334_115_B } from "./329/to334/115/fromPumpB";
import {
  SWAP_330_TO_329_35_A1,
  SWAP_330_TO_329_35_A2,
  SWAP_330_TO_329_35_A3,
  SWAP_330_TO_329_35_A4,
} from "./330/to329/35/fromPumpA";
import { SWAP_330_TO_329_115_A } from "./330/to329/115/fromPumpA";
import {
  SWAP_331_TO_329_35_B1,
  SWAP_331_TO_329_35_B2,
  SWAP_331_TO_329_35_B3,
  SWAP_331_TO_329_35_B4,
} from "./331/to329/35/fromPumpB";
import {
  SWAP_331_TO_330_35_A1,
  SWAP_331_TO_330_35_A2,
  SWAP_331_TO_330_35_A3,
  SWAP_331_TO_330_35_A4,
} from "./331/to330/35/fromPumpA";
import {
  SWAP_331_TO_330_35_B1,
  SWAP_331_TO_330_35_B2,
  SWAP_331_TO_330_35_B3,
  SWAP_331_TO_330_35_B4,
} from "./331/to330/35/fromPumpB";
import { SWAP_331_TO_330_115_B } from "./331/to330/115/fromPumpB";
import { SWAP_331_TO_330_115_A } from "./331/to330/115/fromPumpA";
import { SWAP_332_TO_323_115_B } from "./332/to323/115/fromPumpB";
import { SWAP_332_TO_324_115_B } from "./332/to324/115/fromPumpB";
import { SWAP_332_TO_326_115_B } from "./332/to325/115/fromPumpB";
import {
  SWAP_332_TO_331_35_A1,
  SWAP_332_TO_331_35_A2,
  SWAP_332_TO_331_35_A3,
  SWAP_332_TO_331_35_A4,
} from "./332/to331/35/fromPumpA";
import {
  SWAP_332_TO_331_35_B1,
  SWAP_332_TO_331_35_B2,
  SWAP_332_TO_331_35_B3,
  SWAP_332_TO_331_35_B4,
} from "./332/to331/35/fromPumpB";
import { SWAP_332_TO_331_115_A } from "./332/to331/115/fromPumpA";
import { SWAP_332_TO_331_115_B } from "./332/to331/115/fromPumpB";
import {
  SWAP_333_TO_332_35_A1,
  SWAP_333_TO_332_35_A2,
  SWAP_333_TO_332_35_A3,
  SWAP_333_TO_332_35_A4,
} from "./333/to332/35/fromPumpA";
import { SWAP_333_TO_332_115_A } from "./333/to332/115/fromPumpA";
import { SWAP_334_TO_333_35_A1, SWAP_334_TO_333_35_A2, SWAP_334_TO_333_35_A3, SWAP_334_TO_333_35_A4 } from "./334/35/fromPumpA";
import { SWAP_334_TO_333_115_A } from "./334/115/fromPumpA";

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
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_332_35_B1,
            "H-2": SWAP_322_TO_332_35_B2,
            "H-3": SWAP_322_TO_332_35_B3,
            "H-4": SWAP_322_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_333_35_B1,
            "H-2": SWAP_322_TO_333_35_B2,
            "H-3": SWAP_322_TO_333_35_B3,
            "H-4": SWAP_322_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_334_35_B1,
            "H-2": SWAP_322_TO_334_35_B2,
            "H-3": SWAP_322_TO_334_35_B3,
            "H-4": SWAP_322_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-323": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_B,
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
            "Н-3": SWAP_323_TO_324_115_B,
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
            "Н-3": SWAP_323_TO_325_115_B,
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
            "Н-3": SWAP_323_TO_326_115_B,
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
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_332_35_B1,
            "H-2": SWAP_322_TO_332_35_B2,
            "H-3": SWAP_322_TO_332_35_B3,
            "H-4": SWAP_322_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_333_35_B1,
            "H-2": SWAP_322_TO_333_35_B2,
            "H-3": SWAP_322_TO_333_35_B3,
            "H-4": SWAP_322_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_334_35_B1,
            "H-2": SWAP_322_TO_334_35_B2,
            "H-3": SWAP_322_TO_334_35_B3,
            "H-4": SWAP_322_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-324": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_B1,
            "H-2": SWAP_324_TO_323_35_B2,
            "H-3": SWAP_324_TO_323_35_B3,
            "H-4": SWAP_324_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_B,
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
            "Н-3": SWAP_323_TO_325_115_B,
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
            "Н-3": SWAP_323_TO_326_115_B,
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
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_332_35_B1,
            "H-2": SWAP_322_TO_332_35_B2,
            "H-3": SWAP_322_TO_332_35_B3,
            "H-4": SWAP_322_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_333_35_B1,
            "H-2": SWAP_322_TO_333_35_B2,
            "H-3": SWAP_322_TO_333_35_B3,
            "H-4": SWAP_322_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_334_35_B1,
            "H-2": SWAP_322_TO_334_35_B2,
            "H-3": SWAP_322_TO_334_35_B3,
            "H-4": SWAP_322_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-325": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_B1,
            "H-2": SWAP_324_TO_323_35_B2,
            "H-3": SWAP_324_TO_323_35_B3,
            "H-4": SWAP_324_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_B1,
            "H-2": SWAP_325_TO_324_35_B2,
            "H-3": SWAP_325_TO_324_35_B3,
            "H-4": SWAP_325_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_B,
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
            "H-1": [],
            "H-4": [],
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
            "Н-3": [],
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
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_332_35_B1,
            "H-2": SWAP_322_TO_332_35_B2,
            "H-3": SWAP_322_TO_332_35_B3,
            "H-4": SWAP_322_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_333_35_B1,
            "H-2": SWAP_322_TO_333_35_B2,
            "H-3": SWAP_322_TO_333_35_B3,
            "H-4": SWAP_322_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_334_35_B1,
            "H-2": SWAP_322_TO_334_35_B2,
            "H-3": SWAP_322_TO_334_35_B3,
            "H-4": SWAP_322_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-326": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_B1,
            "H-2": SWAP_324_TO_323_35_B2,
            "H-3": SWAP_324_TO_323_35_B3,
            "H-4": SWAP_324_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_B1,
            "H-2": SWAP_325_TO_324_35_B2,
            "H-3": SWAP_325_TO_324_35_B3,
            "H-4": SWAP_325_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": [],
            "H-4": [],
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": [],
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
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_332_35_B1,
            "H-2": SWAP_322_TO_332_35_B2,
            "H-3": SWAP_322_TO_332_35_B3,
            "H-4": SWAP_322_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_333_35_B1,
            "H-2": SWAP_322_TO_333_35_B2,
            "H-3": SWAP_322_TO_333_35_B3,
            "H-4": SWAP_322_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_322_TO_334_35_B1,
            "H-2": SWAP_322_TO_334_35_B2,
            "H-3": SWAP_322_TO_334_35_B3,
            "H-4": SWAP_322_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-327": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_327_TO_326_115_B,
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
          pumps: [""],
          routes: {
            "H-1": [],
            "H-2": [],
            "H-3": [],
            "H-4": [],
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
          pumps: [""],
          routes: {
            "Н-3": [],
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
            "H-1": SWAP_327_TO_329_35_B1,
            "H-2": SWAP_327_TO_329_35_B2,
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
            "Н-3": SWAP_327_TO_329_115_B,
          },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_327_TO_330_35_A1,
            "H-2": SWAP_327_TO_330_35_A2,
            "H-3": SWAP_327_TO_330_35_A3,
            "H-4": SWAP_327_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_330_35_B1,
            "H-2": SWAP_327_TO_330_35_B2,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_330_115_B,
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
            "H-1": SWAP_327_TO_331_35_B1,
            "H-2": SWAP_327_TO_331_35_B2,
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
            "Н-3": SWAP_327_TO_331_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_332_35_B1,
            "H-2": SWAP_327_TO_332_35_B2,
            "H-4": SWAP_327_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_333_35_B1,
            "H-2": SWAP_327_TO_333_35_B2,
            "H-4": SWAP_327_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_334_35_B1,
            "H-2": SWAP_327_TO_334_35_B2,
            "H-4": SWAP_327_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-328": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_327_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {
            "H-1": [],
            "H-2": [],
            "H-3": [],
            "H-4": [],
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {
            "Н-3": [],
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
            "H-1": SWAP_327_TO_329_35_B1,
            "H-2": SWAP_327_TO_329_35_B2,
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
            "Н-3": SWAP_327_TO_329_115_B,
          },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_327_TO_330_35_A1,
            "H-2": SWAP_327_TO_330_35_A2,
            "H-3": SWAP_327_TO_330_35_A3,
            "H-4": SWAP_327_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_330_35_B1,
            "H-2": SWAP_327_TO_330_35_B2,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_330_115_B,
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
            "H-1": SWAP_327_TO_331_35_B1,
            "H-2": SWAP_327_TO_331_35_B2,
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
            "Н-3": SWAP_327_TO_331_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_332_35_B1,
            "H-2": SWAP_327_TO_332_35_B2,
            "H-4": SWAP_327_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_333_35_B1,
            "H-2": SWAP_327_TO_333_35_B2,
            "H-4": SWAP_327_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_334_35_B1,
            "H-2": SWAP_327_TO_334_35_B2,
            "H-4": SWAP_327_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-329": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_327_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_329_TO_327_35_B1,
            "H-2": SWAP_329_TO_327_35_B2,
            "H-3": SWAP_329_TO_327_35_B3,
            "H-4": SWAP_329_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_329_TO_328_35_A1,
            "H-2": SWAP_329_TO_328_35_A2,
            "H-3": SWAP_329_TO_328_35_A3,
            "H-4": SWAP_329_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_329_TO_328_35_B1,
            "H-2": SWAP_329_TO_328_35_B2,
            "H-3": SWAP_329_TO_328_35_B3,
            "H-4": SWAP_329_TO_328_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_B,
          },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_327_TO_330_35_A1,
            "H-2": SWAP_327_TO_330_35_A2,
            "H-3": SWAP_327_TO_330_35_A3,
            "H-4": SWAP_327_TO_330_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_330_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
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
            "H-1": SWAP_329_TO_331_35_B1,
            "H-4": SWAP_329_TO_331_35_B4,
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
            "Н-3": SWAP_329_TO_331_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_332_35_B1,
            "H-4": SWAP_327_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_333_35_B1,

            "H-4": SWAP_327_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_334_35_B1,

            "H-4": SWAP_327_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-330": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_327_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_329_TO_327_35_B1,
            "H-2": SWAP_329_TO_327_35_B2,
            "H-3": SWAP_329_TO_327_35_B3,
            "H-4": SWAP_329_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_329_TO_328_35_A1,
            "H-2": SWAP_329_TO_328_35_A2,
            "H-3": SWAP_329_TO_328_35_A3,
            "H-4": SWAP_329_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_329_TO_328_35_B1,
            "H-2": SWAP_329_TO_328_35_B2,
            "H-3": SWAP_329_TO_328_35_B3,
            "H-4": SWAP_329_TO_328_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_B,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_330_TO_329_35_A1,
            "H-2": SWAP_330_TO_329_35_A2,
            "H-3": SWAP_330_TO_329_35_A3,
            "H-4": SWAP_330_TO_329_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_330_TO_329_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
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
            "H-1": SWAP_329_TO_331_35_B1,
            "H-4": SWAP_329_TO_331_35_B4,
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
            "Н-3": SWAP_329_TO_331_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_332_35_B1,
            "H-4": SWAP_327_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_333_35_B1,

            "H-4": SWAP_327_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_334_35_B1,

            "H-4": SWAP_327_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-331": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_327_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_329_TO_327_35_B1,
            "H-2": SWAP_329_TO_327_35_B2,
            "H-3": SWAP_329_TO_327_35_B3,
            "H-4": SWAP_329_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_329_TO_328_35_A1,
            "H-2": SWAP_329_TO_328_35_A2,
            "H-3": SWAP_329_TO_328_35_A3,
            "H-4": SWAP_329_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_329_TO_328_35_B1,
            "H-2": SWAP_329_TO_328_35_B2,
            "H-3": SWAP_329_TO_328_35_B3,
            "H-4": SWAP_329_TO_328_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_B,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_330_TO_329_35_A1,
            "H-2": SWAP_330_TO_329_35_A2,
            "H-3": SWAP_330_TO_329_35_A3,
            "H-4": SWAP_330_TO_329_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_329_35_B1,
            "H-2": SWAP_331_TO_329_35_B2,
            "H-3": SWAP_331_TO_329_35_B3,
            "H-4": SWAP_331_TO_329_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_330_TO_329_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: { "Н-3": SWAP_322_TO_329_115_B },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_331_TO_330_35_A1,
            "H-2": SWAP_331_TO_330_35_A2,
            "H-3": SWAP_331_TO_330_35_A3,
            "H-4": SWAP_331_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_330_35_B1,
            "H-2": SWAP_331_TO_330_35_B2,
            "H-3": SWAP_331_TO_330_35_B3,
            "H-4": SWAP_331_TO_330_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_332_35_A1,
            "H-2": SWAP_322_TO_332_35_A2,
            "H-3": SWAP_322_TO_332_35_A3,
            "H-4": SWAP_322_TO_332_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_332_35_B1,
            "H-4": SWAP_327_TO_332_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_332_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_332_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_333_35_B1,

            "H-4": SWAP_327_TO_333_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_333_115_B,
          },
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: ["H-1"],
          routes: {
            "H-1": SWAP_327_TO_334_35_B1,

            "H-4": SWAP_327_TO_334_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_334_115_B,
          },
        },
      },
    },
  },
  "E-332": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_332_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_329_TO_327_35_B1,
            "H-2": SWAP_329_TO_327_35_B2,
            "H-3": SWAP_329_TO_327_35_B3,
            "H-4": SWAP_329_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_329_TO_328_35_A1,
            "H-2": SWAP_329_TO_328_35_A2,
            "H-3": SWAP_329_TO_328_35_A3,
            "H-4": SWAP_329_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_329_TO_328_35_B1,
            "H-2": SWAP_329_TO_328_35_B2,
            "H-3": SWAP_329_TO_328_35_B3,
            "H-4": SWAP_329_TO_328_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_B,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_330_TO_329_35_A1,
            "H-2": SWAP_330_TO_329_35_A2,
            "H-3": SWAP_330_TO_329_35_A3,
            "H-4": SWAP_330_TO_329_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_329_35_B1,
            "H-2": SWAP_331_TO_329_35_B2,
            "H-3": SWAP_331_TO_329_35_B3,
            "H-4": SWAP_331_TO_329_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_330_TO_329_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: { "Н-3": SWAP_322_TO_329_115_B },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_331_TO_330_35_A1,
            "H-2": SWAP_331_TO_330_35_A2,
            "H-3": SWAP_331_TO_330_35_A3,
            "H-4": SWAP_331_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_330_35_B1,
            "H-2": SWAP_331_TO_330_35_B2,
            "H-3": SWAP_331_TO_330_35_B3,
            "H-4": SWAP_331_TO_330_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_B,
          },
        },
      },
    },
    "E-331": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_332_TO_331_35_A1,
            "H-2": SWAP_332_TO_331_35_A2,
            "H-3": SWAP_332_TO_331_35_A3,
            "H-4": SWAP_332_TO_331_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_332_TO_331_35_B1,
            "H-2": SWAP_332_TO_331_35_B2,
            "H-3": SWAP_332_TO_331_35_B3,
            "H-4": SWAP_332_TO_331_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_331_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_331_115_B,
          },
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_333_35_A1,
            "H-2": SWAP_322_TO_333_35_A2,
            "H-3": SWAP_322_TO_333_35_A3,
            "H-4": SWAP_322_TO_333_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_333_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
    },
  },
  "E-333": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_332_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_329_TO_327_35_B1,
            "H-2": SWAP_329_TO_327_35_B2,
            "H-3": SWAP_329_TO_327_35_B3,
            "H-4": SWAP_329_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_329_TO_328_35_A1,
            "H-2": SWAP_329_TO_328_35_A2,
            "H-3": SWAP_329_TO_328_35_A3,
            "H-4": SWAP_329_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_329_TO_328_35_B1,
            "H-2": SWAP_329_TO_328_35_B2,
            "H-3": SWAP_329_TO_328_35_B3,
            "H-4": SWAP_329_TO_328_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_B,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_330_TO_329_35_A1,
            "H-2": SWAP_330_TO_329_35_A2,
            "H-3": SWAP_330_TO_329_35_A3,
            "H-4": SWAP_330_TO_329_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_329_35_B1,
            "H-2": SWAP_331_TO_329_35_B2,
            "H-3": SWAP_331_TO_329_35_B3,
            "H-4": SWAP_331_TO_329_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_330_TO_329_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: { "Н-3": SWAP_322_TO_329_115_B },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_331_TO_330_35_A1,
            "H-2": SWAP_331_TO_330_35_A2,
            "H-3": SWAP_331_TO_330_35_A3,
            "H-4": SWAP_331_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_330_35_B1,
            "H-2": SWAP_331_TO_330_35_B2,
            "H-3": SWAP_331_TO_330_35_B3,
            "H-4": SWAP_331_TO_330_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_B,
          },
        },
      },
    },
    "E-331": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_332_TO_331_35_A1,
            "H-2": SWAP_332_TO_331_35_A2,
            "H-3": SWAP_332_TO_331_35_A3,
            "H-4": SWAP_332_TO_331_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_332_TO_331_35_B1,
            "H-2": SWAP_332_TO_331_35_B2,
            "H-3": SWAP_332_TO_331_35_B3,
            "H-4": SWAP_332_TO_331_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_331_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_331_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_333_TO_332_35_A1,
            "H-2": SWAP_333_TO_332_35_A2,
            "H-3": SWAP_333_TO_332_35_A3,
            "H-4": SWAP_333_TO_332_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_333_TO_332_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
    },
    "E-334": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_322_TO_334_35_A1,
            "H-2": SWAP_322_TO_334_35_A2,
            "H-3": SWAP_322_TO_334_35_A3,
            "H-4": SWAP_322_TO_334_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_322_TO_334_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
    },
  },
  "E-334": {
    "E-322": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_323_TO_322_35_A1,
            "H-2": SWAP_323_TO_322_35_A2,
            "H-3": SWAP_323_TO_322_35_A3,
            "H-4": SWAP_323_TO_322_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_323_TO_322_35_B1,
            "H-2": SWAP_323_TO_322_35_B2,
            "H-3": SWAP_323_TO_322_35_B3,
            "H-4": SWAP_323_TO_322_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_323_TO_322_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_322_115_B,
          },
        },
      },
    },
    "E-323": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_324_TO_323_35_A1,
            "H-2": SWAP_324_TO_323_35_A2,
            "H-3": SWAP_324_TO_323_35_A3,
            "H-4": SWAP_324_TO_323_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_323_35_B1,
            "H-2": SWAP_327_TO_323_35_B2,
            "H-3": SWAP_327_TO_323_35_B3,
            "H-4": SWAP_327_TO_323_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_324_TO_323_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_323_115_B,
          },
        },
      },
    },
    "E-324": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_325_TO_324_35_A1,
            "H-2": SWAP_325_TO_324_35_A2,
            "H-3": SWAP_325_TO_324_35_A3,
            "H-4": SWAP_325_TO_324_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_324_35_B1,
            "H-2": SWAP_327_TO_324_35_B2,
            "H-3": SWAP_327_TO_324_35_B3,
            "H-4": SWAP_327_TO_324_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_325_TO_324_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_324_115_B,
          },
        },
      },
    },
    "E-325": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_326_TO_325_35_A1,
            "H-2": SWAP_326_TO_325_35_A2,
            "H-3": SWAP_326_TO_325_35_A3,
            "H-4": SWAP_326_TO_325_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_325_35_B1,
            "H-2": SWAP_327_TO_325_35_B2,
            "H-3": SWAP_327_TO_325_35_B3,
            "H-4": SWAP_327_TO_325_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_326_TO_325_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_327_TO_325_115_B,
          },
        },
      },
    },
    "E-326": {
      "910-35": {
        А: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_A1,
            "H-2": SWAP_327_TO_326_35_A2,
            "H-3": SWAP_327_TO_326_35_A3,
            "H-4": SWAP_327_TO_326_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_327_TO_326_35_B1,
            "H-2": SWAP_327_TO_326_35_B2,
            "H-3": SWAP_327_TO_326_35_B3,
            "H-4": SWAP_327_TO_326_35_B4,
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
            "Н-3": SWAP_332_TO_326_115_B,
          },
        },
      },
    },
    "E-327": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_328_TO_327_35_A1,
            "H-2": SWAP_328_TO_327_35_A2,
            "H-3": SWAP_328_TO_327_35_A3,
            "H-4": SWAP_328_TO_327_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_329_TO_327_35_B1,
            "H-2": SWAP_329_TO_327_35_B2,
            "H-3": SWAP_329_TO_327_35_B3,
            "H-4": SWAP_329_TO_327_35_B4,
          },
        },
      },

      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_328_TO_327_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_327_115_B,
          },
        },
      },
    },
    "E-328": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_329_TO_328_35_A1,
            "H-2": SWAP_329_TO_328_35_A2,
            "H-3": SWAP_329_TO_328_35_A3,
            "H-4": SWAP_329_TO_328_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_329_TO_328_35_B1,
            "H-2": SWAP_329_TO_328_35_B2,
            "H-3": SWAP_329_TO_328_35_B3,
            "H-4": SWAP_329_TO_328_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_329_TO_328_115_B,
          },
        },
      },
    },
    "E-329": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_330_TO_329_35_A1,
            "H-2": SWAP_330_TO_329_35_A2,
            "H-3": SWAP_330_TO_329_35_A3,
            "H-4": SWAP_330_TO_329_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_329_35_B1,
            "H-2": SWAP_331_TO_329_35_B2,
            "H-3": SWAP_331_TO_329_35_B3,
            "H-4": SWAP_331_TO_329_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_330_TO_329_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: { "Н-3": SWAP_322_TO_329_115_B },
        },
      },
    },
    "E-330": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_331_TO_330_35_A1,
            "H-2": SWAP_331_TO_330_35_A2,
            "H-3": SWAP_331_TO_330_35_A3,
            "H-4": SWAP_331_TO_330_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_331_TO_330_35_B1,
            "H-2": SWAP_331_TO_330_35_B2,
            "H-3": SWAP_331_TO_330_35_B3,
            "H-4": SWAP_331_TO_330_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_331_TO_330_115_B,
          },
        },
      },
    },
    "E-331": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_332_TO_331_35_A1,
            "H-2": SWAP_332_TO_331_35_A2,
            "H-3": SWAP_332_TO_331_35_A3,
            "H-4": SWAP_332_TO_331_35_A4,
          },
        },
        Б: {
          pumps: ["H-4"],
          routes: {
            "H-1": SWAP_332_TO_331_35_B1,
            "H-2": SWAP_332_TO_331_35_B2,
            "H-3": SWAP_332_TO_331_35_B3,
            "H-4": SWAP_332_TO_331_35_B4,
          },
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_331_115_A,
          },
        },
        Б: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_332_TO_331_115_B,
          },
        },
      },
    },
    "E-332": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_333_TO_332_35_A1,
            "H-2": SWAP_333_TO_332_35_A2,
            "H-3": SWAP_333_TO_332_35_A3,
            "H-4": SWAP_333_TO_332_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_333_TO_332_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
    },
    "E-333": {
      "910-35": {
        А: {
          pumps: ["H-2"],
          routes: {
            "H-1": SWAP_334_TO_333_35_A1,
            "H-2": SWAP_334_TO_333_35_A2,
            "H-3": SWAP_334_TO_333_35_A3,
            "H-4": SWAP_334_TO_333_35_A4,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
        },
      },
      "910-115": {
        А: {
          pumps: ["Н-3"],
          routes: {
            "Н-3": SWAP_334_TO_333_115_A,
          },
        },
        Б: {
          pumps: [""],
          routes: {},
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

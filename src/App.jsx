import { memo, useCallback, useEffect, useRef } from "react";
import parkStore from "./store/parkStore";

import TopLevel from "./components/Top/TopLevel";
import TanksLevel from "./components/Middle/TanksLevel";
import InterparkCommunication from "./components/Middle/InterparkCommunication";
import Station91035 from "./components/Bottom/Station91035";
import Reck from "./components/Reck";
import Station910115 from "./components/Bottom/Station910115";
import Switcher from "./components/Switcher";
import SimpleText from "./components/SimpleText";
import {
  FROM_322_TO_115_H1,
  FROM_322_TO_115_H2,
  FROM_322_TO_115_H3,
  FROM_322_TO_115_H4,
  FROM_322_TO_115_H5,
  FROM_322_TO_324AND325H1B_910_35,
  FROM_322_TO_324AND325H4B_910_35,
  FROM_322_TO_35_H1,
  FROM_322_TO_35_H2,
  FROM_322_TO_35_H3,
  FROM_322_TO_35_H4,
  MAZUT_TRANSFER_GPN,
  MAZUT_TRANSFER_PST,
} from "./data/activeElements/transferElements322";
import {
  FROM_323_TO_115_H1,
  FROM_323_TO_115_H2,
  FROM_323_TO_115_H3,
  FROM_323_TO_115_H4,
  FROM_323_TO_115_H5,
  FROM_323_TO_35_H1,
  FROM_323_TO_35_H2,
  FROM_323_TO_35_H3,
  FROM_323_TO_35_H4,
  SWAP_FROM_323_TO_322_115,
  SWAP_FROM_323_TO_324_115,
  SWAP_FROM_323_TO_324_35B1,
  SWAP_FROM_323_TO_324_35B4,
} from "./data/activeElements/transferElements323";
import {
  FROM_324_TO_115_H1,
  FROM_324_TO_115_H2,
  FROM_324_TO_115_H3,
  FROM_324_TO_115_H4,
  FROM_324_TO_115_H5,
  FROM_324_TO_35_H1,
  FROM_324_TO_35_H2,
  FROM_324_TO_35_H3,
  FROM_324_TO_35_H4,
  SWAP_FROM_324_TO_322_115B,
  SWAP_FROM_324_TO_325_35B1,
  SWAP_FROM_324_TO_325_35B4,
} from "./data/activeElements/transferElements324";
import {
  FROM_325_TO_115_H1,
  FROM_325_TO_115_H2,
  FROM_325_TO_115_H3,
  FROM_325_TO_115_H4,
  FROM_325_TO_115_H5,
  FROM_325_TO_35_H1,
  FROM_325_TO_35_H2,
  FROM_325_TO_35_H3,
  FROM_325_TO_35_H4,
  SWAP_FROM_325_TO_322_115B,
} from "./data/activeElements/transferElements325";
import {
  FROM_326_TO_115_H1,
  FROM_326_TO_115_H2,
  FROM_326_TO_115_H3,
  FROM_326_TO_115_H4,
  FROM_326_TO_115_H5,
  FROM_326_TO_35_H1,
  FROM_326_TO_35_H2,
  FROM_326_TO_35_H3,
  FROM_326_TO_35_H4,
  SWAP_FROM_326_TO_322_115B,
} from "./data/activeElements/transferElements326";
import {
  FROM_327_TO_115_H1,
  FROM_327_TO_115_H2,
  FROM_327_TO_115_H3,
  FROM_327_TO_115_H4,
  FROM_327_TO_115_H5,
  FROM_327_TO_35_H1,
  FROM_327_TO_35_H2,
  FROM_327_TO_35_H3,
  FROM_327_TO_35_H4,
  SWAP_FROM_327_TO_329_35B1,
  SWAP_FROM_327_TO_329_35B2,
  SWAP_FROM_327_TO_332_35B1,
  SWAP_FROM_327_TO_332_35B2,
} from "./data/activeElements/transferElements327";
import {
  FROM_328_TO_115_H1,
  FROM_328_TO_115_H2,
  FROM_328_TO_115_H3,
  FROM_328_TO_115_H4,
  FROM_328_TO_115_H5,
  FROM_328_TO_35_H1,
  FROM_328_TO_35_H2,
  FROM_328_TO_35_H3,
  FROM_328_TO_35_H4,
  SWAP_FROM_328_TO_329_35B1,
  SWAP_FROM_328_TO_329_35B2,
} from "./data/activeElements/transferElements328";
import {
  FROM_329_TO_115_H1,
  FROM_329_TO_115_H2,
  FROM_329_TO_115_H3,
  FROM_329_TO_115_H4,
  FROM_329_TO_115_H5,
  FROM_329_TO_35_H1,
  FROM_329_TO_35_H2,
  FROM_329_TO_35_H3,
  FROM_329_TO_35_H4,
  SWAP_FROM_329_TO_327_115B,
  SWAP_FROM_329_TO_331_35B1,
  SWAP_FROM_329_TO_331_35B4,
} from "./data/activeElements/transferElements329";
import {
  FROM_330_TO_115_H1,
  FROM_330_TO_115_H2,
  FROM_330_TO_115_H3,
  FROM_330_TO_115_H4,
  FROM_330_TO_115_H5,
  FROM_330_TO_35_H1,
  FROM_330_TO_35_H2,
  FROM_330_TO_35_H3,
  FROM_330_TO_35_H4,
  SWAP_FROM_330_TO_327_115B,
  SWAP_FROM_330_TO_331_35B1,
  SWAP_FROM_330_TO_331_35B4,
} from "./data/activeElements/transferElements330";
import {
  FROM_331_TO_115_H1,
  FROM_331_TO_115_H2,
  FROM_331_TO_115_H3,
  FROM_331_TO_115_H4,
  FROM_331_TO_115_H5,
  FROM_331_TO_35_H1,
  FROM_331_TO_35_H2,
  FROM_331_TO_35_H3,
  FROM_331_TO_35_H4,
  SWAP_FROM_331_TO_327_115B,
  SWAP_FROM_331_TO_329_115B,
  SWAP_FROM_331_TO_329_B_H1,
  SWAP_FROM_331_TO_329_B_H2,
  SWAP_FROM_331_TO_329_B_H3,
  SWAP_FROM_331_TO_329_B_H4,
} from "./data/activeElements/transferElements331";
import {
  FROM_332_TO_115_H1,
  FROM_332_TO_115_H2,
  FROM_332_TO_115_H3,
  FROM_332_TO_115_H4,
  FROM_332_TO_115_H5,
  FROM_332_TO_35_H1,
  FROM_332_TO_35_H2,
  FROM_332_TO_35_H3,
  FROM_332_TO_35_H4,
  SWAP_FROM_332_TO_322_115_H3A,
  SWAP_FROM_332_TO_322_115_H3B,
  SWAP_FROM_332_TO_327_115B,
} from "./data/activeElements/transferElements332";
import {
  FROM_333_TO_115_H1,
  FROM_333_TO_115_H2,
  FROM_333_TO_115_H3,
  FROM_333_TO_115_H4,
  FROM_333_TO_115_H5,
  FROM_333_TO_35_H1,
  FROM_333_TO_35_H2,
  FROM_333_TO_35_H3,
  FROM_333_TO_35_H4,
  SWAP_FROM_333_TO_322_115_H3A,
} from "./data/activeElements/transferElements333";
import {
  FROM_334_TO_115_H1,
  FROM_334_TO_115_H2,
  FROM_334_TO_115_H3,
  FROM_334_TO_115_H4,
  FROM_334_TO_115_H5,
  FROM_334_TO_35_H1,
  FROM_334_TO_35_H2,
  FROM_334_TO_35_H3,
  FROM_334_TO_35_H4,
  SWAP_FROM_334_TO_322_115_H3A,
} from "./data/activeElements/transferElements334";
import {
  PST_TO_910_100_N1,
  PST_TO_910_100_N2,
  PST_TO_910_100_N3,
  PST_TO_910_100_N4,
  PST_TO_910_100_N5,
  PST_TO_910_10_H1,
  PST_TO_910_10_H2,
  PST_TO_910_10_H3,
  PST_TO_910_10_H4,
  PST_TO_910_40_H1,
  PST_TO_910_40_H2,
  PST_TO_910_40_H3,
  PST_TO_910_40_H4,
  ZGP_TO_910_100_N1,
  ZGP_TO_910_100_N2,
  ZGP_TO_910_100_N3,
  ZGP_TO_910_100_N4,
  ZGP_TO_910_100_N5,
  ZGP_TO_910_10_H1,
  ZGP_TO_910_10_H2,
  ZGP_TO_910_10_H3,
  ZGP_TO_910_10_H4,
  ZGP_TO_910_40_H1,
  ZGP_TO_910_40_H2,
  ZGP_TO_910_40_H3,
  ZGP_TO_910_40_H4,
} from "./data/activeElementsAfterPump/transferAfterPump";

import { useSwapConfiguration } from "./data/swap/swapConfig";
import Plugs from "./components/Plugs";
import LinesTitle from "./components/LinesTitle";
import {
  REVERSE910100_326_88,
  REVERSE910100_326_89,
  REVERSE910100_326_90,
  REVERSE_910100_326_88_AFTER_PUMP,
  REVERSE_910100_330_88_AFTER_PUMP,
  REVERSE_91010_326_61,
  REVERSE_91010_326_62,
  REVERSE_91010_326_62_AFTER_PUMP,
  REVERSE_91010_330_61,
  REVERSE_91010_330_62,
  REVERSE_91040_326_63,
  REVERSE_91040_326_64,
  REVERSE_91040_330_62,
  REVERSE_91040_330_62_AFTER_PUMP,
  REVERSE_91040_330_64,
} from "./data/swap/reverseSwap/reverse";

/* ========================================================================== *
 *  Константы и таблицы соответствий (создаются один раз при загрузке модуля)  *
 * ========================================================================== */

// ВАЖНО: в проекте используются две раскладки.
//  - станция 910-35  -> латинская "H"
//  - станция 910-115 -> кириллическая "Н"
// Все ключи насосов и линий определены ТОЛЬКО здесь, ниже используются
// через константы, чтобы случайно не перепутать раскладку.
const H1 = "H-1";
const H2 = "H-2";
const H3 = "H-3";
const H4 = "H-4";

const N1 = "Н-1";
const N2 = "Н-2";
const N3 = "Н-3";
const N4 = "Н-4";
const N5 = "Н-5";

const LINE_A = "А";
const LINE_B = "Б";

const ST_35 = "910-35";
const ST_115 = "910-115";

const PUMPS_35 = [H1, H2, H3, H4];
const PUMPS_115 = [N1, N2, N3, N4, N5];
// Порядок важен: сначала 35 (H-1..H-4), затем 115 (Н-1..Н-5)
const PUMP_KEYS = [...PUMPS_35, ...PUMPS_115];

const PST_TANK = new Set([
  "E-322",
  "E-323",
  "E-324",
  "E-325",
  "E-326",
  "E-332",
  "E-333",
  "E-334",
]);

const ZGP_TANK = new Set(["E-327", "E-328", "E-329", "E-330", "E-331"]);

const ALL_TANKS = [
  "E-322",
  "E-323",
  "E-324",
  "E-325",
  "E-326",
  "E-327",
  "E-328",
  "E-329",
  "E-330",
  "E-331",
  "E-332",
  "E-333",
  "E-334",
];
const allTanksExcept = (tank) => ALL_TANKS.filter((t) => t !== tank);

// Собирает объект { ключ насоса: массив элементов }
const byKeys = (keys, arrays) => {
  const map = {};
  keys.forEach((key, i) => {
    map[key] = arrays[i];
  });
  return map;
};

const direct = (t35, t115) => ({
  ...byKeys(PUMPS_35, t35),
  ...byKeys(PUMPS_115, t115),
});

// Прямая подача: резервуар -> станции (по активным насосам)
const DIRECT = {
  "E-322": direct(
    [FROM_322_TO_35_H1, FROM_322_TO_35_H2, FROM_322_TO_35_H3, FROM_322_TO_35_H4],
    [
      FROM_322_TO_115_H1,
      FROM_322_TO_115_H2,
      FROM_322_TO_115_H3,
      FROM_322_TO_115_H4,
      FROM_322_TO_115_H5,
    ]
  ),
  "E-323": direct(
    [FROM_323_TO_35_H1, FROM_323_TO_35_H2, FROM_323_TO_35_H3, FROM_323_TO_35_H4],
    [
      FROM_323_TO_115_H1,
      FROM_323_TO_115_H2,
      FROM_323_TO_115_H3,
      FROM_323_TO_115_H4,
      FROM_323_TO_115_H5,
    ]
  ),
  "E-324": direct(
    [FROM_324_TO_35_H1, FROM_324_TO_35_H2, FROM_324_TO_35_H3, FROM_324_TO_35_H4],
    [
      FROM_324_TO_115_H1,
      FROM_324_TO_115_H2,
      FROM_324_TO_115_H3,
      FROM_324_TO_115_H4,
      FROM_324_TO_115_H5,
    ]
  ),
  "E-325": direct(
    [FROM_325_TO_35_H1, FROM_325_TO_35_H2, FROM_325_TO_35_H3, FROM_325_TO_35_H4],
    [
      FROM_325_TO_115_H1,
      FROM_325_TO_115_H2,
      FROM_325_TO_115_H3,
      FROM_325_TO_115_H4,
      FROM_325_TO_115_H5,
    ]
  ),
  "E-326": direct(
    [FROM_326_TO_35_H1, FROM_326_TO_35_H2, FROM_326_TO_35_H3, FROM_326_TO_35_H4],
    [
      FROM_326_TO_115_H1,
      FROM_326_TO_115_H2,
      FROM_326_TO_115_H3,
      FROM_326_TO_115_H4,
      FROM_326_TO_115_H5,
    ]
  ),
  "E-327": direct(
    [FROM_327_TO_35_H1, FROM_327_TO_35_H2, FROM_327_TO_35_H3, FROM_327_TO_35_H4],
    [
      FROM_327_TO_115_H1,
      FROM_327_TO_115_H2,
      FROM_327_TO_115_H3,
      FROM_327_TO_115_H4,
      FROM_327_TO_115_H5,
    ]
  ),
  "E-328": direct(
    [FROM_328_TO_35_H1, FROM_328_TO_35_H2, FROM_328_TO_35_H3, FROM_328_TO_35_H4],
    [
      FROM_328_TO_115_H1,
      FROM_328_TO_115_H2,
      FROM_328_TO_115_H3,
      FROM_328_TO_115_H4,
      FROM_328_TO_115_H5,
    ]
  ),
  "E-329": direct(
    [FROM_329_TO_35_H1, FROM_329_TO_35_H2, FROM_329_TO_35_H3, FROM_329_TO_35_H4],
    [
      FROM_329_TO_115_H1,
      FROM_329_TO_115_H2,
      FROM_329_TO_115_H3,
      FROM_329_TO_115_H4,
      FROM_329_TO_115_H5,
    ]
  ),
  "E-330": direct(
    [FROM_330_TO_35_H1, FROM_330_TO_35_H2, FROM_330_TO_35_H3, FROM_330_TO_35_H4],
    [
      FROM_330_TO_115_H1,
      FROM_330_TO_115_H2,
      FROM_330_TO_115_H3,
      FROM_330_TO_115_H4,
      FROM_330_TO_115_H5,
    ]
  ),
  "E-331": direct(
    [FROM_331_TO_35_H1, FROM_331_TO_35_H2, FROM_331_TO_35_H3, FROM_331_TO_35_H4],
    [
      FROM_331_TO_115_H1,
      FROM_331_TO_115_H2,
      FROM_331_TO_115_H3,
      FROM_331_TO_115_H4,
      FROM_331_TO_115_H5,
    ]
  ),
  "E-332": direct(
    [FROM_332_TO_35_H1, FROM_332_TO_35_H2, FROM_332_TO_35_H3, FROM_332_TO_35_H4],
    [
      FROM_332_TO_115_H1,
      FROM_332_TO_115_H2,
      FROM_332_TO_115_H3,
      FROM_332_TO_115_H4,
      FROM_332_TO_115_H5,
    ]
  ),
  "E-333": direct(
    [FROM_333_TO_35_H1, FROM_333_TO_35_H2, FROM_333_TO_35_H3, FROM_333_TO_35_H4],
    [
      FROM_333_TO_115_H1,
      FROM_333_TO_115_H2,
      FROM_333_TO_115_H3,
      FROM_333_TO_115_H4,
      FROM_333_TO_115_H5,
    ]
  ),
  "E-334": direct(
    [FROM_334_TO_35_H1, FROM_334_TO_35_H2, FROM_334_TO_35_H3, FROM_334_TO_35_H4],
    [
      FROM_334_TO_115_H1,
      FROM_334_TO_115_H2,
      FROM_334_TO_115_H3,
      FROM_334_TO_115_H4,
      FROM_334_TO_115_H5,
    ]
  ),
};

/*
 * SWAP-правила. Порядок правил внутри одного резервуара сохранён из
 * исходного кода: если подходят несколько правил, побеждает ПОСЛЕДНЕЕ
 * (в оригинале каждый следующий addActiveElement перезаписывал предыдущий).
 *
 * { from, to: [...], line, stations: [...], pumps: { ключ насоса: массив } }
 */
const BOTH_STATIONS = [ST_35, ST_115];

const SWAP_RULES_LIST = [
  // ---- E-322
  {
    from: "E-322",
    to: ["E-324", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: FROM_322_TO_324AND325H1B_910_35,
      [H4]: FROM_322_TO_324AND325H4B_910_35,
    },
  },

  // ---- E-323
  {
    from: "E-323",
    to: ["E-322"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_323_TO_322_115 },
  },
  {
    from: "E-323",
    to: ["E-324", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_323_TO_324_35B1,
      [H4]: SWAP_FROM_323_TO_324_35B4,
    },
  },
  {
    from: "E-323",
    to: ["E-324", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_323_TO_324_115 },
  },

  // ---- E-324
  {
    from: "E-324",
    to: ["E-322", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_324_TO_322_115B },
  },
  {
    from: "E-324",
    to: ["E-325", "E-326"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_324_TO_325_35B1,
      [H4]: SWAP_FROM_324_TO_325_35B4,
    },
  },

  // ---- E-325
  {
    from: "E-325",
    to: ["E-322", "E-326"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_325_TO_322_115B },
  },
  {
    // E-325 -> E-326: обнуляет активные элементы (как в оригинале)
    from: "E-325",
    to: ["E-326"],
    line: LINE_B,
    stations: BOTH_STATIONS,
    pumps: {},
  },

  // ---- E-326
  {
    from: "E-326",
    to: ["E-322"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_326_TO_322_115B },
  },
  {
    // E-326 -> E-325: обнуляет активные элементы (как в оригинале)
    from: "E-326",
    to: ["E-325"],
    line: LINE_B,
    stations: BOTH_STATIONS,
    pumps: {},
  },

  // ---- E-327
  {
    from: "E-327",
    to: ["E-328"],
    line: LINE_B,
    stations: BOTH_STATIONS,
    pumps: {},
  },
  {
    from: "E-327",
    to: ["E-329", "E-330", "E-331"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_327_TO_329_35B1,
      [H2]: SWAP_FROM_327_TO_329_35B2,
    },
  },
  {
    from: "E-327",
    to: ["E-332", "E-333", "E-334"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_327_TO_332_35B1,
      [H2]: SWAP_FROM_327_TO_332_35B2,
      [H4]: FROM_327_TO_35_H4,
    },
  },

  // ---- E-328
  {
    from: "E-328",
    to: ["E-329", "E-330", "E-331"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_328_TO_329_35B1,
      [H2]: SWAP_FROM_328_TO_329_35B2,
    },
  },

  // ---- E-329
  {
    from: "E-329",
    to: ["E-331", "E-332", "E-333", "E-334"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_329_TO_331_35B1,
      [H4]: SWAP_FROM_329_TO_331_35B4,
    },
  },
  {
    from: "E-329",
    to: ["E-327", "E-328"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_329_TO_327_115B },
  },

  // ---- E-330
  {
    from: "E-330",
    to: ["E-327", "E-328"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_330_TO_327_115B },
  },
  {
    from: "E-330",
    to: ["E-331", "E-332", "E-333", "E-334"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_330_TO_331_35B1,
      [H4]: SWAP_FROM_330_TO_331_35B4,
    },
  },

  // ---- E-331
  {
    from: "E-331",
    to: ["E-327", "E-328"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_331_TO_327_115B },
  },
  {
    from: "E-331",
    to: ["E-329", "E-330"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_331_TO_329_115B },
  },
  {
    from: "E-331",
    to: ["E-329", "E-330"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: SWAP_FROM_331_TO_329_B_H1,
      [H2]: SWAP_FROM_331_TO_329_B_H2,
      [H3]: SWAP_FROM_331_TO_329_B_H3,
      [H4]: SWAP_FROM_331_TO_329_B_H4,
    },
  },
  {
    from: "E-331",
    to: ["E-332", "E-333", "E-334"],
    line: LINE_B,
    stations: [ST_35],
    pumps: {
      [H1]: FROM_331_TO_35_H1,
      [H4]: FROM_331_TO_35_H4,
    },
  },

  // ---- E-332
  {
    from: "E-332",
    to: allTanksExcept("E-332"),
    line: LINE_A,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_332_TO_322_115_H3A },
  },
  {
    from: "E-332",
    to: ["E-322", "E-323", "E-324", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_332_TO_322_115_H3B },
  },
  {
    from: "E-332",
    to: ["E-327", "E-328"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_332_TO_327_115B },
  },

  // ---- E-333
  {
    from: "E-333",
    to: allTanksExcept("E-333"),
    line: LINE_A,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_333_TO_322_115_H3A },
  },
  {
    from: "E-333",
    to: ["E-322", "E-323", "E-324", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_333_TO_322_115_H3A },
  },

  // ---- E-334
  {
    from: "E-334",
    to: allTanksExcept("E-334"),
    line: LINE_A,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_334_TO_322_115_H3A },
  },
  {
    from: "E-334",
    to: ["E-322", "E-323", "E-324", "E-325", "E-326"],
    line: LINE_B,
    stations: [ST_115],
    pumps: { [N3]: SWAP_FROM_334_TO_322_115_H3A },
  },
];

// Группировка по резервуару-источнику + Set для быстрой проверки "to"
const SWAP_RULES_BY_FROM = SWAP_RULES_LIST.reduce((acc, rule) => {
  (acc[rule.from] ||= []).push({ ...rule, to: new Set(rule.to) });
  return acc;
}, {});

// Элементы ПОСЛЕ насоса: группа резервуаров -> приёмник -> { насос: элементы }
const AFTER_PUMP = {
  PST: {
    "910-40(1)": byKeys(PUMPS_35, [
      PST_TO_910_40_H1,
      PST_TO_910_40_H2,
      PST_TO_910_40_H3,
      PST_TO_910_40_H4,
    ]),
    "910-10(2)": byKeys(PUMPS_35, [
      PST_TO_910_10_H1,
      PST_TO_910_10_H2,
      PST_TO_910_10_H3,
      PST_TO_910_10_H4,
    ]),
    "910-100(3)": byKeys(PUMPS_115, [
      PST_TO_910_100_N1,
      PST_TO_910_100_N2,
      PST_TO_910_100_N3,
      PST_TO_910_100_N4,
      PST_TO_910_100_N5,
    ]),
  },
  ZGP: {
    "910-40(1)": byKeys(PUMPS_35, [
      ZGP_TO_910_40_H1,
      ZGP_TO_910_40_H2,
      ZGP_TO_910_40_H3,
      ZGP_TO_910_40_H4,
    ]),
    "910-10(2)": byKeys(PUMPS_35, [
      ZGP_TO_910_10_H1,
      ZGP_TO_910_10_H2,
      ZGP_TO_910_10_H3,
      ZGP_TO_910_10_H4,
    ]),
    "910-100(3)": byKeys(PUMPS_115, [
      ZGP_TO_910_100_N1,
      ZGP_TO_910_100_N2,
      ZGP_TO_910_100_N3,
      ZGP_TO_910_100_N4,
      ZGP_TO_910_100_N5,
    ]),
  },
};

// Обратная подача: "откуда|куда|вариант трубопровода"
const reverseRule = (from, to, variant, elements, afterPump) => [
  `${from}|${to}|${variant}`,
  { elements, afterPump },
];

const REVERSE_RULES = Object.fromEntries([
  reverseRule("910-40(1)", "E-326", "62,63", REVERSE_91040_326_63, REVERSE_91010_326_62_AFTER_PUMP),
  reverseRule("910-40(1)", "E-330", "62,63", REVERSE_91040_330_62, REVERSE_91040_330_62_AFTER_PUMP),
  reverseRule("910-10(2)", "E-326", "62,63", REVERSE_91010_326_62, REVERSE_91010_326_62_AFTER_PUMP),
  reverseRule("910-10(2)", "E-330", "62,63", REVERSE_91010_330_62, REVERSE_91040_330_62_AFTER_PUMP),

  reverseRule("910-40(1)", "E-326", "61,64", REVERSE_91040_326_64, REVERSE_91010_326_62_AFTER_PUMP),
  reverseRule("910-40(1)", "E-330", "61,64", REVERSE_91040_330_64, REVERSE_91040_330_62_AFTER_PUMP),
  reverseRule("910-10(2)", "E-326", "61,64", REVERSE_91010_326_61, REVERSE_91010_326_62_AFTER_PUMP),
  reverseRule("910-10(2)", "E-330", "61,64", REVERSE_91010_330_61, REVERSE_91040_330_62_AFTER_PUMP),

  reverseRule("910-100(3)", "E-326", "88", REVERSE910100_326_88, REVERSE_910100_326_88_AFTER_PUMP),
  reverseRule("910-100(3)", "E-330", "88", REVERSE910100_326_88, REVERSE_910100_330_88_AFTER_PUMP),
  reverseRule("910-100(3)", "E-326", "89", REVERSE910100_326_89, REVERSE_91010_326_62_AFTER_PUMP),
  reverseRule("910-100(3)", "E-330", "89", REVERSE910100_326_89, REVERSE_91040_330_62_AFTER_PUMP),
  reverseRule("910-100(3)", "E-326", "90", REVERSE910100_326_90, REVERSE_91010_326_62_AFTER_PUMP),
  reverseRule("910-100(3)", "E-330", "90", REVERSE910100_326_90, REVERSE_91040_330_62_AFTER_PUMP),
]);

// Собирает уникальные элементы по активным насосам (порядок как в оригинале)
const collect = (pumpMap, activePump) => {
  const result = new Set();
  for (const key of PUMP_KEYS) {
    const elements = pumpMap[key];
    if (elements && activePump.includes(key)) {
      for (const el of elements) result.add(el);
    }
  }
  return [...result];
};

// Определяется один раз: userAgent за время жизни страницы не меняется
const IS_MOBILE =
  typeof navigator !== "undefined" &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

/* ========================================================================== *
 *  Статичная сцена. Не зависит от стора, поэтому React.memo полностью        *
 *  исключает её перерисовку при любых обновлениях App.                       *
 * ========================================================================== */

const Scene = memo(function Scene({ targetRef, targetLeft }) {
  return (
    <>
      <Plugs />
      <p
        style={{ position: "absolute", top: 500, left: targetLeft }}
        ref={targetRef}
      ></p>
      <Switcher top={47} left={3045} title="pst" activeColor="#6F4B07" />
      <SimpleText left={3087} top={49} title="МАЗУТ С ПСТ" />

      <Switcher top={53} left={2426} title="gpn" activeColor="#7D0F9B" />
      <SimpleText left={2470} top={74} title="МАЗУТ С КГПН" />

      <TopLevel />
      <TanksLevel />
      <InterparkCommunication />
      <Station91035 />
      <Station910115 />
      <Reck title="910-40(1)" top={2331} left={3658} />
      <Reck title="910-10(2)" top={2550} left={3658} />
      <Reck title="910-100(3)" top={2550} left={800} />

      <SimpleText left={93} top={225} title="31 линия (с установок)" />

      <LinesTitle />
    </>
  );
});

/* ========================================================================== *
 *  Контейнер с drag-scroll. Состояние перетаскивания живёт здесь и не        *
 *  вызывает перерисовок (только refs + requestAnimationFrame).               *
 * ========================================================================== */

function DragScrollContainer({ children }) {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const start = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });
  const lastPoint = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  const applyScroll = useCallback(() => {
    rafId.current = null;
    const el = containerRef.current;
    if (!el || !isDragging.current) return;
    const walkX = (lastPoint.current.x - start.current.x) * 1.5;
    const walkY = (lastPoint.current.y - start.current.y) * 1.5;
    el.scrollLeft = start.current.scrollLeft - walkX;
    el.scrollTop = start.current.scrollTop - walkY;
  }, []);

  const stopDragging = useCallback(() => {
    isDragging.current = false;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    const el = containerRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    }
  }, []);

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return; // только левая кнопка мыши
    const el = containerRef.current;
    if (!el) return;

    isDragging.current = true;
    start.current = {
      x: e.pageX,
      y: e.pageY,
      scrollLeft: el.scrollLeft,
      scrollTop: el.scrollTop,
    };
    lastPoint.current = { x: e.pageX, y: e.pageY };

    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      lastPoint.current = { x: e.pageX, y: e.pageY };
      // Обновляем скролл не чаще одного раза за кадр
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(applyScroll);
      }
    },
    [applyScroll]
  );

  // Отмена отложенного кадра при размонтировании
  useEffect(
    () => () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    },
    []
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "auto",
        width: "100vw",
        height: "100vh",
        cursor: "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}

/* ========================================================================== *
 *  App                                                                       *
 * ========================================================================== */

function App() {
  // Точечные селекторы: App перерисовывается только при изменении
  // конкретных полей, а не при любом обновлении стора.
  const from = parkStore((s) => s.from);
  const to = parkStore((s) => s.to);
  const activePump = parkStore((s) => s.activePump);
  const activePumpStation = parkStore((s) => s.activePumpStation);
  const lineAorB = parkStore((s) => s.lineAorB);
  const pipelineVariant = parkStore((s) => s.pipelineVariant);
  const isMazutTransferVisibleKgpn = parkStore(
    (s) => s.isMazutTransferVisibleKgpn
  );
  const isMazutTransferVisiblePst = parkStore(
    (s) => s.isMazutTransferVisiblePst
  );

  const addActiveElement = parkStore((s) => s.addActiveElement);
  const addActiveElementAfterPump = parkStore(
    (s) => s.addActiveElementAfterPump
  );
  const setActivePump = parkStore((s) => s.setActivePump);
  const addElementsTransferGpn = parkStore((s) => s.addElementsTransferGpn);
  const addElementsTransferPst = parkStore((s) => s.addElementsTransferPst);

  const targetRef = useRef(null);

  // Прокрутка к целевой точке при первом показе
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // 1. Обратная подача (910-xx -> E-326 / E-330)
  useEffect(() => {
    const rule = REVERSE_RULES[`${from}|${to}|${pipelineVariant}`];
    if (!rule) return;
    setActivePump(N4);
    addActiveElement(rule.elements);
    addActiveElementAfterPump(rule.afterPump);
  }, [
    from,
    to,
    pipelineVariant,
    setActivePump,
    addActiveElement,
    addActiveElementAfterPump,
  ]);

  // 2. Основной расчёт активных элементов: прямая подача + SWAP-правила
  useEffect(() => {
    const directMap = DIRECT[from];
    if (!directMap) return;

    let result = collect(directMap, activePump);

    // Каждое подходящее правило перезаписывает результат предыдущего,
    // как и в исходной цепочке if (побеждает последнее).
    const rules = SWAP_RULES_BY_FROM[from];
    if (rules) {
      for (const rule of rules) {
        if (
          rule.to.has(to) &&
          rule.line === lineAorB &&
          rule.stations.includes(activePumpStation)
        ) {
          result = collect(rule.pumps, activePump);
        }
      }
    }

    addActiveElement(result);
  }, [from, to, activePump, lineAorB, activePumpStation, addActiveElement]);

  // 3. Элементы после насоса
  useEffect(() => {
    const group = PST_TANK.has(from)
      ? AFTER_PUMP.PST
      : ZGP_TANK.has(from)
      ? AFTER_PUMP.ZGP
      : null;
    const pumpMap = group?.[to];
    if (!pumpMap) return;
    addActiveElementAfterPump(collect(pumpMap, activePump));
  }, [from, to, activePump, addActiveElementAfterPump]);

  // 4. Насосы по умолчанию
  useEffect(() => {
    if (to === "910-40(1)" || to === "910-10(2)") {
      if (PST_TANK.has(from)) setActivePump([H2, H3]);
      else if (ZGP_TANK.has(from)) setActivePump([H1, H4]);
    }

    if (from && to === "910-100(3)") {
      setActivePump([N1, N3, N5]);
    }
  }, [from, to, setActivePump]);

  // 5. Перекачка мазута
  useEffect(() => {
    addElementsTransferGpn(isMazutTransferVisibleKgpn ? MAZUT_TRANSFER_GPN : []);
  }, [isMazutTransferVisibleKgpn, addElementsTransferGpn]);

  useEffect(() => {
    addElementsTransferPst(isMazutTransferVisiblePst ? MAZUT_TRANSFER_PST : []);
  }, [isMazutTransferVisiblePst, addElementsTransferPst]);

  useSwapConfiguration(
    from,
    to,
    lineAorB,
    activePumpStation,
    activePump,
    setActivePump,
    addActiveElementAfterPump
  );

  if (!IS_MOBILE) {
    return (
      <DragScrollContainer>
        <Scene targetRef={targetRef} targetLeft={3500} />
      </DragScrollContainer>
    );
  }

  return (
    <div className="wrapper">
      <div style={{ position: "relative" }}>
        <Scene targetRef={targetRef} targetLeft={1500} />
      </div>
    </div>
  );
}

export default App;

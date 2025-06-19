import { useEffect, useRef } from "react";
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

const PST_TANK = [
  "E-322",
  "E-323",
  "E-324",
  "E-325",
  "E-326",
  "E-332",
  "E-333",
  "E-334",
];

const ZGP_TANK = ["E-327", "E-328", "E-329", "E-330", "E-331"];

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const {
    from,
    to,
    addActiveElement,
    addActiveElementAfterPump,
    activePump,
    setActivePump,
    addElementsTransferGpn,
    addElementsTransferPst,
    isMazutTransferVisibleKgpn,
    isMazutTransferVisiblePst,
    activePumpStation,
    lineAorB,
  } = parkStore();

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  useEffect(() => {
    if (from === "E-322") {
      let newElements = [];
      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_322_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_322_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_322_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_322_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_322_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_322_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_322_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_322_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_322_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-323") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_323_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_323_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_323_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_323_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_323_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_323_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_323_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_323_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_323_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-324") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_324_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_324_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_324_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_324_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_324_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_324_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_324_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_324_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_324_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-325") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_325_TO_35_H1];

      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_325_TO_35_H2];

      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_325_TO_35_H3];

      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_325_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_325_TO_115_H1];

      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_325_TO_115_H2];

      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_325_TO_115_H3];

      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_325_TO_115_H4];

      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_325_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-326") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_326_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_326_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_326_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_326_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_326_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_326_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_326_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_326_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_326_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-327") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_327_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_327_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_327_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_327_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_327_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_327_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_327_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_327_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_327_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-328") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_328_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_328_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_328_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_328_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_328_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_328_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_328_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_328_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_328_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-329") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_329_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_329_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_329_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_329_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_329_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_329_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_329_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_329_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_329_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-330") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_330_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_330_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_330_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_330_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_330_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_330_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_330_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_330_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_330_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-331") {
      let newElements = [];
      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_331_TO_35_H1];

      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_331_TO_35_H2];

      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_331_TO_35_H3];

      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_331_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_331_TO_115_H1];

      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_331_TO_115_H2];

      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_331_TO_115_H3];

      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_331_TO_115_H4];

      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_331_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-332") {
      let newElements = [];
      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_332_TO_35_H1];

      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_332_TO_35_H2];

      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_332_TO_35_H3];

      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_332_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_332_TO_115_H1];

      if (activePump.includes("Н-2")) {
        newElements = [...newElements, ...FROM_332_TO_115_H2];
      }
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_332_TO_115_H3];

      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_332_TO_115_H4];

      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_332_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-333") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_333_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_333_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_333_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_333_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_333_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_333_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_333_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_333_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_333_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-334") {
      let newElements = [];

      if (activePump.includes("H-1"))
        newElements = [...newElements, ...FROM_334_TO_35_H1];
      if (activePump.includes("H-2"))
        newElements = [...newElements, ...FROM_334_TO_35_H2];
      if (activePump.includes("H-3"))
        newElements = [...newElements, ...FROM_334_TO_35_H3];
      if (activePump.includes("H-4"))
        newElements = [...newElements, ...FROM_334_TO_35_H4];

      if (activePump.includes("Н-1"))
        newElements = [...newElements, ...FROM_334_TO_115_H1];
      if (activePump.includes("Н-2"))
        newElements = [...newElements, ...FROM_334_TO_115_H2];
      if (activePump.includes("Н-3"))
        newElements = [...newElements, ...FROM_334_TO_115_H3];
      if (activePump.includes("Н-4"))
        newElements = [...newElements, ...FROM_334_TO_115_H4];
      if (activePump.includes("Н-5"))
        newElements = [...newElements, ...FROM_334_TO_115_H5];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
  }, [from, to, activePump, addActiveElement]);

  useEffect(() => {
    if (to === "910-40(1)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) newElements.push(...PST_TO_910_40_H1);
      if (activePump.includes("H-2")) newElements.push(...PST_TO_910_40_H2);
      if (activePump.includes("H-3")) newElements.push(...PST_TO_910_40_H3);
      if (activePump.includes("H-4")) newElements.push(...PST_TO_910_40_H4);
      addActiveElementAfterPump([...new Set(newElements)]);
    }

    if (to === "910-10(2)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) newElements.push(...PST_TO_910_10_H1);
      if (activePump.includes("H-2")) newElements.push(...PST_TO_910_10_H2);
      if (activePump.includes("H-3")) newElements.push(...PST_TO_910_10_H3);
      if (activePump.includes("H-4")) newElements.push(...PST_TO_910_10_H4);
      addActiveElementAfterPump([...new Set(newElements)]);
    }

    if (to === "910-40(1)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) newElements.push(...ZGP_TO_910_40_H1);
      if (activePump.includes("H-2")) newElements.push(...ZGP_TO_910_40_H2);
      if (activePump.includes("H-3")) newElements.push(...ZGP_TO_910_40_H3);
      if (activePump.includes("H-4")) newElements.push(...ZGP_TO_910_40_H4);
      addActiveElementAfterPump([...new Set(newElements)]);
    }

    if (to === "910-10(2)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) newElements.push(...ZGP_TO_910_10_H1);
      if (activePump.includes("H-2")) newElements.push(...ZGP_TO_910_10_H2);
      if (activePump.includes("H-3")) newElements.push(...ZGP_TO_910_10_H3);
      if (activePump.includes("H-4")) newElements.push(...ZGP_TO_910_10_H4);
      addActiveElementAfterPump([...new Set(newElements)]);
    }

    if (to === "910-100(3)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("Н-1")) newElements.push(...ZGP_TO_910_100_N1);
      if (activePump.includes("Н-2")) newElements.push(...ZGP_TO_910_100_N2);
      if (activePump.includes("Н-3")) newElements.push(...ZGP_TO_910_100_N3);
      if (activePump.includes("Н-4")) newElements.push(...ZGP_TO_910_100_N4);
      if (activePump.includes("Н-5")) newElements.push(...ZGP_TO_910_100_N5);
      addActiveElementAfterPump([...new Set(newElements)]);
    }

    if (to === "910-100(3)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("Н-1")) newElements.push(...PST_TO_910_100_N1);
      if (activePump.includes("Н-2")) newElements.push(...PST_TO_910_100_N2);
      if (activePump.includes("Н-3")) newElements.push(...PST_TO_910_100_N3);
      if (activePump.includes("Н-4")) newElements.push(...PST_TO_910_100_N4);
      if (activePump.includes("Н-5")) newElements.push(...PST_TO_910_100_N5);
      addActiveElementAfterPump([...new Set(newElements)]);
    }
  }, [from, to, activePump, addActiveElementAfterPump]);

  useEffect(() => {
    if (PST_TANK.includes(from) && to === "910-40(1)") {
      setActivePump(["H-2", "H-3"]);
    }
    if (PST_TANK.includes(from) && to === "910-10(2)") {
      setActivePump(["H-2", "H-3"]);
    }

    if (ZGP_TANK.includes(from) && to === "910-40(1)") {
      setActivePump(["H-1", "H-4"]);
    }
    if (ZGP_TANK.includes(from) && to === "910-10(2)") {
      setActivePump(["H-1", "H-4"]);
    }

    if (from && to === "910-100(3)") {
      setActivePump(["Н-1", "Н-3", "Н-5"]);
    }
  }, [from, to]);

  useEffect(() => {
    if (isMazutTransferVisibleKgpn) {
      addElementsTransferGpn(MAZUT_TRANSFER_GPN);
    } else {
      addElementsTransferGpn([]);
    }
  }, [isMazutTransferVisibleKgpn]);

  useEffect(() => {
    if (isMazutTransferVisiblePst) {
      addElementsTransferPst(MAZUT_TRANSFER_PST);
    } else {
      addElementsTransferPst([]);
    }
  }, [isMazutTransferVisiblePst]);

  useSwapConfiguration(
    from,
    to,
    lineAorB,
    activePumpStation,
    activePump,
    setActivePump,
    addActiveElementAfterPump
  );

  // Обработчики для drag-scroll
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Проверяем, что нажата левая кнопка мыши

    isDragging.current = true;
    startPos.current = {
      x: e.pageX - containerRef.current.offsetLeft,
      y: e.pageY - containerRef.current.offsetTop,
    };
    scrollLeft.current = containerRef.current.scrollLeft;
    scrollTop.current = containerRef.current.scrollTop;

    // Изменяем курсор
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    resetCursor();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    resetCursor();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = (x - startPos.current.x) * 1.5; // Умножаем на 2 для более быстрого скролла
    const walkY = (y - startPos.current.y) * 1.5;

    containerRef.current.scrollLeft = scrollLeft.current - walkX;
    containerRef.current.scrollTop = scrollTop.current - walkY;
  };

  const resetCursor = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.removeProperty("user-select");
    }
  };

  if (!isMobile) {
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
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
      </div>
    );
  }

  return (
    <>
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
    </>
  );
}

export default App;

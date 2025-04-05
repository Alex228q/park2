import { useEffect, useRef } from "react";
import parkStore from "./store/parkStore";

import TopLevel from "./components/Top/TopLevel";
import TanksLevel from "./components/Middle/TanksLevel";
import InterparkCommunication from "./components/Middle/InterparkCommunication";
import Station91035 from "./components/Bottom/Station91035";
import Reck from "./components/Reck";

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
    activeElements,
    addActiveElement,
    addActiveElementAfterPump,
    activePump,
    setActivePump,
  } = parkStore();

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  useEffect(() => {
    if (from === "E-322") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "p96",
          "322Б",
          "p97",
          "p97/2",
          "ЗМ-8",
          "p98",
          "v140",
          "v140/2",
          "i50",
          "p120",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "v206",
          "p154",
          "74",
          "p155",
          "v237",
          "i91",
          "v238",
          "i100",
          "v259",
          "i101",
          "v260",
          "v239",
          "i92",
          "v240",
          "3",
          "v241",
          "v242",
          "i93",
          "i94",
          "v243",
          "p228",
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "p96",
          "322Б",
          "p97",
          "p97/2",
          "ЗМ-8",
          "p98",
          "v140",
          "v140/2",
          "i50",
          "p120",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "p96",
          "322Б",
          "p97",
          "p97/2",
          "ЗМ-8",
          "p98",
          "v140",
          "v140/2",
          "i50",
          "p120",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "v293",
          "36",
          "v294",
          "i125",
          "i126",
          "i127",
          "v295",
          "i128",
          "v296",
          "p230",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "p96",
          "322Б",
          "p97",
          "p97/2",
          "ЗМ-8",
          "p98",
          "v140",
          "v140/2",
          "i50",
          "p120",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "p186",
          "v307",
          "v308",
          "29",
          "v309",
          "p206",
          "v310",
          "i132",
          "i133",
          "v311",
          "p231",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-323") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "p62",
          "323Б",
          "p63",
          "v133",
          "v134",
          "p81",
          "ЗМ-3",
          "p82",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",

          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "v205",
          "p146",
          "v206",
          "p154",
          "74",
          "p155",
          "v237",
          "i91",
          "v238",
          "i100",
          "v259",
          "i101",
          "v260",
          "v239",
          "i92",
          "v240",
          "3",
          "v241",
          "v242",
          "i93",
          "i94",
          "v243",
          "p228",
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "p62",
          "323Б",
          "p63",
          "v133",
          "v134",
          "p81",
          "ЗМ-3",
          "p82",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",

          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",

          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "p62",
          "323Б",
          "p63",
          "v133",
          "v134",
          "p81",
          "ЗМ-3",
          "p82",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",

          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "v293",
          "36",
          "v294",
          "i125",
          "i126",
          "i127",
          "v295",
          "i128",
          "v296",
          "p230",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "p62",
          "323Б",
          "p63",
          "v133",
          "v134",
          "p81",
          "ЗМ-3",
          "p82",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",
          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "p186",
          "v307",
          "v308",
          "29",
          "v309",
          "p206",
          "v310",
          "i132",
          "i133",
          "v311",
          "p231",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-324") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "p64",
          "324Б",
          "p65",
          "v129",
          "ЗМ-4",
          "v130",
          "p116/2",
          "v131",
          "p71",
          "v123",
          "ЗМ-6",
          "v124",
          "i39",
          "v125",

          "v126",
          "i40",
          "v127",
          "107",
          "v128",

          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",
          "v205",
          "p146",
          "v206",
          "p154",
          "74",
          "p155",
          "v237",
          "i91",
          "v238",
          "i100",
          "v259",
          "i101",
          "v260",
          "v239",
          "i92",
          "v240",
          "3",
          "v241",
          "v242",
          "i93",
          "i94",
          "v243",
          "p228",
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "p64",
          "324Б",
          "p65",
          "v129",
          "ЗМ-4",
          "v130",
          "p116/2",
          "v131",
          "p71",
          "v123",
          "ЗМ-6",
          "v124",
          "i39",
          "v125",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",

          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",

          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "p64",
          "324Б",
          "p65",
          "v129",
          "ЗМ-4",
          "v130",
          "p116/2",
          "v131",
          "p71",
          "v123",
          "ЗМ-6",
          "v124",
          "i39",
          "v125",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",
          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",

          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "v293",
          "36",
          "v294",
          "i125",
          "i126",
          "i127",
          "v295",
          "i128",
          "v296",
          "p230",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "p64",
          "324Б",
          "p65",
          "v129",
          "ЗМ-4",
          "v130",
          "p116/2",
          "v131",
          "p71",
          "v123",
          "ЗМ-6",
          "v124",
          "i39",
          "v125",
          "v126",
          "i40",
          "v127",
          "107",
          "v128",
          "i41",
          "v176",
          "i55",
          "v178",
          "p120/2",
          "v170",
          "p119",
          "v204",
          "i76",

          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "p186",
          "v307",
          "v308",
          "29",
          "v309",
          "p206",
          "v310",
          "i132",
          "i133",
          "v311",
          "p231",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-325") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v142",
          "325Б",
          "v143",
          "p91",
          "v148",
          "i47",
          "v149",
          "v150",

          "v204",
          "i76",
          "v205",
          "p146",
          "v206",
          "p154",
          "74",
          "p155",
          "v237",
          "i91",
          "v238",
          "i100",
          "v259",
          "i101",
          "v260",
          "v239",
          "i92",
          "v240",
          "3",
          "v241",
          "v242",
          "i93",
          "i94",
          "v243",
          "p228",
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v142",
          "325Б",
          "v143",
          "p91",
          "v148",
          "i47",
          "v149",
          "v150",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v142",
          "325Б",
          "v143",
          "p91",
          "v148",
          "i47",
          "v149",
          "v150",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "v293",
          "36",
          "v294",
          "i125",
          "i126",
          "i127",
          "v295",
          "i128",
          "v296",
          "p230",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v142",
          "325Б",
          "v143",
          "p91",
          "v148",
          "i47",
          "v149",
          "v150",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "p186",
          "v307",
          "v308",
          "29",
          "v309",
          "p206",
          "v310",
          "i132",
          "i133",
          "v311",
          "p231",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-326") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v146",
          "326Б",
          "v147",
          "p108",

          "v150",

          "v204",
          "i76",
          "v205",
          "p146",
          "v206",
          "p154",
          "74",
          "p155",
          "v237",
          "i91",
          "v238",
          "i100",
          "v259",
          "i101",
          "v260",
          "v239",
          "i92",
          "v240",
          "3",
          "v241",
          "v242",
          "i93",
          "i94",
          "v243",
          "p228",
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v146",
          "326Б",
          "v147",
          "p108",
          "v150",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v146",
          "326Б",
          "v147",
          "p108",
          "v150",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "v293",
          "36",
          "v294",
          "i125",
          "i126",
          "i127",
          "v295",
          "i128",
          "v296",
          "p230",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v146",
          "326Б",
          "v147",
          "p108",
          "v150",
          "v204",
          "i76",
          "p96",
          "v205",
          "p146",
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p184",
          "20",
          "p185",
          "p186",
          "v307",
          "v308",
          "29",
          "v309",
          "p206",
          "v310",
          "i132",
          "i133",
          "v311",
          "p231",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-327") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v151",
          "327Б",
          "v152",
          "p87",
          "v207",
          "i77",
          "v208",
          "v209",
          "p125",
          "ЗМ-46",
          "p126",
          "p127",
          "v219",
          "ЗМ-47",
          "v218",
          "p124",
          "v222",
          "v223",
          "i83",
          "v224",
          "p153",
          "v325",
          "i140",
          "v326",
          "i141",
          "v327",
          "i142",
          "v328",
          "p176",
          "v253",
          "i97",
          "v254",
          "4",
          "v254/2",
          "p203",
          "v242",
          "i93",
          "i94",
          "v243",
          "p228",
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v151",
          "327Б",
          "v152",
          "p87",
          "v207",
          "i77",
          "v208",
          "v209",
          "p125",
          "ЗМ-46",
          "p126",
          "p127",
          "v219",
          "ЗМ-47",
          "v218",
          "p124",
          "v222",
          "v223",
          "i83",
          "v224",
          "v225",
          "i84",
          "v312",
          "i133/2",
          "i134",
          "v313",
          "i135",
          "v314",
          "v315",
          "i136",
          "v316",
          "30",
          "v317",
          "p206",
          "v309",
          "29",
          "v308",
          "v307",
          "p186",
          "p185",
          "20",
          "p184",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v151",
          "327Б",
          "v152",
          "p87",
          "v207",
          "i77",
          "v208",
          "v209",
          "p125",
          "ЗМ-46",
          "p126",
          "p127",
          "v219",
          "ЗМ-47",
          "v218",
          "p124",
          "v222",
          "v223",
          "i83",
          "v224",
          "v225",
          "i84",
          "v312",
          "i133/2",
          "i134",
          "v313",
          "i135",
          "v314",
          "v315",
          "i136",
          "v316",
          "30",
          "v317",
          "p206",
          "v309",
          "29",
          "v308",
          "v307",
          "p186",
          "v293",
          "36",
          "v294",
          "i125",
          "i126",
          "i127",
          "v295",
          "i128",
          "v296",
          "p230",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v151",
          "327Б",
          "v152",
          "p87",
          "v207",
          "i77",
          "v208",
          "v209",
          "p125",
          "ЗМ-46",
          "p126",
          "p127",
          "v219",
          "ЗМ-47",
          "v218",
          "p124",
          "v222",
          "v223",
          "i83",
          "v224",
          "v225",
          "i84",
          "v312",
          "i133/2",
          "i134",
          "v313",
          "i135",
          "v314",
          "v315",
          "i136",
          "v316",
          "30",
          "v317",
          "v310",
          "i132",
          "i133",
          "v311",
          "p231",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
  }, [from, to, activePump, addActiveElement]);

  useEffect(() => {
    if (to === "910-40(1)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v252",
          "i96",
          "i95",
          "v251",
          "v250",
          "p189",
          "p188",
          "v246",
          "1",
          "v247",
          "p212",
          "p213",
          "p214",
          "67",
          "p215",
          "p216",
          "p217",
          "63",
          "p218",
          "v366",
        ];
      }
      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v290",
          "i124",
          "v289",
          "v287",
          "i123",
          "i122",
          "v286",
          "37",
          "v285",
          "p192",
          "v283",
          "31",
          "v283/2",
          "i121",
          "v284",
          "p213",
          "p214",
          "67",
          "p215",
          "p216",
          "p217",
          "63",
          "p218",
          "v366",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v305",
          "v304",
          "i131",
          "i130",
          "v303",
          "35",
          "v302",
          "p197",
          "v300",
          "24",
          "v301",
          "p205",
          "p204",
          "v292",
          "22",
          "v291",
          "p193",
          "p192",
          "v283",
          "31",
          "v283/2",
          "i121",
          "v284",
          "p213",
          "p214",
          "67",
          "p215",
          "p216",
          "p217",
          "63",
          "p218",
          "v366",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v339",
          "i150",
          "i149",
          "v338",
          "p207",
          "v341",
          "28",
          "v340",
          "p202",
          "v342",
          "i151",
          "v343",
          "p214",
          "67",
          "p215",
          "p216",
          "p217",
          "63",
          "p218",
          "v366",
        ];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-10(2)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v252",
          "i96",
          "i95",
          "v251",
          "v250",
          "p189",
          "p188",
          "v246",
          "1",
          "v247",
          "p212",
          "p213",
          "p214",
          "67",
          "p215",
          "p216",

          "v370",
          "p200",
          "62",
          "p201",
          "v371",
          "p237",
        ];
      }
      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v290",
          "i124",
          "v289",
          "v287",
          "i123",
          "i122",
          "v286",
          "37",
          "v285",
          "p192",
          "v283",
          "31",
          "v283/2",
          "i121",
          "v284",
          "p213",
          "p214",
          "67",
          "p215",
          "p216",
          "v370",
          "p200",
          "62",
          "p201",
          "v371",
          "p237",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v305",
          "v304",
          "i131",
          "i130",
          "v303",
          "35",
          "v302",
          "p197",
          "v300",
          "24",
          "v301",
          "p205",
          "p204",
          "v292",
          "22",
          "v291",
          "p193",
          "p192",
          "v283",
          "31",
          "v283/2",
          "i121",
          "v284",
          "p213",
          "p214",
          "67",
          "p215",
          "p216",
          "v370",
          "p200",
          "62",
          "p201",
          "v371",
          "p237",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v339",
          "i150",
          "i149",
          "v338",
          "p207",
          "v341",
          "28",
          "v340",
          "p202",
          "v342",
          "i151",
          "v343",
          "p214",
          "67",
          "p215",
          "p216",
          "v370",
          "p200",
          "62",
          "p201",
          "v371",
          "p237",
        ];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-40(1)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v252",
          "i96",
          "i95",
          "v251",
          "v250",
          "p189",
          "v244",
          "2",
          "v245",
          "p208",
          "p209",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "p224",
          "64",
          "p225",
          "v367",
        ];
      }
      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v290",
          "i124",
          "v289",
          "v287",
          "i123",
          "i122",
          "v286",
          "37",
          "v285",
          "p193",
          "v291",
          "22",
          "v292",
          "p204",
          "p205",
          "v301",
          "24",
          "v300",
          "p197",
          "p198",
          "v306",
          "26",
          "p209",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "p224",
          "64",
          "p225",
          "v367",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v305",
          "v304",
          "i131",
          "i130",
          "v303",
          "35",
          "v302",
          "p198",
          "v306",
          "26",
          "p209",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "p224",
          "64",
          "p225",
          "v367",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v339",
          "i150",
          "i149",
          "v338",
          "v337",
          "32",
          "v336",
          "p199",
          "v344",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "p224",
          "64",
          "p225",
          "v367",
        ];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-10(2)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
          "v252",
          "i96",
          "i95",
          "v251",
          "v250",
          "p189",
          "v244",
          "2",
          "v245",
          "p208",
          "p209",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "v369",
          "i166",
          "v368",
          "p194",
          "61",
          "p195",
          "v372",
          "p238",
        ];
      }
      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
          "v290",
          "i124",
          "v289",
          "v287",
          "i123",
          "i122",
          "v286",
          "37",
          "v285",
          "p193",
          "v291",
          "22",
          "v292",
          "p204",
          "p205",
          "v301",
          "24",
          "v300",
          "p197",
          "p198",
          "v306",
          "26",
          "p209",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "v369",
          "i166",
          "v368",
          "p194",
          "61",
          "p195",
          "v372",
          "p238",
        ];
      }

      if (activePump.includes("H-3")) {
        newElements = [
          ...newElements,
          "v305",
          "v304",
          "i131",
          "i130",
          "v303",
          "35",
          "v302",
          "p198",
          "v306",
          "26",
          "p209",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "v369",
          "i166",
          "v368",
          "p194",
          "61",
          "p195",
          "v372",
          "p238",
        ];
      }

      if (activePump.includes("H-4")) {
        newElements = [
          ...newElements,
          "v339",
          "i150",
          "i149",
          "v338",
          "v337",
          "32",
          "v336",
          "p199",
          "v344",
          "p210",
          "v353",
          "i157",
          "v354",
          "p221",
          "66",
          "p222",
          "p223",
          "v369",
          "i166",
          "v368",
          "p194",
          "61",
          "p195",
          "v372",
          "p238",
        ];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
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
  }, [from, to]);

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
        {/* <p>From {from}</p>
        <p>To {to}</p>
        <p>Active elements: {activeElements.join(", ")}</p>
        <p>Active pumps: {activePump.join(", ")}</p> */}

        <TopLevel />
        <TanksLevel />
        <InterparkCommunication />
        <Station91035 />
        <Reck title="910-40(1)" top={2331} left={3658} />
        <Reck title="910-10(2)" top={2550} left={3658} />
      </div>
    );
  }

  return (
    <>
      {/* <p>From {from}</p>
      <p>To {to}</p>
      <p>Active elements: {activeElements.join(", ")}</p>
      <p>Active pumps: {activePump.join(", ")}</p> */}

      <TopLevel />
      <TanksLevel />
      <InterparkCommunication />
      <Station91035 />
      <Reck title="910-40(1)" top={2331} left={3658} />
      <Reck title="910-10(2)" top={2550} left={3658} />
    </>
  );
}

export default App;

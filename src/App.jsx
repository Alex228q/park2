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
} from "./data/transferElements322";

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
      if (activePump.includes("H-1")) {
        newElements = [...newElements, ...FROM_322_TO_35_H1];
      }
      if (activePump.includes("H-2")) {
        newElements = [...newElements, ...FROM_322_TO_35_H2];
      }
      if (activePump.includes("H-3")) {
        newElements = [...newElements, ...FROM_322_TO_35_H3];
      }
      if (activePump.includes("H-4")) {
        newElements = [...newElements, ...FROM_322_TO_35_H4];
      }
      if (activePump.includes("Н-1")) {
        newElements = [...newElements, ...FROM_322_TO_115_H1];
      }
      if (activePump.includes("Н-2")) {
        newElements = [...newElements, ...FROM_322_TO_115_H2];
      }
      if (activePump.includes("Н-3")) {
        newElements = [...newElements, ...FROM_322_TO_115_H3];
      }
      if (activePump.includes("Н-4")) {
        newElements = [...newElements, ...FROM_322_TO_115_H4];
      }
      if (activePump.includes("Н-5")) {
        newElements = [...newElements, ...FROM_322_TO_115_H5];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-323") {
      let newElements = [];
      // prettier-ignore
      if (activePump.includes("H-1")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p119","v204","i76","v205","p146","v206","p154","74","p155","v237","i91","v238","i100","v259","i101","v260","v239","i92","v240","3","v241","v242","i93","i94","v243","p228"];
      // prettier-ignore
      if (activePump.includes("H-2")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p119","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p183","19","p182","v256","38","v257","i98","i99","v258","p229"];
      // prettier-ignore
      if (activePump.includes("H-3")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p119","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p184","20","p185","v293","36","v294","i125","i126","i127","v295","i128","v296","p230"];
      // prettier-ignore
      if (activePump.includes("H-4")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p119","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p184","20","p185","p186","v307","v308","29","v309","p206","v310","i132","i133","v311","p231"];

      // prettier-ignore
      if (activePump.includes("Н-1")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","ЗМ-45","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p117","p118","v196","i70","v197","i71","v198","p256","v385","ЗМ-11","i174","p283","p284","vf1","i175","Ф1","p295"];

      // prettier-ignore
      if (activePump.includes("Н-2")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","ЗМ-45","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p117","p118","v196","i70","v197","i71","v198","p256","p257","v392","i182","ЗМ-17","p299","p300","vf2","Ф2","i182/2","p301"];

      // prettier-ignore
      if (activePump.includes("Н-3")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","ЗМ-45","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p117","p118","v196","i70","v197","i71","v198","p256","p257","p258","v399","i189","ЗМ-23","p307","p308","vf3","i193","Ф3","p309"];

      // prettier-ignore
      if (activePump.includes("Н-4")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","ЗМ-45","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p117","p118","v196","i70","v197","i71","v198","p256","p257","p258","p259","v406","i197","i201","ЗМ-29","p313","p314","vf4","Ф4","p316"];

      // prettier-ignore
      if (activePump.includes("Н-5")) newElements = [...newElements, "p62","323Б","p63","v133","v134","p81","ЗМ-3","ЗМ-45","p82","v126","i40","v127","107","v128","i41","v176","i55","v178","p120/2","v170","p117","p118","v196","i70","v197","i71","v198","p256","p257","p258","p259","p260","v413","i205","i209","ЗМ-35","p321","p322","vf5","Ф5","p324"];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-324") {
      let newElements = [];

      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "v170", "p119", "v204", "i76", "v205", "p146", "v206", "p154", "74", "p155", "v237", "i91", "v238", "i100", "v259", "i101", "v260", "v239", "i92", "v240", "3", "v241", "v242", "i93", "i94", "v243", "p228"];
      }

      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "v170", "p119", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p183", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "v170", "p119", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p184", "20", "p185", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "v170", "p119", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p184", "20", "p185", "p186", "v307", "v308", "29", "v309", "p206", "v310", "i132", "i133", "v311", "p231"];
      }

      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "ЗМ-45", "p120/2", "v170", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "v385", "ЗМ-11", "i174", "p283", "p284", "vf1", "i175", "Ф1", "p295"];
      }

      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "ЗМ-45", "v170", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "v392", "i182", "ЗМ-17", "p299", "p300", "vf2", "Ф2", "i182/2", "p301"];
      }

      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "ЗМ-45", "v170", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "v399", "i189", "ЗМ-23", "p307", "p308", "vf3", "i193", "Ф3", "p309"];
      }

      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "ЗМ-45", "v170", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "v406", "i197", "i201", "ЗМ-29", "p313", "p314", "vf4", "Ф4", "p316"];
      }

      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "p64", "324Б", "p65", "v129", "ЗМ-4", "v130", "p116/2", "v131", "p71", "v123", "ЗМ-6", "v124", "i39", "v125", "v126", "i40", "v127", "107", "v128", "i41", "v176", "i55", "v178", "p120/2", "ЗМ-45", "v170", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "p260", "v413", "i205", "i209", "ЗМ-35", "p321", "p322", "vf5", "Ф5", "p324"];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-325") {
      let newElements = [];

      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "v204", "i76", "v205", "p146", "v206", "p154", "74", "p155", "v237", "i91", "v238", "i100", "v259", "i101", "v260", "v239", "i92", "v240", "3", "v241", "v242", "i93", "i94", "v243", "p228"];
      }

      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p183", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p184", "20", "p185", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p184", "20", "p185", "p186", "v307", "v308", "29", "v309", "p206", "v310", "i132", "i133", "v311", "p231"];
      }

      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "v385", "ЗМ-11", "i174", "p283", "p284", "vf1", "i175", "Ф1", "p295"];
      }

      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "v392", "i182", "ЗМ-17", "p299", "p300", "vf2", "Ф2", "i182/2", "p301"];
      }

      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "v399", "i189", "ЗМ-23", "p307", "p308", "vf3", "i193", "Ф3", "p309"];
      }

      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "v406", "i197", "i201", "ЗМ-29", "p313", "p314", "vf4", "Ф4", "p316"];
      }

      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "v142", "325Б", "v143", "p91", "v148", "i47", "v149", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "p260", "v413", "i205", "i209", "ЗМ-35", "p321", "p322", "vf5", "Ф5", "p324"];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-326") {
      let newElements = [];
      // prettier-ignore
      if (activePump.includes("H-1")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "v204", "i76", "v205", "p146", "v206", "p154", "74", "p155", "v237", "i91", "v238", "i100", "v259", "i101", "v260", "v239", "i92", "v240", "3", "v241", "v242", "i93", "i94", "v243", "p228"];
      // prettier-ignore
      if (activePump.includes("H-2")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p183", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      // prettier-ignore
      if (activePump.includes("H-3")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p184", "20", "p185", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      // prettier-ignore
      if (activePump.includes("H-4")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p184", "20", "p185", "p186", "v307", "v308", "29", "v309", "p206", "v310", "i132", "i133", "v311", "p231"];
      // prettier-ignore
      if (activePump.includes("Н-1")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "v385", "ЗМ-11", "i174", "p283", "p284", "vf1", "i175", "Ф1", "p295"];
      // prettier-ignore
      if (activePump.includes("Н-2")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "v392", "i182", "ЗМ-17", "p299", "p300", "vf2", "Ф2", "i182/2", "p301"];
      // prettier-ignore
      if (activePump.includes("Н-3")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "v399", "i189", "ЗМ-23", "p307", "p308", "vf3", "i193", "Ф3", "p309"];
      // prettier-ignore
      if (activePump.includes("Н-4")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "v406", "i197", "i201", "ЗМ-29", "p313", "p314", "vf4", "Ф4", "p316"];
      // prettier-ignore
      if (activePump.includes("Н-5")) newElements = [...newElements, "v146", "326Б", "v147", "p108", "v150", "p119", "ЗМ-45", "p117", "p118", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "p260", "v413", "i205", "i209", "ЗМ-35", "p321", "p322", "vf5", "Ф5", "p324"];

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-327") {
      let newElements = [];

      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","p153","v325","i140","v326","i141","v327","i142","v328","p176","v253","i97","v254","4","v254/2","p203","v242","i93","i94","v243","p228"];
      }

      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","v225","i84","v312","i133/2","i134","v313","i135","v314","v315","i136","v316","30","v317","p206","v309","29","v308","v307","p186","p185","20","p184","p183","19","p182","v256","38","v257","i98","i99","v258","p229"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","v225","i84","v312","i133/2","i134","v313","i135","v314","v315","i136","v316","30","v317","p206","v309","29","v308","v307","p186","v293","36","v294","i125","i126","i127","v295","i128","v296","p230"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","v225","i84","v312","i133/2","i134","v313","i135","v314","v315","i136","v316","30","v317","v310","i132","i133","v311","p231"];
      }

      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","v423","i216","p253","p252","p251","v384","i173","ЗМ-12","Ф1","p284","vf1","i175","p295"];
      }

      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","v423","i216","p253","p252","v391","i181","ЗМ-18","Ф2","p300","vf2","i182/2","p301"];
      }

      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","v423","i216","p253","v398","i188","ЗМ-24","Ф3","p308","vf3","i193","p309"];
      }

      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","v423","i216","p254","v405","i196","ЗМ-30","Ф4","p314","vf4","i201","p316"];
      }

      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "v151","327Б","v152","p87","v207","i77","v208","v209","p125","ЗМ-46","p126","v423","i216","p254","p255","v412","i204","ЗМ-36","Ф5","p322","vf5","i209","p324"];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-328") {
      let newElements = [];

      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","p153","v325","i140","v326","i141","v327","i142","v328","p176","v253","i97","v254","4","v254/2","p203","v242","i93","i94","v243","p228"];
      }

      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","v225","i84","v312","i133/2","i134","v313","i135","v314","v315","i136","v316","30","v317","p206","v309","29","v308","v307","p186","p185","20","p184","p183","19","p182","v256","38","v257","i98","i99","v258","p229"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","v225","i84","v312","i133/2","i134","v313","i135","v314","v315","i136","v316","30","v317","p206","v309","29","v308","v307","p186","v293","36","v294","i125","i126","i127","v295","i128","v296","p230"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","p127","v219","ЗМ-47","v218","p124","v222","v223","i83","v224","v225","i84","v312","i133/2","i134","v313","i135","v314","v315","i136","v316","30","v317","v310","i132","i133","v311","p231"];
      }

      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","v423","i216","p253","p252","p251","v384","i173","ЗМ-12","Ф1","p284","vf1","i175","p295"];
      }

      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","v423","i216","p253","p252","v391","i181","ЗМ-18","Ф2","p300","vf2","i182/2","p301"];
      }

      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","v423","i216","p253","v398","i188","ЗМ-24","Ф3","p308","vf3","i193","p309"];
      }

      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","v423","i216","p254","v405","i196","ЗМ-30","Ф4","p314","vf4","i201","p316"];
      }

      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "v153","328Б","v154","p109","v209","p125","ЗМ-46","p126","v423","i216","p254","p255","v412","i204","ЗМ-36","Ф5","p322","vf5","i209","p324"];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-329") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "p153", "v325", "i140", "v326", "i141", "v327", "i142", "v328", "p176", "v253", "i97", "v254", "4", "v254/2", "p203", "v242", "i93", "i94", "v243", "p228"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "p206", "v309", "29", "v308", "v307", "p186", "p185", "20", "p184", "p183", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "p206", "v309", "29", "v308", "v307", "p186", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "v310", "i132", "i133", "v311", "p231"];
      }
      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "p252", "p251", "v384", "i173", "ЗМ-12", "Ф1", "p284", "vf1", "i175", "p295"];
      }
      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "p252", "v391", "i181", "ЗМ-18", "Ф2", "p300", "vf2", "i182/2", "p301"];
      }
      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "v398", "i188", "ЗМ-24", "Ф3", "p308", "vf3", "i193", "p309"];
      }
      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p254", "v405", "i196", "ЗМ-30", "Ф4", "p314", "vf4", "i201", "p316"];
      }
      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "v155", "329Б", "v156", "p88", "v215", "i81", "v216", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p254", "p255", "v412", "i204", "ЗМ-36", "Ф5", "p322", "vf5", "i209", "p324"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-330") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "p153", "v325", "i140", "v326", "i141", "v327", "i142", "v328", "p176", "v253", "i97", "v254", "4", "v254/2", "p203", "v242", "i93", "i94", "v243", "p228"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "p206", "v309", "29", "v308", "v307", "p186", "p185", "20", "p184", "p183", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "p206", "v309", "29", "v308", "v307", "p186", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "p124", "v222", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "v310", "i132", "i133", "v311", "p231"];
      }
      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "p252", "p251", "v384", "i173", "ЗМ-12", "Ф1", "p284", "vf1", "i175", "p295"];
      }
      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "p252", "v391", "i181", "ЗМ-18", "Ф2", "p300", "vf2", "i182/2", "p301"];
      }
      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "v398", "i188", "ЗМ-24", "Ф3", "p308", "vf3", "i193", "p309"];
      }
      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p254", "v405", "i196", "ЗМ-30", "Ф4", "p314", "vf4", "i201", "p316"];
      }
      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "v157", "330Б", "v158", "p110", "v217", "p123", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p254", "p255", "v412", "i204", "ЗМ-36", "Ф5", "p322", "vf5", "i209", "p324"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-331") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v223", "i83", "v224", "p153", "v325", "i140", "v326", "i141", "v327", "i142", "v328", "p176", "v253", "i97", "v254", "4", "v254/2", "p203", "v242", "i93", "i94", "v243", "p228"];
      }

      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "p206", "v309", "29", "v308", "v307", "p186", "p185", "20", "p184", "p183", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "p206", "v309", "29", "v308", "v307", "p186", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v223", "i83", "v224", "v225", "i84", "v312", "i133/2", "i134", "v313", "i135", "v314", "v315", "i136", "v316", "30", "v317", "v310", "i132", "i133", "v311", "p231"];
      }

      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v222", "p124", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "p252", "p251", "v384", "i173", "ЗМ-12", "Ф1", "p284", "vf1", "i175", "p295"];
      }

      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v222", "p124", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "p252", "v391", "i181", "ЗМ-18", "Ф2", "p300", "vf2", "i182/2", "p301"];
      }

      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v222", "p124", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p253", "v398", "i188", "ЗМ-24", "Ф3", "p308", "vf3", "i193", "p309"];
      }

      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v222", "p124", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p254", "v405", "i196", "ЗМ-30", "Ф4", "p314", "vf4", "i201", "p316"];
      }

      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "v159", "331Б", "v160", "p89", "v220", "i82", "v221", "p122", "v226", "p132", "ЗМ-48", "p131", "v222", "p124", "v218", "ЗМ-47", "v219", "p127", "v423", "i216", "p254", "p255", "v412", "i204", "ЗМ-36", "Ф5", "p322", "vf5", "i209", "p324"];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-332") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p147", "v206", "p154", "74", "p155", "v237", "i91", "v238", "i100", "v259", "i101", "v260", "v239", "i92", "v240", "3", "v241", "v242", "i93", "i94", "v243", "p228"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p183", "p184", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "v307", "v308", "29", "v309", "p206", "v310", "i132", "v311", "i133", "v311", "p231"];
      }
      if (activePump.includes("Н-1")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "v385", "ЗМ-11", "i174", "p283", "p284", "vf1", "i175", "Ф1", "p295"];
      }
      if (activePump.includes("Н-2")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "v392", "i182", "ЗМ-17", "p299", "p300", "vf2", "Ф2", "i182/2", "p301"];
      }
      if (activePump.includes("Н-3")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "v399", "i189", "ЗМ-23", "p307", "p308", "vf3", "i193", "Ф3", "p309"];
      }
      if (activePump.includes("Н-4")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "v406", "i197", "i201", "ЗМ-29", "p313", "p314", "vf4", "Ф4", "p316"];
      }
      if (activePump.includes("Н-5")) {
        // prettier-ignore

        newElements = [...newElements, "v161", "332Б", "v162", "i48", "v163", "p111", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "p260", "v413", "i205", "i209", "ЗМ-35", "p321", "p322", "vf5", "Ф5", "p324"];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }

    if (from === "E-333") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p147", "v206", "p154", "74", "p155", "v237", "i91", "v238", "i100", "v259", "i101", "v260", "v239", "i92", "v240", "3", "v241", "v242", "i93", "i94", "v243", "p228"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p183", "p184", "19", "p182", "v256", "38", "v257", "i98", "i99", "v258", "p229"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "v293", "36", "v294", "i125", "i126", "i127", "v295", "i128", "v296", "p230"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "v307", "v308", "29", "v309", "p206", "v310", "i132", "v311", "i133", "v311", "p231"];
      }
      if (activePump.includes("Н-1")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "v385", "ЗМ-11", "i174", "p283", "p284", "vf1", "i175", "Ф1", "p295"];
      }
      if (activePump.includes("Н-2")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "v392", "i182", "ЗМ-17", "p299", "p300", "vf2", "Ф2", "i182/2", "p301"];
      }
      if (activePump.includes("Н-3")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "v399", "i189", "ЗМ-23", "p307", "p308", "vf3", "i193", "Ф3", "p309"];
      }
      if (activePump.includes("Н-4")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "v406", "i197", "i201", "ЗМ-29", "p313", "p314", "vf4", "Ф4", "p316"];
      }
      if (activePump.includes("Н-5")) {
        // prettier-ignore

        newElements = [...newElements, "v164", "333Б", "v165", "p83", "v168", "i49", "v169", "p112", "v230", "i86", "v231", "p142", "108", "p141", "v229", "i85", "v321", "i133/3", "v322", "i138", "i139", "v323", "103", "v324", "p187", "p186", "p185", "20", "p184", "v204", "i76", "v205", "p146", "p147", "73", "p148", "p149", "27", "p150", "v360", "i161", "v361", "i162", "v362", "i163", "v363", "i164", "v364", "i165", "v365", "p117", "ЗМ-45", "p118", "p119", "v196", "i70", "v197", "i71", "v198", "p256", "p257", "p258", "p259", "p260", "v413", "i205", "i209", "ЗМ-35", "p321", "p322", "vf5", "Ф5", "p324"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
    if (from === "E-334") {
      let newElements = [];

      // prettier-ignore
      if (activePump.includes("H-1")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p184","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p147","v206","p154","74","p155","v237","i91","v238","i100","v259","i101","v260","v239","i92","v240","3","v241","v242","i93","i94","v243","p228"
    ];
  }

      // prettier-ignore
      if (activePump.includes("H-2")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p183","p184","19","p182","v256","38","v257","i98","i99","v258","p229"
    ];
  }

      // prettier-ignore
      if (activePump.includes("H-3")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","v293","36","v294","i125","i126","i127","v295","i128","v296","p230"
    ];
  }

      // prettier-ignore
      if (activePump.includes("H-4")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","v307","v308","29","v309","p206","v310","i132","v311","i133","v311","p231"
    ];
  }

      // prettier-ignore
      if (activePump.includes("Н-1")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p184","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p117","ЗМ-45","p118","p119","v196","i70","v197","i71","v198","p256","v385","ЗМ-11","i174","p283","p284","vf1","i175","Ф1","p295"
    ];
  }

      // prettier-ignore
      if (activePump.includes("Н-2")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p184","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p117","ЗМ-45","p118","p119","v196","i70","v197","i71","v198","p256","p257","v392","i182","ЗМ-17","p299","p300","vf2","Ф2","i182/2","p301"
    ];
  }

      // prettier-ignore
      if (activePump.includes("Н-3")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p184","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p117","ЗМ-45","p118","p119","v196","i70","v197","i71","v198","p256","p257","p258","v399","i189","ЗМ-23","p307","p308","vf3","i193","Ф3","p309"
    ];
  }

      // prettier-ignore
      if (activePump.includes("Н-4")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p184","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p117","ЗМ-45","p118","p119","v196","i70","v197","i71","v198","p256","p257","p258","p259","v406","i197","i201","ЗМ-29","p313","p314","vf4","Ф4","p316"
    ];
  }

      // prettier-ignore
      if (activePump.includes("Н-5")) {
    newElements = [
      ..."v166","334Б","v167","p113","p112","v230","i86","v231","p142","108","p141","v229","i85","v321","i133/3","v322","i138","i139","v323","103","v324","p187","p186","p185","20","p184","v204","i76","v205","p146","p147","73","p148","p149","27","p150","v360","i161","v361","i162","v362","i163","v363","i164","v364","i165","v365","p117","ЗМ-45","p118","p119","v196","i70","v197","i71","v198","p256","p257","p258","p259","p260","v413","i205","i209","ЗМ-35","p321","p322","vf5","Ф5","p324"
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
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247", "p212", "p213", "p214", "67", "p215", "p216", "p217", "63", "p218", "v366"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "p216", "p217", "63", "p218", "v366"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p197", "v300", "24", "v301", "p205", "p204", "v292", "22", "v291", "p193", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "p216", "p217", "63", "p218", "v366"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "p207", "v341", "28", "v340", "p202", "v342", "i151", "v343", "p214", "67", "p215", "p216", "p217", "63", "p218", "v366"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-10(2)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247", "p212", "p213", "p214", "67", "p215", "p216", "v370", "p200", "62", "p201", "v371", "p237"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "p216", "v370", "p200", "62", "p201", "v371", "p237"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p197", "v300", "24", "v301", "p205", "p204", "v292", "22", "v291", "p193", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "p216", "v370", "p200", "62", "p201", "v371", "p237"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "p207", "v341", "28", "v340", "p202", "v342", "i151", "v343", "p214", "67", "p215", "p216", "v370", "p200", "62", "p201", "v371", "p237"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-40(1)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "v244", "2", "v245", "p208", "p209", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "p224", "64", "p225", "v367"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p193", "v291", "22", "v292", "p204", "p205", "v301", "24", "v300", "p197", "p198", "v306", "26", "p209", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "p224", "64", "p225", "v367"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p198", "v306", "26", "p209", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "p224", "64", "p225", "v367"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "v337", "32", "v336", "p199", "v344", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "p224", "64", "p225", "v367"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-10(2)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "v244", "2", "v245", "p208", "p209", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "v369", "i166", "v368", "p194", "61", "p195", "v372", "p238"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p193", "v291", "22", "v292", "p204", "p205", "v301", "24", "v300", "p197", "p198", "v306", "26", "p209", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "v369", "i166", "v368", "p194", "61", "p195", "v372", "p238"];
      }
      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p198", "v306", "26", "p209", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "v369", "i166", "v368", "p194", "61", "p195", "v372", "p238"];
      }
      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "v337", "32", "v336", "p199", "v344", "p210", "v353", "i157", "v354", "p221", "66", "p222", "p223", "v369", "i166", "v368", "p194", "61", "p195", "v372", "p238"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-100(3)" && ZGP_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "p296", "v386", "i176", "p297", "v388", "i178", "ЗМ-15", "p268", "v421", "i214", "89"];
      }
      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "p302", "v396", "i186", "p304", "v394", "i184", "ЗМ-21", "p268", "p269", "v421", "i214", "89"];
      }
      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "p310", "v403", "i194", "p306", "ЗМ-27", "i191", "v401", "p268", "p269", "p270", "v421", "i214", "89"];
      }
      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "p315", "v410", "i202", "p312", "ЗМ-33", "i199", "v408", "p268", "p269", "p270", "p271", "v421", "i214", "89"];
      }
      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "p323", "v419", "i212", "p319", "p318", "ЗМ-39", "i207", "v415", "p268", "p269", "p270", "p271", "p272", "v421", "i214", "89"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (to === "910-100(3)" && PST_TANK.includes(from)) {
      let newElements = [];
      if (activePump.includes("Н-1")) {
        // prettier-ignore
        newElements = [...newElements, "p296", "v386", "i176", "p297", "p298", "v389", "i179", "ЗМ-14", "p275", "v422", "i215", "88"];
      }
      if (activePump.includes("Н-2")) {
        // prettier-ignore
        newElements = [...newElements, "p302", "v396", "i186", "p304", "p303", "ЗМ-20", "i185", "v395", "p276", "p275", "v422", "i215", "88"];
      }
      if (activePump.includes("Н-3")) {
        // prettier-ignore
        newElements = [...newElements, "p310", "v403", "i194", "p305", "p306", "ЗМ-26", "i192", "v402", "p276", "p277", "p275", "v422", "i215", "88"];
      }
      if (activePump.includes("Н-4")) {
        // prettier-ignore
        newElements = [...newElements, "p315", "v410", "i202", "p311", "p312", "ЗМ-32", "i200", "v409", "p276", "p277", "p278", "p275", "v422", "i215", "88"];
      }
      if (activePump.includes("Н-5")) {
        // prettier-ignore
        newElements = [...newElements, "p323", "v419", "i212", "p317", "p318", "p319", "ЗМ-38", "i208", "v416", "p276", "p277", "p278", "p279", "p275", "v422", "i215", "88"];
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

  //Перекачки 910-35 to A
  useEffect(() => {
    if (
      from === "E-322" &&
      to === "E-323" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      setActivePump(["H-1"]);
    }
    if (
      from === "E-322" &&
      to === "E-324" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      setActivePump(["H-1"]);
    }

    if (
      from === "E-322" &&
      to === "E-325" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      setActivePump(["H-1"]);
    }

    if (
      from === "E-322" &&
      to === "E-326" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      setActivePump(["H-1"]);
    }

    if (
      from === "E-322" &&
      to === "E-327" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      setActivePump(["H-2"]);
    }
  }, [from, to, lineAorB, activePumpStation]);

  useEffect(() => {
    if (
      from === "E-322" &&
      to === "E-323" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247", "p212", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85", "p85/2", "ЗМ-2", "p84", "v132", "p67", "323A", "p66"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85", "p85/2", "ЗМ-2", "p84", "v132", "p67", "323A", "p66"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p197", "v300", "24", "v301", "p205", "p204", "v292", "22", "v291", "p193", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85", "p85/2", "ЗМ-2", "p84", "v132", "p67", "323A", "p66"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "p207", "v341", "28", "v340", "p202", "v342", "i151", "v343", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85", "p85/2", "ЗМ-2", "p84", "v132", "p67", "323A", "p66"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (
      from === "E-322" &&
      to === "E-324" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247", "p212", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85/2", "v117", "v118", "i37", "i38", "v119", "v120", "ЗМ-7", "p70", "p69", "324A", "p68"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85/2", "v117", "v118", "i37", "i38", "v119", "v120", "ЗМ-7", "p70", "p69", "324A", "p68"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p197", "v300", "24", "v301", "p205", "p204", "v292", "22", "v291", "p193", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85/2", "v117", "v118", "i37", "i38", "v119", "v120", "ЗМ-7", "p70", "p69", "324A", "p68"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "p207", "v341", "28", "v340", "p202", "v342", "i151", "v343", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "p90", "v63", "p86", "v64", "v65", "p85/2", "v117", "v118", "i37", "i38", "v119", "v120", "ЗМ-7", "p70", "p69", "324A", "p68"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (
      from === "E-322" &&
      to === "E-325" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247", "p212", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "v65", "v62", "i14", "v61", "p76", "v54", "325A", "v55"];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "v65", "v65", "v62", "i14", "v61", "p76", "v54", "325A", "v55"];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p197", "v300", "24", "v301", "p205", "p204", "v292", "22", "v291", "p193", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "v65", "v65", "v62", "i14", "v61", "p76", "v54", "325A", "v55"];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [...newElements, "v339", "i150", "i149", "v338", "p207", "v341", "28", "v340", "p202", "v342", "i151", "v343", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p102", "v165", "v65", "v65", "v62", "i14", "v61", "p76", "v54", "325A", "v55"];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (
      from === "E-322" &&
      to === "E-326" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [
      ...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247", "p212", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p103", "v66", "326A", "v67"
    ];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [
      ...newElements, "v290", "i124", "v289", "v287", "i123", "i122", "v286", "37", "v285", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p103", "v66", "326A", "v67"
    ];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [
      ...newElements, "v305", "v304", "i131", "i130", "v303", "35", "v302", "p197", "v300", "24", "v301", "p205", "p204", "v292", "22", "v291", "p193", "p192", "v283", "31", "v283/2", "i121", "v284", "p213", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p103", "v66", "326A", "v67"
    ];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [
      ...newElements, "v339", "i150", "i149", "v338", "p207", "v341", "28", "v340", "p202", "v342", "i151", "v343", "p214", "67", "p215", "v425", "ЗМ-43", "p235", "v427", "i218", "p171", "ЗМ-73", "p169", "p170", "v201", "v202", "v203", "i72", "i73", "i74", "i75", "v200", "v199", "p103", "v66", "326A", "v67"
    ];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }

    if (
      from === "E-322" &&
      to === "E-327" &&
      activePumpStation.includes("910-35") &&
      lineAorB.includes("А")
    ) {
      let newElements = [];
      if (activePump.includes("H-1")) {
        // prettier-ignore
        newElements = [
      ...newElements, "v252", "i96", "i95", "v251", "v250", "p189", "p188", "v246", "1", "v247","p212","v284","i121","v283/2","31","v283","p192","v285","37","v286","i122","i123","v287","p220","122","p219","v272","i113","i112","v271","i111","i110","i109","v270","v269","v268","v267","i108","i107","v266","v265","v264","i102","i103","i104","i105","i106","v261","v262","v263","p130","p129","v24/4","v24/3","p77","v44","v43","327A"
    ];
      }
      if (activePump.includes("H-2")) {
        // prettier-ignore
        newElements = [
      ...newElements,"v290","v289","i124", "p220","122","p219","v272","i113","i112","v271","i111","i110","i109","v270","v269","v268","v267","i108","i107","v266","v265","v264","i102","i103","i104","i105","i106","v261","v262","v263","p130","p129","v24/4","v24/3","p77","v44","v43","327A"
    ];
      }

      if (activePump.includes("H-3")) {
        // prettier-ignore
        newElements = [
      ...newElements,"v305","p227","123","p226","v273","v272","i113","i112","v271","i111","i110","i109","v270","v269","v268","v267","i108","i107","v266","v265","v264","i102","i103","i104","i105","i106","v261","v262","v263","p130","p129","v24/4","v24/3","p77","v44","v43","327A"
    ];
      }

      if (activePump.includes("H-4")) {
        // prettier-ignore
        newElements = [
      ...newElements, "v339","i150","i149","v338","v337","32","v336","p199","v344","p209","v306","p198","v302","35","v303","i130","i131","v304","26","p227","123","p226","v273","v272","i113","i112","v271","i111","i110","i109","v270","v269","v268","v267","i108","i107","v266","v265","v264","i102","i103","i104","i105","i106","v261","v262","v263","p130","p129","v24/4","v24/3","p77","v44","v43","327A"
    ];
      }
      const uniqueElements = [...new Set(newElements)];
      addActiveElementAfterPump(uniqueElements);
    }
  }, [activePump]);

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

import React from "react";
import Valve from "../Valve";
import Pipe from "../Pipe";
import Tank from "../Tank";
import Intersection from "../Intersection";

const TanksLevel = () => {
  return (
    <>
      <Tank left={392} top={485} title="E-323" />
      <Pipe isHorizontal top={525} left={531} length={46} title="p62" />
      <Valve isUp top={515} left={577} title="323Б" />
      <Pipe isHorizontal top={525} left={596} length={66} title="p62" />
      <Pipe isHorizontal top={525} left={992} length={23} title="p64" />
      <Valve isUp top={515} left={1015} title="324Б" />
      <Pipe isHorizontal top={525} left={1034} length={150} title="p64" />
      <Pipe isHorizontal top={577} left={531} length={46} title="p66" />
      <Valve isUp top={567} left={577} title="323A" />
      <Pipe isHorizontal top={577} left={596} length={46} title="p66" />
      <Tank left={851} top={485} title="E-324" />
      <Pipe isHorizontal top={577} left={992} length={23} title="p68" />
      <Valve isUp top={567} left={1015} title="324A" />
      <Pipe isHorizontal top={577} left={1034} length={46} title="p68" />
      <Pipe isHorizontal top={577} left={1080} length={23} title="p70" />
      <Pipe isHorizontal top={577} left={1126} length={23} title="p71" />
      <Pipe isHorizontal top={577} left={1304} length={58} title="p72" />
      {/* ******************************************************** */}
      <Pipe isHorizontal top={669} left={669} length={92} title="p73" />
      <Valve isUp top={659} left={761} title="ЗМ-1" />
      <Pipe isHorizontal top={669} left={780} length={265} title="p73" />
      <Pipe isHorizontal top={669} left={1080} length={86} title="p75" />
      <Pipe isHorizontal top={669} left={1304} length={115} title="p76" />
      <Pipe isHorizontal top={669} left={1764} length={196} title="p77" />
      <Pipe isHorizontal top={669} left={2306} length={168} title="p78" />
      <Pipe isHorizontal top={669} left={2858} length={174} title="p79" />
      <Pipe isHorizontal top={669} left={3376} length={186} title="p80" />
      <Tank left={1373} top={485} title="E-325" />
      <Tank left={1373} top={767} title="E-326" />
      <Tank left={1915} top={485} title="E-327" />
      <Tank left={1915} top={767} title="E-328" />
      <Tank left={2426} top={485} title="E-329" />
      <Tank left={2426} top={767} title="E-330" />
      <Tank left={2988} top={485} title="E-331" />
      <Tank left={2988} top={767} title="E-332" />
      <Tank left={3519} top={485} title="E-333" />
      <Tank left={3519} top={767} title="E-334" />

      {/* ******************************************************** */}

      <Pipe isHorizontal top={704} left={669} length={92} title="p81" />
      <Valve isUp top={694} left={761} title="ЗМ-3" />
      <Pipe isHorizontal top={704} left={780} length={353} title="p81" />
      <Pipe isHorizontal top={704} left={3418} length={196} title="p83" />

      {/* ******************************************************** */}
      <Pipe isHorizontal top={732} left={642} length={119} title="p66" />
      <Valve isUp top={722} left={761} title="ЗМ-2" />
      <Pipe isHorizontal top={732} left={780} length={323} title="p66" />
      <Pipe isHorizontal top={732} left={1096} length={187} title="p85/2" />
      <Pipe isHorizontal top={715} left={1290} length={69} title="p86" />
      <Pipe isHorizontal top={732} left={1788} length={231} title="p87" />
      <Pipe isHorizontal top={732} left={2366} length={163} title="p88" />
      <Pipe isHorizontal top={732} left={2873} length={216} title="p89" />
      <Pipe isHorizontal top={744} left={1304} length={55} title="p90" />
      <Pipe isHorizontal top={756} left={1360} length={115} title="p91" />
      <Pipe isHorizontal top={756} left={1040} length={64} title="p92" />
      {/* ******************************************************** */}

      <Tank left={392} top={750} title="E-322" />
      <Pipe isHorizontal top={796} left={531} length={46} title="p93" />
      <Valve isUp top={786} left={577} title="322A" />
      <Pipe isHorizontal top={796} left={596} length={165} title="p94" />
      <Valve isUp top={786} left={761} title="ЗМ-10" />
      <Pipe isHorizontal top={796} left={780} length={466} title="p95" />

      {/* ******************************************************** */}
      <Pipe isHorizontal top={854} left={531} length={46} title="p96" />
      <Valve isUp top={844} left={577} title="322Б" />
      <Pipe isHorizontal top={854} left={596} length={115} title="p96" />
      <Pipe isHorizontal top={854} left={711} length={50} title="p97/2" />
      <Valve isUp top={844} left={761} title="ЗМ-8" />
      <Pipe isHorizontal top={854} left={780} length={288} title="p97/2" />
      <Pipe isHorizontal top={877} left={706} length={55} title="p99" />
      <Valve isUp top={867} left={761} title="ЗМ-9" />
      <Pipe isHorizontal top={877} left={780} length={265} title="p100" />
      <Pipe isHorizontal top={877} left={1216} length={37} title="p101" />
      {/* ******************************************************** */}
      <Pipe isHorizontal top={958} left={1304} length={17} title="p102" />
      <Pipe isHorizontal top={958} left={1321} length={102} title="p103" />
      <Pipe isHorizontal top={958} left={1764} length={196} title="p104" />
      <Pipe isHorizontal top={958} left={2306} length={175} title="p105" />
      <Pipe isHorizontal top={980} left={3032} length={337} title="p106" />
      <Pipe isHorizontal top={980} left={3369} length={200} title="p107" />
      <Pipe isHorizontal top={981} left={1360} length={115} title="p108" />
      <Pipe isHorizontal top={1004} left={1788} length={231} title="p109" />
      <Pipe isHorizontal top={1004} left={2366} length={163} title="p110" />
      <Pipe isHorizontal top={1004} left={3081} length={207} title="p111" />
      <Pipe isHorizontal top={1004} left={3288} length={127} title="p112" />
      <Pipe isHorizontal top={1004} left={3415} length={196} title="p113" />
      <Pipe isHorizontal top={1027} left={3477} length={877} title="p114" />

      {/* ******************************************************** */}
      <Pipe top={525} left={662} length={151} title="v133" />
      <Pipe top={669} left={662} length={42} title="v134" />
      <Pipe top={676} left={1038} length={23} title="v138" />

      <Intersection top={700} left={1034} title="i44" />
      <Pipe top={714} left={1038} length={15} title="v138" />

      <Intersection top={728} left={1034} title="i44" />
      <Pipe top={745} left={1038} length={18} title="v138" />
      <Pipe top={763} left={1097} length={29} title="v138" />
      <Intersection top={792} left={1093} title="i44" />
      <Pipe top={854} left={706} length={30} title="v139" />
      <Pipe top={854} left={1068} length={198} title="v140" />
      <Pipe top={1068} left={1068} length={24} title="v140/2" />
      <Pipe top={884} left={1038} length={179} title="v141" />

      <Pipe top={627} left={1468} length={15} title="v142" />
      <Valve top={640} left={1464} title="325Б" />
      <Pipe top={661} left={1468} length={102} title="v142" />
      <Pipe top={636} left={1177} length={92} title="v144" />
      <Intersection top={728} left={1173} title="i45" />
      <Pipe top={741} left={1177} length={51} title="v145" />
      <Intersection top={792} left={1173} title="i46" />

      <Pipe top={909} left={1468} length={15} title="v146" />
      <Valve top={922} left={1464} title="326Б" />
      <Pipe top={943} left={1468} length={38} title="v146" />
      <Pipe top={756} left={1360} length={196} title="v142" />
      <Intersection top={954} left={1356} title="i47" />
      <Pipe top={969} left={1360} length={19} title="v142" />
      <Pipe top={988} left={1360} length={75} title="v150" />

      <Pipe top={628} left={2012} length={15} title="v151" />
      <Valve top={641} left={2008} title="327Б" />
      <Pipe top={662} left={2012} length={70} title="v151" />

      <Pipe top={910} left={2012} length={15} title="v153" />
      <Valve top={923} left={2008} title="328Б" />
      <Pipe top={944} left={2012} length={60} title="v153" />

      <Pipe top={628} left={2522} length={15} title="v155" />
      <Valve top={641} left={2518} title="329Б" />
      <Pipe top={662} left={2522} length={70} title="v155" />

      <Pipe top={910} left={2522} length={15} title="v157" />
      <Valve top={923} left={2518} title="330Б" />
      <Pipe top={944} left={2522} length={60} title="v157" />

      <Pipe top={628} left={3082} length={15} title="v159" />
      <Valve top={641} left={3078} title="331Б" />
      <Pipe top={662} left={3082} length={70} title="v159" />

      <Pipe top={910} left={3081} length={15} title="v161" />
      <Valve top={923} left={3077} title="332Б" />
      <Pipe top={944} left={3081} length={32} title="v161" />

      <Intersection top={976} left={3077} title="i48" />
      <Pipe top={993} left={3081} length={12} title="v161" />

      <Pipe top={627} left={3611} length={15} title="v164" />
      <Valve top={640} left={3607} title="333Б" />
      <Pipe top={661} left={3611} length={50} title="v164" />

      <Pipe top={910} left={3611} length={15} title="v166" />
      <Valve top={923} left={3607} title="334Б" />
      <Pipe top={944} left={3611} length={67} title="v166" />
      <Pipe top={704} left={3411} length={272} title="v164" />
      <Intersection top={976} left={3407} title="i49" />
      <Pipe top={989} left={3411} length={22} title="v164" />
      <Intersection top={1052} left={1064} title="i50" />
      <Pipe top={1056} left={1338} length={36} title="v170" />
      <Pipe top={732} left={1788} length={221} title="v207" />

      <Intersection top={954} left={1784} title="i77" />
      <Pipe top={968} left={1788} length={43} title="v207" />
      <Pipe top={1004} left={1788} length={180} title="v209" />
      <Pipe top={1177} left={1788} length={53} title="v210" />
      <Intersection top={1231} left={1784} title="i78" />
      <Pipe top={1245} left={1788} length={20} title="v211" />

      <Intersection top={1265} left={1784} title="i79" />
      <Pipe top={1279} left={1788} length={26} title="v212" />
      <Pipe top={1298} left={2119} length={25} title="v213" />
      <Intersection top={1323} left={2115} title="i80" />
      <Pipe top={1337} left={2119} length={77} title="v214" />
      <Pipe top={732} left={2366} length={223} title="v155" />
      <Intersection top={954} left={2362} title="i81" />
      <Pipe top={968} left={2366} length={43} title="v155" />
      <Pipe top={1004} left={2366} length={111} title="v217" />
      <Pipe top={1108} left={2446} length={30} title="v218" />
      <Valve top={1136} left={2442} title="ЗМ-47" />
      <Pipe top={1157} left={2446} length={27} title="v218" />
      <Pipe top={732} left={2873} length={320} title="v159" />
      <Intersection top={1052} left={2869} title="i82" />
      <Pipe top={1066} left={2873} length={26} title="v159" />

      <Pipe top={461} left={2319} length={203} title="v373" />
      <Intersection top={665} left={2315} title="i167" />
      <Pipe top={679} left={2319} length={275} title="v373" />
      <Intersection top={954} left={2315} title="i167" />
      <Pipe top={968} left={2319} length={205} title="v373" />
      <Intersection top={1173} left={2315} title="i167" />
      <Pipe top={1187} left={2319} length={20} title="v373" />
    </>
  );
};

export default TanksLevel;

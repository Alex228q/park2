import Intersection from "../Intersection";

import Pipe from "../Pipe";
import Valve from "../Valve";

const TopLevel = () => {
  return (
    <>
      <Pipe isHorizontal top={80} left={819} length={195} title="p1" />
      <Pipe isHorizontal top={80} left={1014} length={820} title="p2" />
      <Pipe isHorizontal top={80} left={1904} length={323} title="p3" />
      <Valve isUp title="133" top={70} left={2227} />
      <Pipe isHorizontal top={80} left={2246} length={34} title="p4" />
      <Pipe isHorizontal top={80} left={2280} length={80} title="p5" />
      <Pipe isHorizontal top={80} left={2360} length={58} title="p6" />
      <Pipe isHorizontal top={127} left={2841} length={147} title="p6/1" />
      <Pipe isHorizontal top={127} left={2988} length={69} title="p6/2" />
      <Pipe isHorizontal top={144} left={3138} length={46} title="p6/3" />

      {/* *************************************** */}
      <Pipe isHorizontal top={115} left={288} length={2458} title="p7" />
      <Valve isUp top={105} left={2746} />
      <Pipe isHorizontal top={115} left={2765} length={692} title="p8" />

      {/* *************************************** */}

      <Pipe isHorizontal top={138} left={1246} length={1500} title="p9" />
      <Valve isUp top={128} left={2746} title="ЗМ-44" />
      <Pipe isHorizontal top={138} left={2765} length={39} title="p10" />

      {/* *************************************** */}
      <Pipe isHorizontal top={173} left={1304} length={1615} title="p11" />
      <Valve isUp top={140} left={865} title="С-2" />
      <Pipe isHorizontal top={150} left={791} length={28} title="p11/1" />
      <Pipe isHorizontal top={150} left={819} length={46} title="p11/2" />
      <Pipe isHorizontal top={150} left={884} length={69} title="p11/3" />
      <Valve isUp top={140} left={2954} title="17" isLeft />
      <Pipe isHorizontal top={150} left={2942} length={12} title="p11/4" />
      <Pipe isHorizontal top={150} left={2973} length={15} title="p11/5" />

      {/* *************************************** */}
      <Pipe isHorizontal top={231} left={288} length={496} title="p12" />
      <Pipe isHorizontal top={231} left={784} length={81} title="p12/2" />
      <Valve isUp top={221} left={865} title="130" />
      <Pipe isHorizontal top={231} left={884} length={69} title="p13" />
      <Pipe isHorizontal top={231} left={953} length={58} title="p14" />
      <Pipe isHorizontal top={231} left={1011} length={348} title="p15" />
      <Pipe isHorizontal top={231} left={1359} length={419} title="p16" />
      <Pipe isHorizontal top={231} left={1783} length={85} title="p17" />
      <Valve isUp top={221} left={1868} title="138" />
      <Pipe isHorizontal top={231} left={1887} length={985} title="p18" />
      <Pipe isHorizontal top={231} left={2872} length={46} title="p19" />
      <Pipe isHorizontal top={231} left={2988} length={150} title="p19/1" />
      <Pipe isHorizontal top={231} left={3138} length={346} title="p19/2" />
      {/* *************************************** */}

      <Pipe isHorizontal top={265} left={288} length={1419} title="p20" />
      <Pipe isHorizontal top={265} left={1754} length={114} title="p21" />
      <Valve isUp top={255} left={1868} title="51A" />
      <Pipe isHorizontal top={265} left={1887} length={785} title="p22" />
      <Pipe isHorizontal top={265} left={2672} length={277} title="p23" />
      <Pipe isHorizontal top={265} left={2942} length={323} title="p24" />
      <Valve isUp top={255} left={3265} title="100" />
      <Pipe isHorizontal top={265} left={3284} length={92} title="p25" />

      {/* *************************************** */}
      <Pipe isHorizontal top={295} left={288} length={1442} title="p26" />
      <Pipe isHorizontal top={295} left={2146} length={54} title="p27" />
      <Pipe isHorizontal top={295} left={2204} length={23} title="p28" />
      <Valve isUp top={285} left={2227} title="134" />
      <Pipe isHorizontal top={295} left={2246} length={38} title="p29" />

      {/* *************************************** */}
      <Pipe isHorizontal top={317} left={1395} length={232} title="p30" />
      <Valve isUp top={307} left={1627} title="51" />
      <Pipe isHorizontal top={317} left={1646} length={104} title="p31" />
      <Pipe isHorizontal top={317} left={1750} length={118} title="p32" />
      <Valve isUp top={307} left={1868} title="52" />
      <Pipe isHorizontal top={317} left={1887} length={92} title="p33" />
      <Pipe isHorizontal top={317} left={1979} length={63} title="p34" />
      <Valve isUp top={307} left={2042} title="147" />
      <Pipe isHorizontal top={317} left={2061} length={85} title="p34/1" />

      {/* *************************************** */}
      <Pipe isHorizontal top={346} left={1764} length={104} title="p35" />
      <Valve isUp top={336} left={1868} title="55" />
      <Pipe isHorizontal top={346} left={1887} length={132} title="p36" />
      <Pipe isHorizontal top={346} left={2204} length={23} title="p37" />
      <Valve isUp top={336} left={2227} title="C-1" />
      <Pipe isHorizontal top={346} left={2246} length={38} title="p38" />
      <Pipe isHorizontal top={346} left={2319} length={865} title="p39" />
      {/* *************************************** */}
      <Pipe isHorizontal top={369} left={1785} length={83} title="p40" />
      <Valve isUp top={359} left={1868} title="148" />
      <Pipe isHorizontal top={369} left={1887} length={92} title="p41" />
      <Pipe isHorizontal top={369} left={1979} length={63} title="p42" />
      <Valve isUp top={359} left={2042} title="53" />
      <Pipe isHorizontal top={369} left={2061} length={81} title="p43" />
      <Pipe isHorizontal top={369} left={2142} length={161} title="p44" />
      <Pipe isHorizontal top={369} left={2303} length={23} title="p45" />
      {/* *************************************** */}
      <Pipe isHorizontal top={415} left={288} length={935} title="p46" />
      <Pipe isHorizontal top={415} left={1223} length={81} title="p47" />
      <Pipe isHorizontal top={415} left={1304} length={564} title="p48" />
      <Valve isUp top={405} left={1868} />
      <Pipe isHorizontal top={415} left={1887} length={46} title="p49" />
      <Pipe isHorizontal top={415} left={1933} length={109} title="p50" />
      <Valve isUp top={405} left={2042} title="54" />
      <Pipe isHorizontal top={415} left={2061} length={242} title="p51" />
      <Pipe isHorizontal top={415} left={2303} length={81} title="p52" />
      <Pipe isHorizontal top={415} left={2384} length={39} title="p53" />
      <Valve isUp top={405} left={2423} title="57" />
      <Pipe isHorizontal top={415} left={2442} length={270} title="p54" />
      <Valve isUp top={405} left={2712} title="58" />
      <Pipe isHorizontal top={415} left={2731} length={23} title="p55" />
      <Pipe isHorizontal top={415} left={2754} length={104} title="p56" />
      {/* *************************************** */}
      <Pipe isHorizontal top={461} left={1764} length={104} title="p57" />
      <Valve isUp top={451} left={1868} title="56" />
      <Pipe isHorizontal top={461} left={1887} length={46} title="p58" />
      <Pipe isHorizontal top={461} left={2326} length={57} title="p59" />
      <Pipe isHorizontal top={461} left={2673} length={39} title="p60" />
      <Valve isUp top={451} left={2712} title="59" />
      <Pipe isHorizontal top={461} left={2731} length={23} title="p61" />

      <Pipe isHorizontal top={485} left={1355} length={33} title="p115" />
      <Pipe isHorizontal top={214} left={2811} length={25} title="p116" />
      <Pipe isHorizontal top={629} left={1149} length={35} title="p116/2" />

      {/* *************************************** */}
      <Pipe top={57} left={1827} length={23} title="v1" />
      <Pipe top={57} left={1904} length={23} title="v2" />
      <Pipe top={64} left={2357} length={23} title="v3" />
      <Valve top={43} left={2353} title="150" />
      <Pipe top={22} left={2357} length={23} title="v4" />
      <Pipe top={80} left={2277} length={29} title="v5" />
      <Intersection top={111} left={2273} title="i1" />
      <Intersection top={134} left={2273} title="i2" />
      <Pipe top={147} left={2277} length={25} title="v6" />
      <Intersection top={169} left={2273} title="i3" />
      <Pipe top={182} left={2277} length={48} title="v7" />
      <Intersection top={227} left={2273} title="i4" />
      <Pipe top={241} left={2277} length={20} title="v8" />
      <Intersection top={261} left={2273} title="i5" />
      <Pipe top={275} left={2277} length={20} title="v9" />
      <Pipe top={302} left={2277} length={13} title="v10" />
      <Valve top={313} left={2273} title="135" />
      <Pipe top={334} left={2277} length={12} title="v11" />
      <Pipe top={334} left={2200} length={19} title="v12" />

      <Valve top={313} left={2196} title="136" />
      <Pipe top={295} left={2200} length={20} title="v13" />
      <Valve top={335} left={2134} title="137" />
      <Pipe top={295} left={2139} length={25} title="v14" />
      <Pipe top={320} left={2139} length={17} title="v15" />
      <Pipe top={356} left={2139} length={20} title="v16" />
      <Pipe top={317} left={2019} length={59} title="v17" />
      <Pipe top={231} left={1778} length={30} title="v18" />
      <Intersection top={261} left={1774} title="i6" />
      <Pipe top={278} left={1778} length={34} title="v19" />

      <Intersection top={313} left={1774} title="i7" />
      <Pipe top={327} left={1778} length={15} title="v20" />

      <Intersection top={342} left={1774} title="i8" />
      <Pipe top={355} left={1778} length={21} title="v21" />

      <Pipe top={265} left={1747} length={59} title="v22" />
      <Pipe top={265} left={1700} length={25} title="v22/2" />
      <Intersection top={291} left={1696} title="i80" />
      <Intersection top={313} left={1696} title="i81" />
      <Pipe top={327} left={1700} length={85} title="v22/3" />
      <Intersection top={411} left={1696} title="i82" />
      <Pipe top={426} left={1700} length={908} title="v22/4" />
      <Pipe top={295} left={1723} length={19} title="v22/5" />
      <Intersection top={313} left={1719} title="i83" />
      <Pipe top={327} left={1723} length={85} title="v22/6" />
      <Intersection top={411} left={1719} title="i84" />
      <Pipe top={426} left={1723} length={850} title="v22/7" />

      <Pipe top={346} left={1757} length={63} title="v23" />
      <Intersection top={411} left={1753} title="i9" />
      <Pipe top={424} left={1757} length={812} title="v24" />
      <Pipe top={415} left={1930} length={53} title="v25" />
      <Pipe top={353} left={2319} length={16} title="v26" />
      <Pipe top={376} left={2319} length={36} title="v27" />
      <Intersection top={411} left={2315} title="i10" />
      <Pipe top={426} left={2319} length={42} title="v28" />
      <Pipe top={415} left={2381} length={53} title="v29" />
      <Pipe top={415} left={2750} length={53} title="v30" />
      <Pipe top={265} left={2668} length={80} title="v31" />
      <Intersection top={342} left={2664} title="i11" />
      <Pipe top={356} left={2668} length={56} title="v32" />
      <Intersection top={411} left={2664} title="i12" />
      <Pipe top={424} left={2668} length={44} title="v33" />
      <Pipe top={415} left={2858} length={261} title="v34" />
      <Pipe top={415} left={2299} length={261} title="v35" />
      <Pipe top={676} left={2299} length={289} title="v36" />
      <Pipe top={661} left={2474} length={15} title="v37" />
      <Valve top={640} left={2470} title="329A" isLeft />
      <Pipe top={627} left={2474} length={15} title="v38" />

      <Pipe top={910} left={2474} length={15} title="v39" />
      <Valve top={923} left={2470} title="330A" isLeft />
      <Pipe top={944} left={2474} length={15} title="v40" />

      <Pipe top={910} left={1960} length={15} title="v41" />
      <Valve top={923} left={1956} title="328A" isLeft />
      <Pipe top={944} left={1960} length={21} title="v42" />

      <Pipe top={628} left={1960} length={15} title="v43" />
      <Valve top={641} left={1956} title="327A" isLeft />
      <Pipe top={662} left={1960} length={14} title="v44" />

      <Pipe top={628} left={3032} length={15} title="v45" />
      <Valve top={641} left={3028} title="331A" isLeft />
      <Pipe top={662} left={3032} length={14} title="v46" />

      <Pipe top={265} left={3369} length={722} title="v47" />
      <Pipe top={231} left={3477} length={434} title="v47/2" />
      <Intersection top={665} left={3473} title="i85" />
      <Pipe top={679} left={3477} length={21} title="v47/3" />
      <Intersection top={700} left={3473} title="i86" />
      <Pipe top={714} left={3477} length={263} title="v47/4" />
      <Intersection top={976} left={3473} title="i87" />
      <Pipe top={990} left={3477} length={10} title="v47/5" />

      <Intersection top={1000} left={3473} title="i88" />
      <Pipe top={1014} left={3477} length={20} title="v47/5" />

      <Pipe top={910} left={3032} length={15} title="v48" />
      <Valve top={923} left={3028} title="332A" isLeft />
      <Pipe top={944} left={3032} length={36} title="v49" />

      <Pipe top={910} left={3562} length={15} title="v50" />
      <Valve top={923} left={3558} title="334A" isLeft />
      <Pipe top={944} left={3562} length={36} title="v51" />

      <Pipe top={627} left={3562} length={15} title="v52" />
      <Valve top={640} left={3558} title="333A" isLeft />
      <Pipe top={661} left={3562} length={15} title="v53" />

      <Pipe top={627} left={1416} length={15} title="v54" />
      <Valve top={640} left={1412} title="325A" isLeft />
      <Pipe top={661} left={1416} length={15} title="v55" />
      <Pipe top={584} left={1304} length={85} title="v56" />
      <Pipe top={519} left={1355} length={58} title="v57" />

      <Valve top={498} left={1351} title="80" />
      <Pipe top={479} left={1355} length={8} title="v58" />
      <Pipe top={487} left={1355} length={13} title="v58/2" />
      <Valve top={458} left={1351} title="50" />
      <Pipe top={423} left={1388} length={69} title="v59" />

      <Intersection top={411} left={1384} title="i13" />
      <Pipe top={317} left={1388} length={95} title="v60" />
      <Pipe top={676} left={1304} length={35} title="v61" />
      <Intersection top={711} left={1300} title="i14" />
      <Pipe top={724} left={1304} length={20} title="v62" />
      <Pipe top={722} left={1352} length={22} title="v63" />
      <Pipe top={715} left={1283} length={24} title="v64" />
      <Pipe top={751} left={1304} length={207} title="v65" />

      <Pipe top={909} left={1416} length={15} title="v66" />
      <Valve top={922} left={1412} title="326A" isLeft />
      <Pipe top={943} left={1416} length={15} title="v67" />

      <Pipe top={424} left={1355} length={36} title="v68" />

      <Intersection top={411} left={1351} title="i15" />
      <Intersection top={291} left={1351} title="i16" />
      <Intersection top={261} left={1351} title="i17" />

      <Pipe top={304} left={1355} length={109} title="v69" />
      <Pipe top={274} left={1355} length={19} title="v70" />
      <Pipe top={231} left={1355} length={32} title="v71" />
      <Pipe top={150} left={949} length={34} title="v72" />
      <Valve top={182} left={945} title="132" />
      <Pipe top={203} left={949} length={35} title="v73" />

      <Pipe top={150} left={784} length={34} title="v74" />
      <Valve top={182} left={780} title="131" />
      <Pipe top={203} left={784} length={35} title="v75" />

      <Pipe top={203} left={1007} length={35} title="v76" />
      <Valve top={182} left={1003} title="128" />
      <Intersection top={111} left={1003} title="i18" />
      <Pipe top={124} left={1007} length={60} title="v77" />
      <Pipe top={80} left={1007} length={33} title="v78" />
      <Pipe top={80} left={818} length={33} title="v79" />

      <Intersection top={111} left={814} title="i19" />
      <Pipe top={124} left={818} length={8} title="v80" />
      <Pipe top={150} left={818} length={7} title="v80/1" />
      <Valve top={129} left={814} title="129" />

      <Pipe top={128} left={2804} length={17} title="v81" />
      <Intersection top={111} left={2800} title="i20" />
      <Pipe top={75} left={2804} length={37} title="v82" />
      <Intersection top={169} left={2800} title="i21" />
      <Pipe top={138} left={2804} length={33} title="v83" />
      <Pipe top={182} left={2804} length={10} title="v84" />
      <Valve top={190} left={2800} title="75" />
      <Valve top={190} left={2830} title="76" />
      <Pipe top={211} left={2804} length={10} title="v85" />
      <Pipe top={211} left={2834} length={10} title="v86" />

      <Intersection top={169} left={2830} title="i22" />
      <Pipe top={182} left={2834} length={10} title="v87" />
      <Pipe top={127} left={2834} length={44} title="v88" />
      <Pipe top={182} left={2869} length={56} title="v89" />
      <Intersection top={169} left={2865} title="i23" />
      <Pipe top={136} left={2869} length={35} title="v90" />

      <Intersection top={117} left={2859} title="i24" isBig />
      <Pipe top={75} left={2869} length={37} title="v91" />

      <Pipe top={138} left={2912} length={35} title="v92" />
      <Intersection top={117} left={2902} title="i25" isBig />
      <Pipe top={75} left={2912} length={37} title="v93" />
      <Pipe top={157} left={2942} length={115} title="v94" />
      <Pipe top={127} left={2988} length={30} title="v95" />
      <Pipe top={150} left={2988} length={81} title="v96" />
      <Pipe top={203} left={3131} length={35} title="v97" />
      <Valve top={182} left={3127} title="81" />
      <Pipe top={144} left={3131} length={40} title="v98" />
      <Pipe top={144} left={3184} length={40} title="v99" />

      <Valve top={182} left={3180} title="77" />
      <Pipe top={203} left={3184} length={23} title="v100" />
      <Intersection top={227} left={3180} title="i26" />
      <Pipe top={240} left={3184} length={22} title="v101" />

      <Intersection top={261} left={3180} title="i27" />
      <Pipe top={274} left={3184} length={79} title="v102" />
      <Pipe top={124} left={3131} length={27} title="v103" />
      <Intersection top={111} left={3127} title="i28" />
      <Pipe top={75} left={3131} length={37} title="v104" />
      <Intersection top={111} left={3053} title="i29" />
      <Pipe top={75} left={3057} length={37} title="v105" />
      <Pipe top={124} left={3057} length={10} title="v105/2" />
      <Pipe top={95} left={2704} length={27} title="v106" />
      <Valve top={74} left={2700} title="150" />
      <Pipe top={62} left={2704} length={14} title="v106/2" />
      <Pipe top={138} left={1246} length={87} title="v107" />

      <Pipe top={173} left={1304} length={53} title="v107/2" />
      <Intersection top={227} left={1300} title="i77" />
      <Pipe top={241} left={1304} length={21} title="v107/3" />

      <Intersection top={261} left={1300} title="i78" />
      <Pipe top={275} left={1304} length={16} title="v107/4" />

      <Intersection top={291} left={1300} title="i79" />
      <Pipe top={307} left={1304} length={115} title="v107/4" />

      <Intersection top={227} left={1242} title="i30" />

      <Pipe top={240} left={1246} length={20} title="v108" />
      <Intersection top={261} left={1242} title="i31" />
      <Pipe top={274} left={1246} length={20} title="v109" />
      <Intersection top={291} left={1242} title="i32" />
      <Pipe top={305} left={1246} length={107} title="v110" />

      <Intersection top={411} left={1242} title="i33" />
      <Pipe top={425} left={1246} length={303} title="v111" />

      <Intersection top={728} left={1242} title="i34" />
      <Pipe top={741} left={1246} length={62} title="v112" />
      <Pipe top={803} left={1246} length={74} title="v113" />
      <Pipe top={806} left={1216} length={71} title="v114" />
      <Intersection top={792} left={1212} title="i35" />
      <Pipe top={742} left={1216} length={51} title="v115" />
      <Pipe top={415} left={1216} length={46} title="v116" />
      <Pipe top={480} left={1216} length={247} title="v116/2" />
      <Valve top={459} left={1212} title="82" />
      <Intersection top={728} left={1212} title="i36" />
      <Pipe top={577} left={1096} length={36} title="v117" />
      <Valve top={611} left={1092} title="ЗМ-7" isRotate />
      <Pipe top={632} left={1096} length={32} title="v118" />
      <Intersection top={665} left={1092} title="i37" />
      <Pipe top={678} left={1096} length={20} title="v119" />
      <Pipe top={713} left={1096} length={26} title="v120" />
      <Intersection top={700} left={1092} title="i38" />

      <Pipe top={577} left={1073} length={36} title="v121" />
      <Valve top={611} left={1069} title="ЗМ-5" isRotate />
      <Pipe top={632} left={1073} length={44} title="v122" />

      <Pipe top={577} left={1126} length={36} title="v123" />
      <Valve top={611} left={1122} title="ЗМ-6" isRotate />
      <Valve top={761} left={1122} title="107" />
      <Pipe top={632} left={1126} length={31} title="v124" />
      <Intersection top={665} left={1122} title="i39" />
      <Pipe top={679} left={1126} length={32} title="v125" />

      <Intersection top={728} left={1122} title="i40" />
      <Pipe top={704} left={1126} length={25} title="v126" />
      <Pipe top={741} left={1126} length={22} title="v127" />
      <Pipe top={782} left={1126} length={9} title="v128" />
      <Intersection top={792} left={1122} title="i41" />
      <Pipe top={525} left={1177} length={46} title="v129" />
      <Valve top={569} left={1173} title="ЗМ-4" isRotate />
      <Pipe top={590} left={1177} length={46} title="v130" />

      <Pipe top={577} left={1149} length={59} title="v131" />
      <Pipe top={577} left={635} length={162} title="v132" />
    </>
  );
};

export default TopLevel;

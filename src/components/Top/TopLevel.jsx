import Intersection from "../Intersection";
import IntersectionPipe from "../IntersectionPipe";
import Pipe from "../Pipe";
import Valve from "../Valve";

const TopLevel = () => {
  return (
    <>
      <Pipe isHorizontal top={80} left={819} length={196} title="p1" />
      <Pipe isHorizontal top={80} left={1015} length={819} title="p2" />
      <Pipe isHorizontal top={80} left={1904} length={323} title="p3" />
      <Valve isUp title="133" top={70} left={2227} />
      <Pipe isHorizontal top={80} left={2246} length={34} title="p4" />
      <Pipe isHorizontal top={80} left={2280} length={80} title="p5" />
      <Pipe isHorizontal top={80} left={2360} length={58} title="p6" />
      <Pipe isHorizontal top={127} left={2850} length={138} title="p6/1" />
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
      <Pipe isHorizontal top={150} left={796} length={23} title="p11/1" />
      <Pipe isHorizontal top={150} left={819} length={46} title="p11/2" />
      <Pipe isHorizontal top={150} left={884} length={69} title="p11/3" />
      <Valve isUp top={140} left={2954} title="17" />
      <Pipe isHorizontal top={150} left={2942} length={12} title="p11/4" />
      <Pipe isHorizontal top={150} left={2973} length={12} title="p11/5" />

      {/* *************************************** */}
      <Pipe isHorizontal top={231} left={288} length={496} title="p12" />
      <Pipe isHorizontal top={231} left={784} length={81} title="p12/2" />
      <Valve isUp top={221} left={865} title="130" />
      <Pipe isHorizontal top={231} left={884} length={69} title="p13" />
      <Pipe isHorizontal top={231} left={953} length={58} title="p14" />
      <Pipe isHorizontal top={231} left={1011} length={334} title="p15" />
      <Pipe isHorizontal top={231} left={1344} length={439} title="p16" />
      <Pipe isHorizontal top={231} left={1783} length={85} title="p17" />
      <Valve isUp top={221} left={1868} title="138" />
      <Pipe isHorizontal top={231} left={1887} length={969} title="p18" />
      <Pipe isHorizontal top={231} left={2856} length={46} title="p19" />
      <Pipe isHorizontal top={231} left={2988} length={150} title="p19/1" />
      <Pipe isHorizontal top={231} left={3138} length={346} title="p19/2" />
      {/* *************************************** */}

      <Pipe isHorizontal top={265} left={288} length={1419} title="p20" />
      <Pipe isHorizontal top={265} left={1754} length={114} title="p21" />
      <Valve isUp top={255} left={1868} title="51A" />
      <Pipe isHorizontal top={265} left={1887} length={785} title="p22" />
      <Pipe isHorizontal top={265} left={2672} length={254} title="p23" />
      <Pipe isHorizontal top={265} left={2926} length={339} title="p24" />
      <Valve isUp top={255} left={3265} title="100" />
      <Pipe isHorizontal top={265} left={3284} length={92} title="p25" />

      {/* *************************************** */}
      <Pipe isHorizontal top={295} left={288} length={1442} title="p26" />
      <Pipe isHorizontal top={295} left={2146} length={54} title="p27" />
      <Pipe isHorizontal top={295} left={2204} length={23} title="p28" />
      <Valve isUp top={285} left={2227} title="134" />
      <Pipe isHorizontal top={295} left={2246} length={38} title="p29" />

      {/* *************************************** */}
      <Pipe isHorizontal top={317} left={1396} length={231} title="p30" />
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
      <Pipe isHorizontal top={461} left={2678} length={34} title="p60" />
      <Valve isUp top={451} left={2712} title="59" />
      <Pipe isHorizontal top={461} left={2731} length={23} title="p61" />

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
      <Pipe top={346} left={1757} length={63} title="v23" />
      <Intersection top={411} left={1753} title="i9" />
      <Pipe top={424} left={1757} length={805} title="v24" />


    </>
  );
};

export default TopLevel;

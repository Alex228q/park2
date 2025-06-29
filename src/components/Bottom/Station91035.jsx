import React from "react";
import Pump from "../Pump";
import Pipe from "../Pipe";
import Valve from "../Valve";
import Intersection from "../Intersection";
import SimpleText from "../SimpleText";

const Station91035 = () => {
  return (
    <>
      <SimpleText
        title="Насосная 910-35"
        top={2400}
        left={2700}
        fontSize={50}
        width={500}
      />
      <Pipe isHorizontal top={1985} left={2608} length={381} title="p176" />
      <Pipe isHorizontal top={2008} left={3105} length={57} title="p177" />
      <Pipe isHorizontal top={2025} left={2711} length={185} title="p178" />
      <Valve
        title="105"
        top={2015}
        left={2896}
        isUp
        isLeft
        textTop={2003}
        textLeft={2884}
      />
      <Pipe isHorizontal top={2025} left={2915} length={10} title="p179" />
      <Pipe isHorizontal top={2025} left={2925} length={23} title="p180" />
      <Pipe isHorizontal top={2042} left={2504} length={69} title="p181" />
      <Pipe isHorizontal top={2060} left={2747} length={46} title="p182" />
      <Valve title="19" top={2050} left={2793} isUp />
      <Pipe isHorizontal top={2060} left={2812} length={70} title="p183" />
      <Pipe isHorizontal top={2060} left={2875} length={15} title="p184" />

      <Valve title="20" top={2050} left={2890} isUp />
      <Pipe isHorizontal top={2060} left={2909} length={23} title="p184" />
      <Pipe isHorizontal top={2060} left={2932} length={197} title="p186" />
      <Pipe isHorizontal top={2060} left={3129} length={53} title="p187" />
      <Pipe isHorizontal top={2100} left={2527} length={23} title="p188" />
      <Pipe isHorizontal top={2100} left={2550} length={92} title="p189" />
      <Pipe isHorizontal top={2100} left={3129} length={35} title="p190" />
      <Pipe isHorizontal top={2123} left={2642} length={69} title="p191" />
      <Pipe isHorizontal top={2123} left={2799} length={28} title="p192" />
      <Pipe isHorizontal top={2123} left={2827} length={34} title="p193" />
      <Pipe isHorizontal top={2117} left={3393} length={47} title="p194" />
      <Valve title="61" top={2107} left={3440} isUp />
      <Pipe isHorizontal top={2117} left={3459} length={772} title="p195" />
      {/* <Pipe isHorizontal top={2117} left={4231} length={20} title="p196" /> */}
      <Pipe isHorizontal top={2146} left={2989} length={23} title="p197" />
      <Pipe isHorizontal top={2146} left={3012} length={23} title="p198" />
      <Pipe isHorizontal top={2146} left={3185} length={64} title="p199" />
      <Pipe isHorizontal top={2146} left={3428} length={12} title="p200" />
      <Valve title="62" top={2136} left={3440} isUp />
      <Pipe isHorizontal top={2146} left={3459} length={715} title="p201" />
      <Pipe isHorizontal top={2156} left={3216} length={17} title="p202" />
      <Pipe isHorizontal top={2227} left={2569} length={39} title="p203" />
      <Pipe isHorizontal top={2227} left={2854} length={100} title="p204" />
      <Pipe isHorizontal top={2227} left={2954} length={28} title="p205" />
      <Pipe isHorizontal top={2227} left={3106} length={30} title="p206" />
      <Pipe isHorizontal top={2227} left={3185} length={26} title="p207" />
      <Pipe isHorizontal top={2250} left={2550} length={485} title="p208" />
      <Pipe isHorizontal top={2250} left={3035} length={221} title="p209" />
      <Pipe isHorizontal top={2250} left={3249} length={20} title="p210" />
      <Pipe isHorizontal top={2273} left={2504} length={23} title="p211" />
      <Pipe isHorizontal top={2273} left={2527} length={265} title="p212" />
      <Pipe isHorizontal top={2273} left={2792} length={446} title="p213" />
      <Pipe isHorizontal top={2273} left={3233} length={53} title="p214" />
      <Valve title="67" top={2263} left={3286} isUp />
      <Pipe isHorizontal top={2273} left={3305} length={61} title="p214" />
      <Pipe isHorizontal top={2273} left={3354} length={74} title="p216" />
      <Pipe isHorizontal top={2273} left={3428} length={12} title="p217" />
      <Valve title="63" top={2263} left={3440} isUp />
      <Pipe isHorizontal top={2273} left={3459} length={276} title="p218" />
      <Pipe isHorizontal top={2308} left={2774} length={15} title="p219" />
      <Valve title="122" top={2298} left={2789} isUp />
      <Pipe isHorizontal top={2308} left={2808} length={26} title="p220" />
      <Pipe isHorizontal top={2308} left={3276} length={10} title="p221" />
      <Valve title="66" top={2298} left={3286} isUp />
      <Pipe isHorizontal top={2308} left={3305} length={15} title="p221" />
      <Pipe isHorizontal top={2308} left={3315} length={80} title="p223" />
      <Pipe isHorizontal top={2308} left={3395} length={45} title="p224" />
      <Valve title="64" top={2298} left={3440} isUp />
      <Pipe isHorizontal top={2308} left={3459} length={242} title="p225" />
      <Pipe isHorizontal top={2331} left={2774} length={190} title="p226" />
      <Valve title="123" top={2321} left={2964} isUp />
      <Pipe isHorizontal top={2331} left={2983} length={36} title="p227" />
      <Pipe isHorizontal top={2362} left={2576} length={23} title="p228" />
      <Pipe isHorizontal top={2362} left={2747} length={35} title="p229" />
      <Pipe isHorizontal top={2362} left={2932} length={35} title="p230" />
      <Pipe isHorizontal top={2362} left={3105} length={45} title="p231" />
      <Pipe isHorizontal top={2684} left={4080} length={96} title="p237" />
      <Pipe isHorizontal top={2704} left={4044} length={193} title="p238" />

      {/* *************************************************** */}
      <Pipe top={1448} left={2569} length={83} title="v237" />
      <Intersection top={1531} left={2565} title="i91" />
      <Pipe top={1545} left={2569} length={229} title="v237" />
      <Pipe top={2042} left={2569} length={54} title="v239" />
      <Intersection top={2096} left={2565} title="i92" />
      <Pipe top={2110} left={2569} length={61} title="v239" />
      <Valve top={2169} left={2565} title="3" />
      <Pipe top={2190} left={2569} length={44} title="v239" />
      <Pipe top={2227} left={2569} length={20} title="v242" />
      <Intersection top={2246} left={2565} title="i93" />
      <Pipe top={2263} left={2569} length={5} title="v242" />
      <Intersection top={2269} left={2565} title="i93" />
      <Pipe top={2283} left={2569} length={86} title="v242" />
      <Pipe top={2100} left={2543} length={71} title="v244" />
      <Valve top={2169} left={2539} title="2" />
      <Pipe top={2190} left={2543} length={67} title="v245" />
      <Pipe top={2100} left={2520} length={71} title="v246" />
      <Valve top={2169} left={2516} title="1" />
      <Pipe top={2190} left={2520} length={90} title="v246" />
      <Pipe top={2042} left={2497} length={129} title="v248" />
      <Valve top={2169} left={2493} title="104" isLeft />
      <Pipe top={2190} left={2497} length={90} title="v249" />
      <Pipe top={2100} left={2642} length={30} title="v250" />
      <Pipe top={2123} left={2642} length={124} title="v251" />
      <Intersection top={2246} left={2638} title="i95" />
      <Pipe top={2263} left={2642} length={5} title="v251" />
      <Intersection top={2269} left={2638} title="i95" />
      <Pipe top={2283} left={2642} length={87} title="v251" />
      <Pipe top={1985} left={2608} length={112} title="v253" />
      <Intersection top={2096} left={2604} title="i140" />
      <Pipe top={2110} left={2608} length={61} title="v253" />
      <Valve top={2169} left={2604} title="4" />
      <Pipe top={2190} left={2608} length={44} title="v253" />

      <Pipe top={2025} left={2711} length={105} title="v255" />
      <Pipe top={2060} left={2747} length={146} title="v256" />
      <Valve top={2204} left={2743} title="38" isLeft />
      <Pipe top={2225} left={2747} length={22} title="v256" />
      <Intersection top={2246} left={2743} title="i98" />
      <Pipe top={2263} left={2747} length={5} title="v256" />
      <Intersection top={2269} left={2743} title="i98" />
      <Pipe top={2283} left={2747} length={86} title="v256" />
      <Intersection top={1773} left={2565} title="i91" />
      <Pipe top={1787} left={2569} length={20} title="v237" />
      <Intersection top={1808} left={2565} title="i91" />
      <Pipe top={1822} left={2569} length={227} title="v237" />
      <Pipe top={1235} left={2772} length={30} title="v261" />
      <Intersection top={1265} left={2768} title="i102" />
      <Pipe top={1279} left={2772} length={16} title="v262" />
      <Intersection top={1294} left={2768} title="i103" />
      <Pipe top={1308} left={2772} length={16} title="v263" />
      <Intersection top={1323} left={2768} title="i104" />
      <Pipe top={1337} left={2772} length={67} title="v264" />
      <Intersection top={1403} left={2768} title="i105" />
      <Pipe top={1417} left={2772} length={115} title="v265" />
      <Intersection top={1531} left={2768} title="i106" />
      <Pipe top={1546} left={2772} length={229} title="v266" />
      <Intersection top={1773} left={2768} title="i107" />
      <Pipe top={1787} left={2772} length={20} title="v267" />
      <Intersection top={1808} left={2768} title="i108" />
      <Pipe top={1822} left={2772} length={161} title="v268" />
      <Intersection top={1981} left={2768} title="i109" />
      <Pipe top={1995} left={2772} length={27} title="v269" />
      <Intersection top={2021} left={2768} title="i110" />
      <Pipe top={2035} left={2772} length={22} title="v270" />
      <Intersection top={2056} left={2768} title="i111" />
      <Pipe top={2070} left={2772} length={177} title="v271" />
      <Intersection top={2246} left={2768} title="i112" />
      <Pipe top={2263} left={2772} length={5} title="v272" />
      <Intersection top={2269} left={2768} title="i113" />
      <Pipe top={2283} left={2772} length={32} title="v272" />
      <Pipe top={2308} left={2772} length={30} title="v273" />
      <Pipe top={1327} left={2854} length={76} title="v274" />
      <Intersection top={1403} left={2850} title="i114" />
      <Pipe top={1417} left={2854} length={115} title="v275" />
      <Intersection top={1531} left={2850} title="i115" />
      <Pipe top={1545} left={2854} length={229} title="v276" />
      <Intersection top={1773} left={2850} title="i116" />
      <Pipe top={1787} left={2854} length={20} title="v277" />
      <Intersection top={1808} left={2850} title="i117" />
      <Pipe top={1822} left={2854} length={161} title="v278" />
      <Intersection top={1981} left={2850} title="i118" />
      <Pipe top={1995} left={2854} length={27} title="v279" />
      <Intersection top={2021} left={2850} title="i119" />
      <Pipe top={2035} left={2854} length={22} title="v280" />
      <Intersection top={2056} left={2850} title="i120" />
      <Pipe top={2070} left={2854} length={20} title="v281" />
      <Valve top={2088} left={2850} title="106" isLeft />
      <Pipe top={2109} left={2854} length={21} title="v282" />
      <Pipe top={2123} left={2792} length={83} title="v283" />
      <Valve top={2204} left={2788} title="31" />
      <Pipe top={2225} left={2792} length={22} title="v283" />

      <Intersection top={2246} left={2788} title="i121" />
      <Pipe top={2260} left={2792} length={20} title="v283" />
      <Pipe top={2123} left={2827} length={30} title="v285" />
      <Valve top={2151} left={2823} title="37" />
      <Pipe top={2172} left={2827} length={75} title="v285" />
      <Intersection top={2246} left={2823} title="i122" />
      <Pipe top={2263} left={2827} length={5} title="v285" />
      <Intersection top={2269} left={2823} title="i122" />
      <Pipe top={2283} left={2827} length={32} title="v285" />
      <Pipe top={2308} left={2827} length={20} title="v285" />
      <Intersection top={2327} left={2823} title="i122" />
      <Pipe top={2340} left={2827} length={31} title="v285" />
      <Pipe top={2123} left={2854} length={30} title="v291" />
      <Valve top={2151} left={2850} title="22" />
      <Pipe top={2172} left={2854} length={62} title="v291" />
      <Pipe top={2060} left={2925} length={111} title="v293" />
      <Valve top={2169} left={2921} title="36" />
      <Pipe top={2190} left={2925} length={34} title="v293" />
      <Intersection top={2223} left={2921} title="i125" />

      <Intersection top={2246} left={2921} title="i125" />

      <Intersection top={2269} left={2921} title="i125" />
      <Pipe top={2283} left={2925} length={44} title="v293" />
      <Pipe top={2240} left={2925} length={5} title="v293" />
      <Pipe top={2263} left={2925} length={5} title="v293" />
      <Intersection top={2327} left={2921} title="i125" />
      <Pipe top={2341} left={2925} length={28} title="v293" />
      <Pipe top={2025} left={2948} length={31} title="v297" />
      <Intersection top={2056} left={2944} title="i129" />
      <Pipe top={2070} left={2948} length={101} title="v298" />
      <Valve top={2169} left={2944} title="21" />
      <Pipe top={2190} left={2948} length={44} title="v299" />
      <Pipe top={2146} left={2982} length={25} title="v300" />
      <Valve top={2169} left={2978} title="24" />
      <Pipe top={2190} left={2982} length={44} title="v300" />
      <Pipe top={2146} left={3012} length={25} title="v302" />
      <Valve top={2169} left={3008} title="35" />
      <Pipe top={2190} left={3012} length={57} title="v302" />
      <Intersection top={2246} left={3008} title="i130" />
      <Intersection top={2269} left={3008} title="i130" />
      <Pipe top={2283} left={3012} length={55} title="v302" />
      <Pipe top={2263} left={3012} length={5} title="v302" />
      <Pipe top={2331} left={3012} length={39} title="v305" />
      <Pipe top={2146} left={3035} length={25} title="v306" />
      <Valve top={2169} left={3031} title="26" />
      <Pipe top={2190} left={3035} length={67} title="v306" />
      <Pipe top={2060} left={3129} length={47} title="v307" />
      <Pipe top={2100} left={3129} length={71} title="v308" />
      <Valve top={2169} left={3125} title="29" />
      <Pipe top={2190} left={3129} length={44} title="v308" />
      <Pipe top={2227} left={3105} length={20} title="v310" />
      <Intersection top={2246} left={3101} title="i132" />
      <Intersection top={2269} left={3101} title="i132" />
      <Intersection top={1737} left={3101} title="i84" />
      <Intersection top={1737} left={3172} title="i85" />
      <Pipe top={2283} left={3105} length={79} title="v310" />
      <Pipe top={2263} left={3105} length={5} title="v310" />
      <Pipe top={1545} left={3105} length={193} title="v312" />
      <Pipe top={1751} left={3105} length={20} title="v312" />
      <Intersection top={1773} left={3101} title="i84" />
      <Pipe top={1786} left={3105} length={20} title="v312" />
      <Intersection top={1808} left={3101} title="i84" />
      <Pipe top={1822} left={3105} length={193} title="v312" />
      <Pipe top={2008} left={3105} length={49} title="v315" />
      <Intersection top={2056} left={3101} title="i136" />
      <Pipe top={2070} left={3105} length={101} title="v315" />
      <Valve top={2169} left={3101} title="30" />
      <Pipe top={2190} left={3105} length={44} title="v315" />
      <Pipe top={2008} left={3157} length={16} title="v318" />
      <Valve top={2022} left={3153} title="111" isLeft />
      <Pipe top={2043} left={3157} length={12} title="v319" />
      <Intersection top={2056} left={3153} title="i137" />
      <Pipe top={2070} left={3157} length={37} title="v320" />
      <Pipe top={1544} left={3176} length={193} title="v229" />
      <Pipe top={1751} left={3176} length={20} title="v229" />
      <Intersection top={1773} left={3172} title="i85" />
      <Pipe top={1787} left={3176} length={22} title="v229" />
      <Intersection top={1808} left={3172} title="i85" />
      <Pipe top={1822} left={3176} length={150} title="v229" />
      <Valve top={1970} left={3172} title="103" />
      <Pipe top={1991} left={3176} length={76} title="v229" />
      <Pipe top={1407} left={2984} length={125} title="v325" />
      <Intersection top={1531} left={2980} title="i140" />
      <Pipe top={1545} left={2984} length={229} title="v325" />
      <Intersection top={1773} left={2980} title="i140" />
      <Pipe top={1787} left={2984} length={20} title="v325" />
      <Intersection top={1808} left={2980} title="i140" />
      <Pipe top={1822} left={2984} length={170} title="v325" />
      <Pipe top={1269} left={2925} length={25} title="v329" />
      <Intersection top={1294} left={2921} title="i143" />
      <Pipe top={1308} left={2925} length={95} title="v330" />
      <Intersection top={1403} left={2921} title="i144" />
      <Pipe top={1417} left={2925} length={115} title="v331" />
      <Intersection top={1531} left={2921} title="i145" />
      <Pipe top={1545} left={2925} length={229} title="v332" />
      <Intersection top={1773} left={2921} title="i146" />
      <Pipe top={1787} left={2925} length={20} title="v333" />
      <Intersection top={1808} left={2921} title="i147" />
      <Pipe top={1822} left={2925} length={161} title="v334" />
      <Intersection top={1981} left={2921} title="i148" />
      <Pipe top={1995} left={2925} length={37} title="v335" />
      <Pipe top={2146} left={3185} length={25} title="v336" />
      <Valve top={2169} left={3181} title="32" />
      <Pipe top={2190} left={3185} length={44} title="v336" />
      <Pipe top={2227} left={3185} length={20} title="v339" />
      <Intersection top={2246} left={3181} title="i149" />
      <Intersection top={2269} left={3181} title="i149" />
      <Pipe top={2283} left={3185} length={87} title="v339" />
      <Pipe top={2263} left={3185} length={5} title="v339" />
      <Valve top={2169} left={3205} title="28" />
      <Pipe top={2156} left={3209} length={15} title="v340" />
      <Pipe top={2190} left={3209} length={44} title="v340" />
      <Pipe top={2156} left={3233} length={90} title="v342" />
      <Intersection top={2246} left={3229} title="i151" />
      <Pipe top={2260} left={3233} length={20} title="v342" />
      <Pipe top={2146} left={3249} length={111} title="v344" />
      <Pipe top={1200} left={3064} length={95} title="v345" />
      <Intersection top={1294} left={3060} title="i152" />
      <Pipe top={1310} left={3064} length={93} title="v346" />
      <Intersection top={1403} left={3060} title="i153" />
      <Pipe top={1417} left={3064} length={115} title="v347" />
      <Intersection top={1531} left={3060} title="i154" />
      <Pipe top={1546} left={3064} length={195} title="v348" />
      <Pipe top={1741} left={3269} length={33} title="v349" />
      <Intersection top={1773} left={3265} title="i155" />
      <Pipe top={1787} left={3269} length={23} title="v350" />
      <Intersection top={1808} left={3265} title="i156" />
      <Pipe top={1822} left={3269} length={211} title="v351" />
      <Valve top={2031} left={3265} title="65" />
      <Pipe top={2052} left={3269} length={205} title="v352" />
      <Pipe top={2250} left={3269} length={20} title="v353" />
      <Intersection top={2269} left={3265} title="i157" />
      <Pipe top={2283} left={3269} length={32} title="v353" />
      <Pipe top={1535} left={3035} length={238} title="v355" />
      <Intersection top={1773} left={3031} title="i158" />
      <Pipe top={1787} left={3035} length={23} title="v356" />
      <Intersection top={1808} left={3031} title="i159" />
      <Pipe top={1824} left={3035} length={230} title="v357" />
      <Intersection top={2056} left={3031} title="i160" />
      <Pipe top={2070} left={3035} length={20} title="v358" />
      <Valve top={2088} left={3031} title="25" />
      <Pipe top={2109} left={3035} length={44} title="v359" />
      <Pipe top={1407} left={2875} length={124} title="v360" />
      <Intersection top={1531} left={2871} title="i161" />
      <Pipe top={1545} left={2875} length={229} title="v360" />
      <Intersection top={1773} left={2871} title="i161" />
      <Pipe top={1787} left={2875} length={20} title="v360" />
      <Intersection top={1808} left={2871} title="i161" />
      <Pipe top={1822} left={2875} length={161} title="v360" />
      <Intersection top={1981} left={2871} title="i161" />
      <Pipe top={1995} left={2875} length={27} title="v360" />
      <Intersection top={2021} left={2871} title="i161" />
      <Pipe top={2035} left={2875} length={32} title="v360" />
      <Pipe top={2273} left={3735} length={58} title="v366" />
      <Pipe top={2308} left={3701} length={23} title="v367" />
      <Pipe top={2117} left={3393} length={152} title="v368" />
      <Intersection top={2269} left={3389} title="i166" />
      <Pipe top={2282} left={3393} length={33} title="v369" />
      <Pipe top={2146} left={3428} length={134} title="v370" />
      <Pipe top={2146} left={4174} length={545} title="v371" />
      <Pipe top={2650} left={4080} length={41} title="v371" />
      <Pipe top={2117} left={4231} length={594} title="v372" />
      <Pipe top={2650} left={4040} length={61} title="v372" />

      <Pipe top={1777} left={3318} length={32} title="v424" />
      <Intersection top={1808} left={3314} title="i217" />
      <Pipe top={1823} left={3318} length={392} title="v424" />
      <Valve top={2213} left={3314} title="ЗМ-42" isRotate />
      <Pipe top={2234} left={3318} length={35} title="v424" />
      <Intersection top={2269} left={3314} title="i217" />
      <Pipe top={2285} left={3318} length={30} title="v424" />
      <Pipe top={1812} left={3359} length={380} title="v425" />
      <Valve top={2190} left={3355} title="ЗМ-43" isRotate />
      <Pipe top={2211} left={3359} length={69} title="v425" />

      <Pump title="H-1" top={2343} left={2596} />
      <Pump title="H-2" top={2343} left={2781} />
      <Pump title="H-3" top={2343} left={2966} />
      <Pump title="H-4" top={2343} left={3139} />
    </>
  );
};

export default Station91035;

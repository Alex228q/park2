import React from "react";
import Valve from "../Valve";
import Pipe from "../Pipe";

const InterparkCommunication = () => {
  return (
    <div>
      <Valve isUp top={1046} left={1258} title="ЗМ-45" isLeft />
      <Pipe isHorizontal top={1056} left={1038} length={220} title="p117" />
      <Pipe isHorizontal top={1056} left={1277} length={46} title="p118" />
      <Pipe isHorizontal top={1056} left={1323} length={44} title="p119" />
      <Pipe isHorizontal top={1085} left={1068} length={255} title="p120" />
      <Pipe isHorizontal top={1056} left={2839} length={1396} title="p121" />
      <Pipe isHorizontal top={1085} left={2873} length={369} title="p122" />
      <Pipe isHorizontal top={1108} left={2366} length={80} title="p123" />
      <Pipe isHorizontal top={1108} left={2446} length={658} title="p124" />
      <Pipe isHorizontal top={1177} left={1788} length={150} title="p125" />
      <Valve isUp top={1167} left={1938} title="ЗМ-46" />
      <Pipe isHorizontal top={1177} left={1957} length={92} title="p126" />
      <Pipe isHorizontal top={1177} left={2049} length={394} title="p127" />
      <Pipe isHorizontal top={1200} left={2326} length={738} title="p128" />
      <Pipe isHorizontal top={1235} left={1757} length={242} title="p129" />
      <Pipe isHorizontal top={1235} left={1999} length={773} title="p130" />
      <Pipe isHorizontal top={1252} left={3105} length={57} title="p131" />
      <Valve isUp top={1242} left={3162} title="ЗМ-48" />
      <Pipe isHorizontal top={1252} left={3181} length={57} title="p132" />
      <Pipe isHorizontal top={1269} left={1731} length={1211} title="p133" />
      <Pipe isHorizontal top={1298} left={1788} length={161} title="p134" />
      <Pipe isHorizontal top={1298} left={1949} length={184} title="p135" />
      <Pipe isHorizontal top={1298} left={2216} length={912} title="p136" />
      <Valve isUp top={1288} left={3128} title="83" isLeft />
      <Pipe isHorizontal top={1298} left={3147} length={29} title="p137" />
      <Pipe isHorizontal top={1298} left={3176} length={29} title="p138" />
      <Valve isUp top={1288} left={3205} title="ЗМ-49" isLeft />
      <Pipe isHorizontal top={1298} left={3224} length={14} title="p139" />
      <Pipe isHorizontal top={1327} left={1707} length={1154} title="p140" />
      <Pipe isHorizontal top={1327} left={3183} length={59} title="p141" />
      <Valve isUp top={1317} left={3242} title="108" isLeft />
      <Pipe isHorizontal top={1327} left={3261} length={23} title="p142" />
    </div>
  );
};

export default InterparkCommunication;

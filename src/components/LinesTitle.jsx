import SimpleText from "./SimpleText";

const LinesTitle = () => {
  return (
    <>
      <SimpleText
        left={1202}
        top={2050}
        title="л.2"
        vertical
        rotate={180}
        fontSize={18}
      />
      <SimpleText
        left={1167}
        top={2050}
        title="л.4"
        vertical
        rotate={180}
        fontSize={18}
      />
      <SimpleText
        left={1238}
        top={2050}
        title="л.3"
        vertical
        rotate={180}
        fontSize={18}
      />

      <SimpleText left={1247} top={1693} title="л.2" fontSize={18} />
      <SimpleText left={1247} top={1661} title="л.4" fontSize={18} />
      <SimpleText left={1247} top={1725} title="л.3" fontSize={18} />
    </>
  );
};

export default LinesTitle;

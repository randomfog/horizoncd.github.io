import React from "react";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function CommentsBox(props: {}) {

  const { colorMode } = useColorMode()

return <Giscus
        id="comments"
        repo="horizoncd/docs"
        repoId="R_kgDOH_mKmQ"
        category="Docs Comments"
        categoryId="DIC_kwDOH_mKmc4CRa9E"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
}
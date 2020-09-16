import React from "react";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const pre = darcula["pre[class*=\"language-\"]"];

console.log(pre)

const myStyle = {
  ...darcula,
  "pre[class*=\"language-\"]": {
    ...pre,
    "border-radius": "5px",
    "background": "#161a1d"
  }
}

console.log(myStyle)


export const CodeBlock = ({codeString, language = "javascript"}) => {
  return (
    <SyntaxHighlighter
     language={language}
     useInlineStyles={true}
     style={myStyle}
     showLineNumbers={true}>
      {codeString}
    </SyntaxHighlighter>
  );
};

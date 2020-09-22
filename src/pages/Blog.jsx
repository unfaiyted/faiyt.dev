import React, {useState, useEffect, useContext} from "react";
import {useQuery} from "@apollo/client";
import{GET_POST} from "../utils/queries";
import {store} from "../utils/store";

//TODO: Parse the content to create the appropriate special blocks
//TODO: In some cases such as <codeBlocks> want to implement a special
//TODO: SyntaxHighlighter component to render nicely.
export const Blog =  ({postId = "5f6a1d71b5444958daa99b40"}) => {
  const state = useContext(store)
  const [content, setContent] = useState("Loading....")
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {id: postId}
  });

  if (error) setContent(`Error! ${error.message}`);

  console.log(state)

  useEffect(() => {
    if(loading === false) setContent(data.getBlogPost.content)
  },[loading])


  function createMarkup() {
    return {__html: content};
  }

  return (
    <div dangerouslySetInnerHTML={createMarkup()}>
    </div>
  )
}



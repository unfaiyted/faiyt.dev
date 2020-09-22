import React, {useState, useEffect} from "react";
import {gql, useQuery} from "@apollo/client";


const GET_POST = gql`
    query getBlogPost($id: ID!) {
        getBlogPost(_id: $id) {
            _id
            dateCreated
            content
            creator {
                _id
                username
                firstName
            }
        }
    }
`

export const Blog =  ({postId = "5f6a1d71b5444958daa99b40"}) => {

  const [content, setContent] = useState("Loading....")
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {id: postId}
  });

  if (error) setContent(`Error! ${error.message}`);


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



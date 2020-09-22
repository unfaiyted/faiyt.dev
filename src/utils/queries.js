import {gql} from "@apollo/client";

export const GET_POST = gql`
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
  }`

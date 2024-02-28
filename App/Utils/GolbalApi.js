import { request, gql } from 'graphql-request'

const masterUrl = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsdvo3vi0wh501w63iqf5loe/master"

// Get all content for feed
const getContent = async ()=>{
    const query = gql`
    query ContentForFeed {
        feedContents {
          caption
          id
          description
          video {
            url
          }
        }
      }`
const result = await request(masterUrl, query);
return result
}

export default{
  getContent
}
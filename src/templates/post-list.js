import React from "react";
import { graphql, Link } from 'gatsby';

import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Pagination from "@/components/pagination";

const PostList = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="投稿一覧" />
      <main>
        <h1>記事一覧</h1>
        {data.allMicrocmsPost.edges.map(({ node }) => 
          <div>
            <p key={node.id}>{node.title}</p>
            <Link to={"/post-detail/" + node.postId}>詳細を見る</Link>
          </div>
        )}
        <Pagination
          pageCount={pageContext.pageCount}
          currentPage={pageContext.currentPage}/>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsPost(sort: {order: DESC, fields: updatedAt}, limit: $limit, skip: $skip) {
      edges {
        node {
          post
          createdAt
          postId
          title
          updatedAt
          id
        }
      }
    }
  }
`;

export default PostList;
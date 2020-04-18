import React from "react";
import { graphql, Link } from 'gatsby';

import Layout from "@/components/layout";
import SEO from "@/components/seo";

const PostDetail = ({ data }) => {
  return (
    <Layout>
      <SEO title="投稿詳細" />
      <main>
        <h1>記事詳細</h1>
        <p>{data.microcmsPost.title}</p>
        <p dangerouslySetInnerHTML={{__html: data.microcmsPost.post}} />
        <p>{data.microcmsPost.updatedAt}</p>
      </main>
      <Link to="/post-list/page/1">投稿一覧へ戻る</Link>
    </Layout>
  )
}

export const query = graphql`
  query($postId: String!) {
    microcmsPost(postId: {eq: $postId}) {
      id
      createdAt
      post
      postId
      title
      updatedAt
    }
  }
`;

export default PostDetail;
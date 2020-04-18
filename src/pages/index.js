import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "@/components/layout";
import Image from "@/components/image";
import SEO from "@/components/seo";

const IndexPage = ({ data }) => {
  const pageData = data.microcmsFixPage;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{ pageData.title}</h1>
      <main dangerouslySetInnerHTML={{__html: pageData.body}} />
      <Link to="/post-list/page/1">投稿一覧へ</Link>
      <hr />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query getTopFixPage {
    microcmsFixPage(fixPageId: {eq: "9N9CBeI4J"}) {
      fixPageId
      name
      body
      updatedAt
      createdAt
    }
  }
`;

export default IndexPage;


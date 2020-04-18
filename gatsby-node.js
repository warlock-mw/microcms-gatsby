const path = require('path');

exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

const allMicrocmsPostQuery = `{
  allMicrocmsPost(sort: {order: DESC, fields: updatedAt}) {
    edges {
      node {
        postId
      }
    }
  }
}`;

const createDetailPages = ({ allMicrocmsPost }, createPage) => {
  return allMicrocmsPost.edges.map(({ node }) =>
    createPage({
      path: `/post-detail/${node.postId}`,
      component: path.resolve("./src/templates/post-detail.js"),
      context: { postId: node.postId },
    })
  )
}

const pageSize = 1

const createPaginationPages = ({ allMicrocmsPost }, createPage) => {
  const pageCount = Math.ceil(allMicrocmsPost.edges.length / pageSize)

  return Array.from({ length: pageCount }).map((_, index) => {
    createPage({
      path: `/post-list/page/${index + 1}`,
      component: path.resolve(`./src/templates/post-list.js`),
      context: {
        skip: index * pageSize,
        limit: pageSize,
        pageCount,
        currentPage: index + 1,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(allMicrocmsPostQuery).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    return [
      ...createDetailPages(data, createPage),
      ...createPaginationPages(data, createPage),
    ]
  })
}
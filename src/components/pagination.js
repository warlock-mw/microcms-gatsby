import React from "react";
import { Link } from "gatsby";

const Pagination = ({ currentPage, pageCount }) => {
  return (
    <nav className="pagination">
      <hr />
      {currentPage > 1 ? (
        <Link title="Go to previous page" to={`/post-list/page/${currentPage - 1}`}>
          ← Older posts
        </Link>
      ) : (
        <span />
      )}
      Page {currentPage} of {pageCount}
      {currentPage < pageCount ? (
        <Link title="Go to next page" to={`/post-list/page/${currentPage + 1}`}>
          Newer posts →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

export default Pagination;
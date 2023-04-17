import React from "react"

import "./pagination.css"

export default function Pagination({ numPages, currentPage, onPageClick }) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages

  return (
    <div className="simple-pagination">
      <ul>
        {!isFirstPage && (
          <li className="prev" onClick={isFirstPage ? null : () => onPageClick(currentPage - 1)}>
            <span>{"<"}</span>
          </li>
        )}
        {[...new Array(numPages)].map((_item, index) => {
          const isCurrent = index + 1 === currentPage
          return (
            <li
              key={index}
              className={`${isCurrent ? "current" : ""}`}
              onClick={isCurrent ? null : () => onPageClick(index + 1)}
            >
              <span>{index + 1}</span>
            </li>
          )
        })}
        {!isLastPage && (
          <li className="next" onClick={isLastPage ? null : () => onPageClick(currentPage + 1)}>
            <span>{">"}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

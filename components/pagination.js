import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      <MdChevronLeft
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`cursor-pointer text-3xl ${currentPage === 1 ? 'text-pagination-text' : 'text-index-blue'}`}
      />
      <span className="mx-2 text-pagination-text">
        Page {currentPage} of {pagesCount}
      </span>
      <MdChevronRight
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pagesCount}
        className={`cursor-pointer text-3xl ${currentPage === pagesCount ? 'text-pagination-text' : 'text-index-blue'}`}
      />
    </div>
  );
};

export default Pagination;
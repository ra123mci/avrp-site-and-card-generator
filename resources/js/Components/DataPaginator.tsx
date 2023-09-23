import React, { useState } from 'react';

interface DataPaginatorProps<T> {
  data: T[];
  itemsPerPage?: number;
  onPaginate: (paginatedData: T[]) => void;
}

const DataPaginator = <T extends {}>({
  data,
  itemsPerPage = 20,
  onPaginate,
}: DataPaginatorProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const startIndex = (newPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = data.slice(startIndex, endIndex);
      onPaginate(paginatedData);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{/* Render your item here */}</li>
        ))}
      </ul>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${
              currentPage === index + 1 ? 'active' : ''
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DataPaginator;

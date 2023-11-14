import React from "react";

const Pagination: React.FC<{
  totalPost: number;
  postPerPage: number;
  paginate: (id: number) => void;
}> = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  console.log(Math.ceil(totalPost / postPerPage));

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      aria-label="Page navigation example"
      className="flex items-center justify-center"
    >
      <ul className="inline-flex -space-x-px text-base h-10">
        {pageNumbers?.map((number) => (
          <li>
            <a
              onClick={() => paginate(number)}
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

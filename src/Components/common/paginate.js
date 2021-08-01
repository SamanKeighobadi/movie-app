import _ from "lodash";

export const paginate = (movies, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  _(movies).slice(startIndex).take(perPage).value();
};

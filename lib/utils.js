import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
//  this is the getPages function
export const getPages = (page, totalPages, wantedPages) => {
  if (+totalPages <= wantedPages) {
    return Array.from({ length: totalPages }, (_, index) => {
      return index + 1;
    });
  }
  if (+totalPages > wantedPages) {
    let pages = [];
    let startPage = 1;

    if (+page > Math.ceil(wantedPages / 2)) {
      startPage = page - Math.floor(wantedPages / 2);
    }
    if (+totalPages - +page < Math.floor(wantedPages / 2)) {
      startPage = totalPages - (wantedPages - 1);
    }
    for (let i = 0; i < wantedPages; i++) {
      pages[i] = +startPage + i;
    }
    return pages;
  }
};
export const getNext = (page, totalPages) => {
  const newPage = page + 1;
  if (newPage <= totalPages) return newPage;
  if (newPage > totalPages) return 1;
};
export const getPrev = (page, totalPages) => {
  const newPage = page - 1;
  if (newPage >= 1) return newPage;
  if (newPage <= 0) return totalPages;
};

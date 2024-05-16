import { createContext, useContext, useState, ReactNode } from "react";

import { SearchContextType } from "../types/types";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("Pokemon");
  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        yearFilter,
        setYearFilter,
        typeFilter,
        setTypeFilter,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { SearchBarProps } from "../../types/types";
import { useSearch } from "../../context/SearchContext";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { searchTerm } = useSearch();

  const [currentSearchTerm, setCurrentSearchTerm] = useState(
    searchTerm === "Pokemon" ? "" : searchTerm,
  );

  const [isClearable, setIsClearable] = useState(
    searchTerm === "Pokemon" ? false : true,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    if (currentSearchTerm.length > 0) {
      onSearch(currentSearchTerm);
      setIsClearable(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClearSearch = () => {
    setCurrentSearchTerm("");
    setIsClearable(false);
    onSearch("Pokemon");
  };

  return (
    <Input
      style={{ width: "100%" }}
      placeholder="Search movies..."
      value={currentSearchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      action
    >
      <input />
      <Button type="submit" onClick={handleSubmit}>
        Search
      </Button>
      {isClearable && (
        <Button type="submit" onClick={handleClearSearch} icon="cancel" />
      )}
    </Input>
  );
};

export default SearchBar;

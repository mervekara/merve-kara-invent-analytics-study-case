import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { SearchBarProps } from "../../types/types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    if (searchTerm.length > 0) {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Input
      style={{ width: "100%" }}
      placeholder="Search movies..."
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      action
    >
      <input />
      <Button type="submit" onClick={handleSubmit}>
        Search
      </Button>
    </Input>
  );
};

export default SearchBar;

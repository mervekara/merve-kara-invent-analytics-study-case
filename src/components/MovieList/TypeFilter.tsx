import React from "react";
import { Dropdown } from "semantic-ui-react";
import { TypeFilterProps } from "../../types/types";

const TypeFilter: React.FC<TypeFilterProps> = ({ onFilter }) => {
  const typeOptions = [
    { key: "movie", text: "Movie", value: "movie" },
    { key: "series", text: "Series", value: "series" },
    { key: "episode", text: "Episode", value: "episode" },
  ];

  const handleTypeChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: any,
  ) => {
    onFilter(data.value);
  };

  return (
    <Dropdown
      style={{ width: "100%" }}
      placeholder="Select Type"
      selection
      options={typeOptions}
      onChange={handleTypeChange}
      clearable
    />
  );
};

export default TypeFilter;

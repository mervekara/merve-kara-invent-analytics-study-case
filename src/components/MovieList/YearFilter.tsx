import React from "react";
import { Dropdown, DropdownItemProps } from "semantic-ui-react";
import moment from "moment"; // Import Moment.js
import { useSearch } from "../../context/SearchContext";
import { YearFilterProps } from "../../types/types";

const YearFilter: React.FC<YearFilterProps> = ({ onFilter }) => {
  const { yearFilter } = useSearch();

  // Generate an array of years from 1900 to the current year
  const years: DropdownItemProps[] = [];
  const currentYear = moment().year();
  for (let year = currentYear; year >= 1900; year--) {
    years.push({ key: year, text: year.toString(), value: year.toString() });
  }

  const handleYearChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: any,
  ) => {
    const selectedYear = data.value as string;
    onFilter(selectedYear);
  };

  return (
    <Dropdown
      style={{ width: "100%" }}
      placeholder="Select Year"
      selection
      options={years}
      onChange={handleYearChange}
      clearable
      value={yearFilter || undefined}
    />
  );
};

export default YearFilter;

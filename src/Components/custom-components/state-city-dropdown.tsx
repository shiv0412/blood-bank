import React from "react";
import styled from "styled-components";

/* styled components */
const Select = styled.select`
  width: 30%;
  margin: 0 15px;
  padding: 10px 10px;
  border: 1.5px solid lightgray;
  color: #808b96;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
  }
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  font-family: Arial, Helvetica, sans-serif;
`;

export default function StateCityDropdown(props: any) {
  const { selectedValue, source, onDataChange, placeHolder, isStateSelected } =
    props;
  const handleChange = (e: any) => {
    onDataChange(e.target.value);
  };
  let isDisabled = false;
  if (placeHolder === "city" && !isStateSelected) {
    isDisabled = true;
  }
  return (
    <Select
      className="dropDownList"
      value={selectedValue}
      onChange={handleChange}
      disabled={isDisabled}
    >
      <Option value="">Select {placeHolder}</Option>
      {source.map((data: any) => (
        <>
          <Option key={data} value={data} className="custom_select_options">
            {data}
          </Option>
        </>
      ))}
    </Select>
  );
}

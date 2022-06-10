/* const friendOptions = [
  {
    key: 'Kanaklata Civil Hospital,Tezpur',
    text: 'Kanaklata Civil Hospital,Tezpur',
    value: 'Kanaklata Civil Hospital,Tezpur',
  },
  {
    key: 'Blood Bank, Kushal Konwar Hospital',
    text: 'Blood Bank, Kushal Konwar Hospital',
    value: 'Blood Bank, Kushal Konwar Hospital',
  },
  {
    key: 'Rotary Blood Bank and Resource Centre',
    text: 'Rotary Blood Bank and Resource Centre',
    value: 'Rotary Blood Bank and Resource Centre',
  },
  {
    key: 'Indian Red Cross Society',
    text: 'Indian Red Cross Society',
    value: 'Indian Red Cross Society',
  },
  {
    key: 'Sheth L.G. General Hospital (MUN)',
    text: 'Sheth L.G. General Hospital (MUN)',
    value: 'Sheth L.G. General Hospital (MUN)',
  },
  {
    key: 'Bhavnagar Blood Bank',
    text: 'Bhavnagar Blood Bank',
    value: 'Bhavnagar Blood Bank',
  },
  
  {
    key: 'Blood Bank,P.S. Medical College',
    text: 'Blood Bank,P.S. Medical College',
    value: 'Blood Bank,P.S. Medical College',
  },
  
  {
    key: 'Jamshedpur Blood Bank',
    text: 'Jamshedpur Blood Bank',
    value: 'Jamshedpur Blood Bank',
  },
] */

/* library imports */
import * as React from "react";
import { Dropdown } from "semantic-ui-react";

/* main component */

export const DropdownField = ({
  field: { name, value },
  form: { touched, errors, setFieldValue },
  options,
  children: _,
  ...props
}: any) => {
  const errorText = touched[name] && errors[name];
  return (
    <Dropdown
      selection
      fluid
      options={options}
      value={value}
      onChange={(_, { value }) => setFieldValue(name, value)}
      error={errorText}
      {...props}
    />
  );
};

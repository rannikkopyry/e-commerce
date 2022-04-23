import React from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import './styles.css';

const SelectCategory = ({ selectedCategory, categories, onChange }) => (
  <FormControl className="formControl">
    <Select value={selectedCategory.id} onChange={onChange}>
      {categories.map((category) => (
        <MenuItem key={category.id} value={category.id}>
          {category.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

);

export default SelectCategory;

import React, { useState } from "react";
import "./styles.css";
import {
  Grid,
  Paper,
  Container,
  InputBase,
  IconButton,
  ListItem,
  List,
  ListSubheader,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Search } from "@material-ui/icons";
import SelectCategory from "./SelectCategory";
import { commerce } from "../../lib/commerce";
import Product from "../Products/Product/Product";

const defaultCategory = { id: 0, name: "Kaikki" };

const FilterProduct = ({
  addProduct,
  categories,
  searchResult,
  setSearchResult,
  category,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [keyword, setKeyword] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleSelectChange = (event) => {
    const { value } = event.target;
    const category = categories.find((cat) => cat.id === value);
    setSelectedCategory(category);
  };

  const handleInputChange = (event) => {
    if (!keyword || !event.target.value) {
      setResultMessage("");
      setSearchResult([]);
      setSelectedCategory(defaultCategory);
    }
    setKeyword(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (keyword) {
      try {
        const categoryId = selectedCategory.id
          ? { category_id: selectedCategory.id }
          : {};
        const { data } = await commerce.products.list({
          query: keyword,
          ...categoryId,
        });
        console.log({ keyword });
        console.log({ selectedCategory });
        console.log({ data });

        if (!data) {
          setResultMessage("No result match");
          setSearchResult([]);
          return;
        }
        setResultMessage();
        setSearchResult(data);
      } catch (error) {
        setSearchResult([]);
      }
    }
  };

  console.log({ searchResult });

  return (
    <div className="filter-bar">
      <Container>
        <Paper component="form" className="root" onSubmit={onSubmit}>
          <SelectCategory
            categories={[defaultCategory, ...categories]}
            selectedCategory={selectedCategory}
            onChange={handleSelectChange}
          />
          <InputBase
            className="input"
            onChange={handleInputChange}
            placeholder="Etsi tuotteita"
            inputProps={{ "aria-label": "Etsi tuotteita" }}
          />
          <IconButton type="submit" aria-label="etsi">
            <Search />
          </IconButton>
        </Paper>
        {resultMessage && <p className="result-message">{resultMessage}</p>}
         {searchResult.lenght && (
          <div className="result-message">
            <Grid container spacing={4}>
              {searchResult.map((product)=> (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <Product product={product} addProduct={addProduct}/>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FilterProduct;

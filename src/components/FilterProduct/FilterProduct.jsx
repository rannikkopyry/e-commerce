import React, { useState } from "react";
import "./styles.css";
import {
  Paper,
  Container,
  InputBase,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import SelectCategory from "./SelectCategory";
import { commerce } from "../../lib/commerce";
import Product from "../Products/Product/Product";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const FilterProduct = ({ categories, searchResult, setSearchResult }) => {
  const defaultCategory = { id: 0, name: "Kaikki" };

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [keyword, setKeyword] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleInputChange = (event) => {
    if (!keyword || !event.target.value) {
      setResultMessage("");
      setSearchResult([]);
      setSelectedCategory(defaultCategory);
    }
    setKeyword(event.target.value);
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    const category = categories.find((cat) => cat.id === value);

    if (value === 0) {
      setSelectedCategory(defaultCategory);
    } else {
      setSelectedCategory(category);
    }
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
          setResultMessage("Ei tuloksia hakusanalla");
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
            placeholder="Kirjoita hakusana"
            inputProps={{ "aria-label": "Kirjoita hakusana" }}
          />
          <IconButton type="submit" aria-label="search">
            <Search />
          </IconButton>
        </Paper>
        {resultMessage && <p className="result-message">{resultMessage}</p>}
        {searchResult && (
          <div>
            <List container spacing={4} className="result-message-success">
            <ul>
              {searchResult.map((product) => (
                <div>
                    <li>
                  <Link to={`/product-view/${product.id}`}>
                    <ListItem
                      key={product.id}
                      disablePadding
                      className="list-item"
                    >
                      <ListItemButton>
                        <div className="image">
                          <img src={product.image.url} alt="Product image" />
                        </div>
                        <ListItemText>
                        <div className="text">
                          <Typography>{product.name}</Typography>
                          <Typography>€{product.price.formatted}</Typography>
                        </div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  </li>
                </div>
              ))}
              </ul>
            </List>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FilterProduct;

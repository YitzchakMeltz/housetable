import React from "react";
import { Grid, TextField, InputAdornment, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SearchRounded, EastRounded } from "@mui/icons-material";

const Root = styled(Grid)(({ theme }) => ({
  backgroundColor: "#FFF",
  borderRadius: 30,
  boxShadow: "0 0 40px #baa28870",
  border: "#EBEBEB 1px solid !important",
  display: "flex",
  alignItems: "center",
}));

const Input = styled(TextField)(({ theme }) => ({
  width: "calc(45vw - 121px)",
  backgroundColor: "#FFF",
  borderRadius: 30,
  transition: "width 0.3s",
  "&:focus-within": {
    width: "calc(55vw - 121px)",
  },
  "& input": {
    padding: "10px 14px",
    paddingInlineStart: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: 30,
    border: "none !important",
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(80vw - 121px)",
    "&:focus-within": {
      width: "calc(90vw - 121px)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(90vw - 121px)",
    "&:focus-within": {
      width: "calc(90vw - 121px)",
    },
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  marginInlineEnd: 7,
  padding: "3px 20px",
  borderRadius: 40,
  backgroundColor: "#46deaa",
  color: "#FFF",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#46deaa99",
  },
  "&:disabled": {
    color: "#FFF",
    opacity: 0.7,
  },
}));

const SearchButtonIcon = styled(EastRounded)(({ theme }) => ({
  width: 17,
  height: "auto",
  marginInlineStart: 10,
}));

/**
 * A custom search bar component with an input field and a search button.
 *
 * @component
 * @param {string} value - The current value of the search input.
 * @param {function} setValue - A function to update the search input value.
 * @param {function} onSearch - A function to be called when the search button is clicked.
 */
function SearchBar({ value, setValue, onSearch }) {
  return (
    <Root>
      <Input
        placeholder="Enter a house ID"
        variant="outlined"
        size="small"
        value={value}
        onChange={e => setValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />
      <SearchButton onClick={onSearch}>
        Search
        <SearchButtonIcon />
      </SearchButton>
    </Root>
  );
}

export default SearchBar;

import React from "react";
import { useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { SearchRounded, EastRounded } from "@mui/icons-material";
import Header from "../Generic/Header";

const Root = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  paddingTop: "7vh",
}));

const SearchContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "calc(100% - 100px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "8vh",
  fontSize: "1.4rem",
  textAlign: "center",
  fontFamily: "Quicksand",
  fontWeight: 700,
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  width: "45%",
  backgroundColor: "#FFF",
  borderRadius: 30,
  boxShadow: "0 0 40px #baa28870",
  transition: "width 0.3s",
  "&:focus-within": {
    width: "55%",
  },
  "& input": {
    padding: "10px 14px",
    paddingInlineStart: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: 30,
    border: "#EBEBEB 1px solid !important",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
    "&:focus-within": {
      width: "90%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    "&:focus-within": {
      width: "90%",
    },
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  marginInlineEnd: -7,
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

function FindHouse() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const searchForHouse = async () => {
    navigate("/view-house?id=" + id);
  };

  return (
    <Root>
      <Header />
      <SearchContainer>
        <Title>Find out what the risk is on your loan</Title>
        <SearchBar
          placeholder="Enter a house ID"
          variant="outlined"
          size="small"
          value={id}
          onChange={e => setId(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SearchButton onClick={searchForHouse}>
                  Search
                  <SearchButtonIcon />
                </SearchButton>
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>
    </Root>
  );
}

export default FindHouse;

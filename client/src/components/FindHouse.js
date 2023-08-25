import React from "react";
import { useState } from "react";
import { Grid, TextField, InputAdornment, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { SearchRounded, EastRounded } from "@mui/icons-material";
import Header from "./Header";

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
  },
}));

const SearchButtonIcon = styled(EastRounded)(({ theme }) => ({
  width: 17,
  height: "auto",
  marginInlineStart: 10,
}));

function FindHouse({ formDetails, setFormDetails }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState();
  const [sending, setSending] = useState(false);

  const getHouse = async () => {
    setSending(true);
    const response = await fetch('http://127.0.0.1:5000/api/house/' + id, {
        method: "GET",
        headers: {"Content-type": "application/json"}
    });
    setSending(false);

    const responseObject = await response?.json();

    setFormDetails(responseObject.house)

    setSearchParams({id: responseObject?.house?.id})

    console.log('Response Object: ', responseObject);
}

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
                <SearchButton onClick={getHouse}>
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

import React from "react";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import Header from "../Generic/Header";
import SearchBar from "../Generic/SearchBar";

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

/**
 * A Page from which you can search for a house in the database.
 *
 * @component
 */
function FindHouse() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const searchForHouse = () => {
    if (id) {
      navigate("/view-house?id=" + id);
    }
  };

  return (
    <Root>
      <Header />
      <SearchContainer>
        <Title>Find out what the risk is on your loan</Title>
        <SearchBar value={id} setValue={setId} onSearch={searchForHouse} />
      </SearchContainer>
    </Root>
  );
}

export default FindHouse;

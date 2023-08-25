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
import { useLocation } from "react-router-dom";
import FindHouse from "./FindHouse";
import EditHouse from "./EditHouse";

function HouseLookup() {
  const [formDetails, setFormDetails] = useState({});
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  console.log("Search Params: ", id);

  return (
    <>
      {!id && (
        <FindHouse formDetails={formDetails} setFormDetails={setFormDetails} />
      )}
      {id && (
        <EditHouse formDetails={formDetails} setFormDetails={setFormDetails} />
      )}
    </>
  );
}

export default HouseLookup;

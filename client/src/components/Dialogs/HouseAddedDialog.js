import React from "react";
import { Grid, Dialog, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import SuccessAnimation from "../../resources/lotties/Success.json";

const Root = styled(Dialog)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  marginTop: -10,
  marginBottom: "5vh",
  fontSize: "1.1rem",
  textAlign: "center",
  fontFamily: "Quicksand",
  fontWeight: 700,
}));

const HouseIdLabel = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  textAlign: "center",
  fontFamily: "Quicksand",
  fontWeight: 500,
}));

const HouseIdWrapper = styled(Grid)(({ theme }) => ({
  minWidth: 170,
  marginTop: 10,
  marginBottom: 10,
  padding: 4,
  borderRadius: 10,
  backgroundColor: "#EEF7FC",
}));

const HouseId = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  textAlign: "center",
  fontFamily: "Courier",
  fontWeight: 700,
}));

const ActionsContainer = styled(Grid)(({ theme }) => ({
  marginTop: "5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ViewHouseButton = styled(Button)(({ theme }) => ({
  margin: 3,
  padding: "4px 18px",
  textTransform: "none",
  color: "#93795d",
  backgroundColor: "#FFF",
  borderRadius: 30,
  "&:hover": {
    color: "#93795d99",
    backgroundColor: "#FFF",
  },
}));

const AddAnotherHouseButton = styled(Button)(({ theme }) => ({
  margin: 3,
  padding: "4px 18px",
  textTransform: "none",
  color: "#FFF",
  backgroundColor: "#93795d",
  borderRadius: 30,
  "&:hover": {
    backgroundColor: "#93795d99",
  },
}));

const styles = {
  dialogPaper: {
    width: "100%",
    maxWidth: 550,
    padding: 30,
    paddingBottom: 15,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  successAnimation: {
    width: 200,
    margin: -20,
    marginTop: -50,
  },
};

/**
 * A dialog to be displayed after a house is successfully added.
 *
 * @component
 * @param {boolean} open - A flag that is true when the dialog should be open.
 * @param {function} handleClose - A function to be triggered when the dialog is closed.
 * @param {string} id - The id of the added house.
 */
function HouseAddedDialog({ open, handleClose, id }) {
  const navigate = useNavigate();

  return (
    <Root
      onClose={handleClose}
      open={open}
      PaperProps={{ style: styles.dialogPaper }}
    >
      <Lottie
        animationData={SuccessAnimation}
        loop={false}
        style={styles.successAnimation}
      />
      <Title>Your house has been added successfully!</Title>
      <HouseIdLabel>Your house ID is:</HouseIdLabel>
      <HouseIdWrapper>
        <HouseId>{id}</HouseId>
      </HouseIdWrapper>
      <ActionsContainer>
        <ViewHouseButton onClick={() => navigate("/view-house?id=" + id)}>
          View house
        </ViewHouseButton>
        <AddAnotherHouseButton onClick={handleClose}>
          Add another house
        </AddAnotherHouseButton>
      </ActionsContainer>
    </Root>
  );
}

export default HouseAddedDialog;

import React from "react";
import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../Generic/Header";
import HouseAddedDialog from "../Dialogs/HouseAddedDialog";
import { validateFieldsExists } from "../../utils/validateFieldsExists";
import ErrorDialog from "../Dialogs/ErrorDialog";

const Root = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const FormWrapper = styled(Grid)(({ theme }) => ({
  width: "30vw",
  minWidth: 340,
  padding: "6vh",
  marginTop: "10vh",
  backgroundColor: "#FFF",
  borderRadius: 20,
  boxShadow: "0 0 40px #baa28870",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "5vh",
  fontSize: "1.1rem",
  textAlign: "center",
  fontFamily: "Quicksand",
  fontWeight: 700,
}));

const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "3vh",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  width: "90%",
  marginTop: "2vh",
  color: "#FFF",
  backgroundColor: "#93795d",
  borderRadius: 50,
  "&:hover": {
    backgroundColor: "#93795d99",
  },
  "&:disabled": {
    color: "#FFF",
  },
}));

const Loading = styled(CircularProgress)(({ theme }) => ({
  width: "18px !important",
  height: "18px !important",
  marginInlineStart: 13,
  color: "#FFF",
}));

/**
 * A Page from which you can add a house to the database.
 *
 * @component
 */
function AddHouse() {
  const [formDetails, setFormDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [id, setId] = useState("");

  const addNewHouse = async () => {
    setSending(true);

    try {
      const errs = validateFieldsExists(
        ["address", "currentValue", "loanAmount"],
        formDetails
      );
      setErrors(errs);

      if (Object.keys(errs).length === 0) {
        const response = await fetch("http://127.0.0.1:5000/api/house", {
          method: "POST",
          body: JSON.stringify(formDetails),
          headers: { "Content-type": "application/json" },
        });

        const responseObject = await response?.json();

        setId(responseObject?.house?.id);
        setOpenSuccessDialog(true);

        console.log("Response Object: ", responseObject);
      }
    } catch (e) {
      console.log("ERROR: ", e);
      setErrorMessage("There was an error when trying to add your house");
      setOpenErrorDialog(true);
    }

    setSending(false);
  };

  const onSuccessDialogClose = () => {
    setFormDetails({});
    setOpenSuccessDialog(false);
  };

  const onErrorDialogClose = () => {
    setFormDetails({});
    setOpenErrorDialog(false);
  };

  return (
    <Root>
      <Header />
      <FormWrapper>
        <Title>Add your details to our system</Title>
        <InputField
          required
          label="Address"
          variant="outlined"
          size="small"
          autoComplete="street-address"
          value={formDetails?.address || ""}
          error={errors.address}
          onChange={e =>
            setFormDetails({ ...formDetails, address: e?.target?.value })
          }
        />
        <InputField
          required
          label="Current value"
          variant="outlined"
          size="small"
          value={formDetails?.currentValue || ""}
          error={errors.currentValue}
          onChange={e =>
            setFormDetails({ ...formDetails, currentValue: e?.target?.value })
          }
        />
        <InputField
          required
          label="Loan amount"
          variant="outlined"
          size="small"
          value={formDetails?.loanAmount || ""}
          error={errors.loanAmount}
          onChange={e =>
            setFormDetails({ ...formDetails, loanAmount: e?.target?.value })
          }
        />
        <SubmitButton onClick={addNewHouse} disabled={sending}>
          Add house {sending && <Loading />}
        </SubmitButton>
      </FormWrapper>
      <HouseAddedDialog
        id={id}
        open={openSuccessDialog}
        handleClose={onSuccessDialogClose}
      />
      <ErrorDialog
        open={openErrorDialog}
        handleClose={onErrorDialogClose}
        message={errorMessage}
      />
    </Root>
  );
}

export default AddHouse;

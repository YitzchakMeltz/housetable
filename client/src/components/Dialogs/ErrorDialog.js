import React from 'react';
import { Grid, Dialog, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Lottie from "lottie-react";
import ErrorAnimation from '../../resources/lotties/Error.json'

const Root = styled(Dialog)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
    marginTop: -10,
    marginBottom: "1vh",
    fontSize: "1.1rem",
    textAlign: "center",
    fontFamily: "Quicksand",
    fontWeight: 700,
}));

const MessageText = styled(Typography)(({ theme }) => ({
    fontSize: "0.9rem",
    textAlign: "center",
    fontFamily: "Quicksand",
    fontWeight: 500,
}));

const ActionsContainer = styled(Grid)(({ theme }) => ({
    marginTop: "5vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const ConfirmButton = styled(Button)(({ theme }) => ({
    margin: 3,
    padding: '4px 18px',
    textTransform: 'none',
    color: '#FFF',
    backgroundColor: '#93795d',
    borderRadius: 30,
    '&:hover': {
        backgroundColor: '#93795d99',
    },
}));

const styles = {
    dialogPaper: {
        width: '100%',
        maxWidth: 550,
        padding: 30,
        paddingBottom: 15,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successAnimation: {
        width: 200,
        margin: -40,
        marginTop: -60,
    }
}

function ErrorDialog({ open, handleClose, message }) {

    return (
        <Root onClose={handleClose} open={open} PaperProps={{ style: styles.dialogPaper }}>
            <Lottie animationData={ErrorAnimation} loop={false} style={styles.successAnimation} />
            <Title>An error has occurred!</Title>
            <MessageText>{message}</MessageText>
            <ActionsContainer>
                <ConfirmButton onClick={handleClose}>Confirm</ConfirmButton>
            </ActionsContainer>
        </Root>
    );
}

export default ErrorDialog;
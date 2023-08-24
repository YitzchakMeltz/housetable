import React from 'react';
import { useState } from 'react';
import { Grid, Typography, Button, TextField, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './Header';

const Root = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}));

const FormWrapper = styled(Grid)(({ theme }) => ({
    width: '30vw',
    padding: '6vh',
    backgroundColor: '#FFF',
    borderRadius: 20,
    boxShadow: '0 0 40px #baa28870',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: '5vh',
    fontSize: '1.1rem',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontWeight: 700,
}));

const InputField = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginBottom: '3vh',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    width: '90%',
    marginTop: '2vh',
    color: '#FFF',
    backgroundColor: '#93795d',
    borderRadius: 50,
    '&:hover': {
        backgroundColor: '#93795d99',
    },
    '&:disabled': {
        color: '#FFF',
    },
}));

const Loading = styled(CircularProgress)(({ theme }) => ({
    width: '18px !important',
    height: '18px !important',
    marginInlineStart: 13,
    color: '#FFF',
}));

function AddHome() {

    const [formDetails, setFormDetails] = useState({});
    const [sending, setSending] = useState(false);

    const addNewHouse = async () => {
        setSending(true);
        const response = await fetch('http://127.0.0.1:5000/api/house', {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {"Content-type": "application/json"}
        });
        setSending(false);

        console.log('Response: ', response);
    }

    return (
        <Root>
            <Header />
            <FormWrapper>
                <Title>Add your details to our system</Title>
                <InputField label='Address' variant='outlined' size='small' onChange={(e) => setFormDetails({ ...formDetails, address: e?.target?.value })} />
                <InputField label='Current value' variant='outlined' size='small' onChange={(e) => setFormDetails({ ...formDetails, currentValue: e?.target?.value })} />
                <InputField label='Loan amount' variant='outlined' size='small' onChange={(e) => setFormDetails({ ...formDetails, loanAmount: e?.target?.value })} />
                <SubmitButton onClick={addNewHouse} disabled={sending}>Add home {sending && <Loading />}</SubmitButton>
            </FormWrapper>
        </Root>
    );
}

export default AddHome;
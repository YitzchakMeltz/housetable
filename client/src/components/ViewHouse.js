import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    marginTop: '10vh',
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

const PageLoading = styled(CircularProgress)(({ theme }) => ({
    width: '50px !important',
    height: '50px !important',
    color: '#93795d',
}));

function ViewHouse() {

    const [sending, setSending] = useState(false);
    const [formDetails, setFormDetails] = useState({});
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");

    useEffect(() => {
        if (id && Object.keys(formDetails).length === 0) {
            getHouse();
        }
    }, [id])

    const getHouse = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/house/" + id, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });

        const responseObject = await response?.json();

        setFormDetails(responseObject.house);

        console.log("Response Object: ", responseObject);
    };

    const updateHouse = async () => {
        setSending(true);
        const response = await fetch('http://127.0.0.1:5000/api/house/' + id, {
            method: "PUT",
            body: JSON.stringify(formDetails),
            headers: { "Content-type": "application/json" }
        });
        setSending(false);

        const responseObject = await response?.json();

        setFormDetails(responseObject.house);

        console.log("Response Object: ", responseObject);
    }

    return (
        <Root>
            {
                Object.keys(formDetails).length === 0 &&
                <PageLoading />
            }
            {
                Object.keys(formDetails).length > 0 &&
                <>
                    <Header />
                    <FormWrapper>
                        <Title>Your House</Title>
                        <InputField disabled label='Address' variant='outlined' size='small' value={formDetails?.address} onChange={(e) => setFormDetails({ ...formDetails, address: e?.target?.value })} />
                        <InputField label='Current value' variant='outlined' size='small' value={formDetails?.currentValue} onChange={(e) => setFormDetails({ ...formDetails, currentValue: e?.target?.value })} />
                        <InputField label='Loan amount' variant='outlined' size='small' value={formDetails?.loanAmount} onChange={(e) => setFormDetails({ ...formDetails, loanAmount: e?.target?.value })} />
                        <InputField disabled label='Risk' variant='outlined' size='small' value={formDetails?.risk} onChange={(e) => setFormDetails({ ...formDetails, risk: e?.target?.value })} />
                        <SubmitButton onClick={updateHouse} disabled={sending}>Update house {sending && <Loading />}</SubmitButton>
                    </FormWrapper>
                </>
            }
        </Root>
    );
}

export default ViewHouse;
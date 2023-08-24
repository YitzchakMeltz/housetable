import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as FullLogo } from '../resources/svg/FullLogo.svg'
import { HomeRounded, AddHomeRounded } from '@mui/icons-material';

const Root = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}));

const Logo = styled(FullLogo)(({ theme }) => ({
    width: 'auto',
    height: 42,
}));

const CardsContainer = styled(Grid)(({ theme }) => ({
    marginTop: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const Card = styled(Grid)(({ theme }) => ({
    width: '17vw',
    height: '17vw',
    margin: '2vw',
    borderRadius: 20,
    backgroundColor: '#FFF',
    boxShadow: '0 0 40px #baa28870',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'transform .3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '&:active': {
        transform: 'scale(0.9)',
    },
}));

const CardLabel = styled(Typography)(({ theme }) => ({
    marginTop: '2.5vh',
    fontSize: '1.1rem',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontWeight: 500,
    cursor: 'pointer',
    userSelect: 'none',
}));

const styles = {
    icon: {
        width: '6vw',
        height: 'auto',
        color: '#eaba87',
    }
}

function Home() {

    return (
        <Root>
            <Logo />
            <CardsContainer>
                <Card>
                    <HomeRounded sx={styles.icon} />
                    <CardLabel>View existing home</CardLabel>
                </Card>
                <Card>
                    <AddHomeRounded sx={styles.icon} />
                    <CardLabel>Add new home</CardLabel>
                </Card>
            </CardsContainer>
        </Root>
    );
}

export default Home;
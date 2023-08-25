import AppRoutes from "./components/AppRoutes";
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: 'radial-gradient(ellipse at left bottom, #fff 0%, #fff7ed 62%, #fff7ed 100%)',
}));

function App() {
  return (
    <Root>
      <AppRoutes />
    </Root>
  );
}

export default App;

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import OutlinedCard from './blackBackground';
import EmptyOutlinedCard from './emptyOutlinedCard';
import { grey } from '@mui/material/colors';
import CircularProgress from './terms';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CheckIcon from '@mui/icons-material/Check';

export default function App() {
  return (
    <body>
      <OutlinedCard />
      <Container
        maxWidth="lg"
        sx={{
          mt: 2,
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: '130%',
        }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_22px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_90%,transparent_110%)]">
        <div className="text-center ">
          <Typography variant="h2" component="h6">
            <h2>Welcome!</h2>
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Button
              disableElevation
              variant="contained"
              startIcon={<CheckIcon />}
              sx={{
                bgcolor: grey[600],
                textTransform: 'none',
                '&:hover': {
                  bgcolor: grey[500],
                },
              }}>
              APPLY
            </Button>
            <Button
              disableElevation
              variant="contained"
              startIcon={<DoNotDisturbIcon />}
              sx={{
                bgcolor: grey[600],
                textTransform: 'none',
                '&:hover': {
                  bgcolor: grey[500],
                },
              }}>
              DISCARD
            </Button>
          </Box>
          <EmptyOutlinedCard />
        </div>
      </Container>
      <CircularProgress />
    </body>
  );
}

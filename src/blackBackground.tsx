import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const card = (
  <React.Fragment>
    <CardContent></CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ background: 'black', position: 'fixed', width: '1920px', height: '1080px' }}>
        {card}
      </Card>
    </Box>
  );
}

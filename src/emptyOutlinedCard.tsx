import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardActions>
      <Button size="small" variant="outlined" disabled disableElevation className="mt-12">
        SELECT
      </Button>
      <Button size="small" variant="outlined" disabled disableElevation className="mt-12">
        REMOVE
      </Button>
      <Button size="small" variant="outlined" disabled disableElevation className="mt-12">
        UPDATE
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function EmptyOutlinedCard() {
  return (
    <Box sx={{ minWidth: 375, pt: 2 }}>
      <Card variant="outlined" className="flex justify-center ">
        {card}
      </Card>
    </Box>
  );
}

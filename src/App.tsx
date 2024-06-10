import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedCard from './pdfViewerCard';
import { deepOrange } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Label } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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
          backgroundColor: 'pink',
        }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_22px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div className="my-2 text-center ">
          <Typography variant="h4" component="h1">
            <h2>PDF Editor</h2>
            <h6>
              Edit, View & Clear your PDF File! <br></br>v0.2
            </h6>
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Button
              disableElevation
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{
                bgcolor: deepOrange[500],
                textTransform: 'none',
                '&:hover': {
                  bgcolor: deepOrange[700],
                },
              }}>
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              disableElevation
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
              sx={{
                bgcolor: deepOrange[500],
                textTransform: 'none',
                '&:hover': {
                  bgcolor: deepOrange[700],
                },
              }}>
              Edit PDF
            </Button>
          </Box>
          <Box className="flex items-center justify-center">
            <Typography sx={{ fontSize: 14, fontWeight: 400 }}>Clear PDF Checkmarks</Typography>
            <Checkbox
              defaultChecked
              disableRipple
              sx={{
                color: deepOrange[800],
                '&.Mui-checked': {
                  color: deepOrange[600],
                },
              }}
            />
          </Box>
        </div>
      </Container>
    </body>
  );
}

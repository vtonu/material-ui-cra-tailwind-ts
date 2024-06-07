import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

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

function Copyright() {
  return (
    <Box sx={{ position: 'fixed', bottom: 2, width: '100%' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/vtonu">
          Victor Tonu
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default function App() {
  return (
    <body>
      <Container
        maxWidth="lg"
        sx={{
          mt: 2,
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'hotpink',
        }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_22px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div className="my-2 text-center">
          <Typography variant="h4" component="h1">
            <h2>PDF Editor</h2>
            <h6>React App using MUI, TailwindCSS & TypeScript</h6>
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              color="secondary"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              tabIndex={-1}
              startIcon={<PictureAsPdfIcon />}>
              View PDF
            </Button>
          </Box>
        </div>
      </Container>
      <Copyright />
    </body>
  );
}

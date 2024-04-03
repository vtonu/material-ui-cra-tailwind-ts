import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import PopoverMenu from './PopoverMenu';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/vtonu">
        Victor Tonu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
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
      <div className="my-4 text-center">
        <Typography variant="h4" component="h1">
          <h2>MUI, TailwindCSS & TypeScript</h2>
          <h3>React App boilerplate template.</h3>
        </Typography>
        {/* <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: 'shadow-none' }}
          slotProps={{ thumb: { className: 'hover:shadow-none' } }}
        /> */}
        {/* <PopoverMenu /> */}
        {/* <ProTip /> */}
        <Copyright />
      </div>
    </Container>
  );
}

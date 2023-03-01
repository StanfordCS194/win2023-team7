import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// const headersdata = [
//   {
//     label: "Home",
//     href: "/"
//   },
//   {
//     label: "Create",
//     href: "/create"
//   }
// ];

// // const useStyles = makeStyles({
// //   toolbar: {
// //     display: "flex",
// //     justifyContent: "space-between"
// //   },
// //   header: {
// //     paddingRight: "79px",
// //     paddingLeft: "118px",
// //   },
// //   menuButton: {
// //     fontFamily: "Open Sans",
// //     fontWeight: 700,
// //     size: "18px",
// //     marginLeft: "38px",
// //   }
// // });

// const getMenuButtons = () => {
//   const { menuButton } = useStyles();
//   return headersdata.map(({ label, href }) => {
//     return (
//       <Button {...{
//         key: label,
//         color: "inherit",
//         to: href,
//         className: menuButton,
//       }}>
//         {label}
//       </Button>
//     );
//   });
// };

// const displayDesktop = () => {
//   const { toolbar, header } = useStyles();
//   return (
//     <Toolbar className={toolbar}>
//       <Typography variant="h4">
//         Bantr Ai
//       </Typography>
//       <div>
//         {getMenuButtons()}
//       </div>
//     </Toolbar>
//   );
// };


export default function Header() {
  //const { toolbar, header, menuButton } = useStyles();


  return (
    <header>
    <AppBar >
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="h4">
              Bantr Ai
            </Typography>
          </Grid>
          <Grid item xs={8}>
          </Grid>
          <Grid item xs={2} style={{
            alignContent: "right"
            
          }}>
            
          </Grid>
        </Grid>
        <Link href='/create'>
              <Typography variant="h5">
                Create
              </Typography>
            </Link>
      </Toolbar>
    </AppBar>
    </header>
  )
}
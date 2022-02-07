import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

function Header() {

  return <div>
      <AppBar position='static'  sx={{backgroundColor:"#FFFF", boxShadow:"none", ml:25, mr:30}}>
          <Toolbar>
              <Box display="flex">
                <img src="data:image/png;base64,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"
                 alt='Logo' height="100px" width="200px" />

                <Link href="/" underline='hover' sx={{ml:2, alignSelf: "center"}} color="#000"> <Typography variant="body1" children="Home" /> </Link>    
              </Box>
              
          </Toolbar>
      </AppBar>
  </div>;
}

export default Header;

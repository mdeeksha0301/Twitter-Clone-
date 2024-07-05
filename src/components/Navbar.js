
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Button, Hidden } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';


export default function navbar() {
  return (
    <div >
     <Box>
      <AppBar
         // elevation={0}
        position="fixed"
        >
        <Toolbar>

        <Grid container spacing={0} sx={{width: "100%" }}>
        <Hidden mdDown>
            <Grid item lg={3} md={3} sm={0} xs={0} sx={{ p: 1 }}>
            <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}>
               <IconButton size='large' sx={{color:'white', ml:"120px"}}><TwitterIcon/></IconButton>
            </Box>
            </Grid>
        </Hidden>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ p: 1 }}>
            <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ cursor: "pointer" }}
            >
              <Button variant='text' sx={{color:'white', fontSize:"20px", fontWeight:'1000px'}}>Home</Button>
            {/*Home      Icon*/}
            </Box>
        </Grid>
        <Hidden mdDown>
            <Grid item lg={3} md={3} sm={0} xs={0} sx={{ p: 1 }}>
            <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
            >
                <InputLabel  variant='outlined' htmlFor="SearchIcon" sx={{color:'gray'}}>
          Search
        </InputLabel>
        <Input variant='outlined'
          id="SearchIcon"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
                {/*search bar*/}
            </Box>
            </Grid>
        </Hidden>
        </Grid>
        </Toolbar>
        
        </AppBar>
    </Box>
     <home/>
      

    </div>
  )
}

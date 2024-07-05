import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import TextField from '@mui/material/TextField';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
     <Box>
      <AppBar
         // elevation={0}
        position="fixed"
        sx={{bgcolor:'black', opacity:'0.85'}}
        >
        <Toolbar>

        <Grid container spacing={0} sx={{ width: "100%" }}>
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
              <IconButton size='large' sx={{color:'white', mr:'112px'}}><AutoAwesomeOutlinedIcon/></IconButton>
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
                <TextField
        id="input-with-icon-textfield"
        label="Search"
        sx={{color:'gray', borderRadius:'20px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{color:'gray'}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        
      />
                {/*search bar*/}
            </Box>
            </Grid>
        </Hidden>
        </Grid>
        </Toolbar>
        
        </AppBar>
    </Box>
    
        <Grid container spacing = { 2 } sx={{mt:'49px',}} >
        <Hidden mdDown>
        <Grid item xs = { 3 } >
        <Stack sx={{ml:'162px'}}>
      <Button size="large" variant="text" startIcon={<HomeIcon />} sx={{width:'85px', borderRadius:'20px'}}>
            Home
        </Button>
        <Button variant="text" startIcon={<TagIcon />} size='large' sx={{width:'118px', borderRadius:'20px'}}>
            Explore
        </Button>
        <Button variant="text" startIcon={<NotificationsIcon />} size='large'sx={{width:'165px', borderRadius:'20px'}}>
          Notifications
        </Button>
        <Button variant="text" startIcon={<MailOutlineIcon />} size='large' sx={{width:'135px', borderRadius:'20px'}}>
            Messages
        </Button>
        <Button variant="text" startIcon={<BookmarkBorderIcon />} size='large'sx={{width:'145px', borderRadius:'20px'}}>
            Bookmarks
        </Button>
        <Button variant="text" startIcon={<FeaturedPlayListOutlinedIcon />} size='large' sx={{width:'90px', borderRadius:'20px'}}>
            Lists
        </Button>
        <Button variant="text" startIcon={<PermIdentityOutlinedIcon />} size='large'sx={{width:'110px', borderRadius:'20px'}}>
            Profile
        </Button>
        <Button variant="text" startIcon={<MoreHorizOutlinedIcon />} size='large'sx={{width:'90px', borderRadius:'20px'}}>
            More
        </Button>
        <Button variant='contained' sx={{mr:"30px", borderRadius:'70px', width:'100px', height:'40px', mt:'32px'}}>Tweet</Button>
      </Stack>
        </Grid>
        </Hidden>
         <Grid item xs = { 6 } >
         <Box
        sx={{
          color: "white",
          width: '600px',
          height: '1000px',
          backgroundColor: 'black',
          opacity:'0.92',
          border: '1px solid gray',
          overflowY:'scroll',
          
        }}>
          <Box
          sx={{
          width:'100%',
          height:'150px'}}>
              <Box display={'flex'} sx={{ml:'15px', mt:"15px"}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'gray', fontSize:'22px', mt:'15px', ml:'15px'}}>What's happening?</Box>
              </Box>
              <Box sx={{mt:'40px', ml:"50px", display:'flex'}}>
                <IconButton sx={{color:'lightblue'}}><ImageOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><GifBoxOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><PollOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><SentimentSatisfiedAltOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><CalendarMonthOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><LocationOnOutlinedIcon/></IconButton>
                <Button variant='contained' sx={{ml:"37%", borderRadius:'70px'}}>Tweet</Button>
              </Box>
          </Box>

          <Box sx={{border:'1px solid gray',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex', width:'100%'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
                <IconButton sx={{color:"gray", mb:'12px', ml:'35%'}}><MoreHorizOutlinedIcon/></IconButton>
              </Box>
              <Box mr='10px' ml='70px'>
              We would like to express our grateful appreciation of the judgement passed and upheld by the Supreme Court today. 

              It reinforces the value system and the ethics of our judiciary.
              </Box>
              <Box sx={{bgcolor:'lightblue' ,width:'67%', height:'320px', mt:'12px', ml:'70px'}}></Box>
              <Box>
                <Button variant='text' sx={{color:'lightblue', ml:'65px'}} startIcon = {<ChatBubbleOutlineIcon/>}>2,112</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<AutorenewOutlinedIcon/>}>4,723</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<FavoriteBorderOutlinedIcon/>}>62.3k</Button>
                <IconButton sx={{color:'lightblue', ml:'40px'}}><FileUploadOutlinedIcon/></IconButton>
              </Box>

            </Box>
            
            
              
          </Box>
          <Box sx={{border:'1px solid gray',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
                <IconButton sx={{color:"gray", mb:'12px', ml:'35%'}}><MoreHorizOutlinedIcon/></IconButton>
              </Box>
              <Box mr='10px' ml='70px'>
              We would like to express our grateful appreciation of the judgement passed and upheld by the Supreme Court today. 

              It reinforces the value system and the ethics of our judiciary.
              </Box>
              <Box sx={{bgcolor:'lightblue' ,width:'67%', height:'320px', mt:'12px', ml:'70px'}}></Box>
              <Box>
                <Button variant='text' sx={{color:'lightblue', ml:'65px'}} startIcon = {<ChatBubbleOutlineIcon/>}>2,112</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<AutorenewOutlinedIcon/>}>4,723</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<FavoriteBorderOutlinedIcon/>}>62.3k</Button>
                <IconButton sx={{color:'lightblue', ml:'40px'}}><FileUploadOutlinedIcon/></IconButton>
              </Box>

            </Box>
            
            
              
          </Box>
          <Box sx={{border:'1px solid gray',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
                <IconButton sx={{color:"gray", mb:'12px', ml:'35%'}}><MoreHorizOutlinedIcon/></IconButton>
              </Box>
              <Box mr='10px' ml='70px'>
              We would like to express our grateful appreciation of the judgement passed and upheld by the Supreme Court today. 

              It reinforces the value system and the ethics of our judiciary.
              </Box>
              <Box sx={{bgcolor:'lightblue' ,width:'67%', height:'320px', mt:'12px', ml:'70px'}}></Box>
              <Box>
                <Button variant='text' sx={{color:'lightblue', ml:'65px'}} startIcon = {<ChatBubbleOutlineIcon/>}>2,112</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<AutorenewOutlinedIcon/>}>4,723</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<FavoriteBorderOutlinedIcon/>}>62.3k</Button>
                <IconButton sx={{color:'lightblue', ml:'40px'}}><FileUploadOutlinedIcon/></IconButton>
              </Box>

            </Box>
            
            
              
          </Box>
          <Box sx={{border:'1px solid gray',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
                <IconButton sx={{color:"gray", mb:'12px', ml:'35%'}}><MoreHorizOutlinedIcon/></IconButton>
              </Box>
              <Box mr='10px' ml='70px'>
              We would like to express our grateful appreciation of the judgement passed and upheld by the Supreme Court today. 

              It reinforces the value system and the ethics of our judiciary.
              </Box>
              <Box sx={{bgcolor:'lightblue' ,width:'67%', height:'320px', mt:'12px', ml:'70px'}}></Box>
              <Box>
                <Button variant='text' sx={{color:'lightblue', ml:'65px'}} startIcon = {<ChatBubbleOutlineIcon/>}>2,112</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<AutorenewOutlinedIcon/>}>4,723</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<FavoriteBorderOutlinedIcon/>}>62.3k</Button>
                <IconButton sx={{color:'lightblue', ml:'40px'}}><FileUploadOutlinedIcon/></IconButton>
              </Box>

            </Box>
            
            
              
          </Box>
          <Box sx={{
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
                <IconButton sx={{color:"gray", mb:'12px', ml:'35%'}}><MoreHorizOutlinedIcon/></IconButton>
              </Box>
              <Box mr='10px' ml='70px'>
              We would like to express our grateful appreciation of the judgement passed and upheld by the Supreme Court today. 

              It reinforces the value system and the ethics of our judiciary.
              </Box>
              <Box sx={{bgcolor:'lightblue' ,width:'67%', height:'320px', mt:'12px', ml:'70px'}}></Box>
              <Box>
                <Button variant='text' sx={{color:'lightblue', ml:'65px'}} startIcon = {<ChatBubbleOutlineIcon/>}>2,112</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<AutorenewOutlinedIcon/>}>4,723</Button>
                <Button  variant='text' sx={{color:'lightblue', ml:'40px'}}startIcon = {<FavoriteBorderOutlinedIcon/>}>62.3k</Button>
                <IconButton sx={{color:'lightblue', ml:'40px'}}><FileUploadOutlinedIcon/></IconButton>
              </Box>

            </Box>
            
            
              
          </Box>
      </Box>
        </Grid> 
        <Hidden mdDown>

        <Grid item xs = { 3 } sx={{ml:'0'}} >
        <Box
          sx={{
            color: "white",
            width: '340px',
            height: '320px',
            backgroundColor: 'black',
            opacity:'0.8',  
            marginTop:'1px', 
            ml:'-125px',
            borderRadius:'10px'
            
          }}>
          <Box sx={{ml:"25px",fontSize :"32px", fontWeight: '800'}}> What's happening</Box>
          <Box  mt={'28px'} display={'flex'} sx={{p:"2",'&:hover': {bgcolor:"black", opacity: [0.9, 0.8, 0.7],}}} >
              <Grid ml="20px" lg={'8'} md={'4'}>
                <Box color={'gray'} fontSize={'15px'}> COVID-19 . Live</Box>
                <Box>COVID-19 in India</Box>
              </Grid>
              <Grid lg={'4'} md={'4'}>
                <Box sx={{ alignItems:"center", ml:"32px",p:"2", width:'43px',height:'43px'}} bgcolor={'white'}></Box>
              </Grid>
          </Box>
          <Box  mt={'28px'} display={'flex'} sx={{p:"2",'&:hover': {bgcolor:"gray", opacity: [0.9, 0.8, 0.7],}}} >
              <Grid ml="20px" lg={'8'} md={'4'}>
                <Box color={'gray'} fontSize={'15px'}> COVID-19 . Live</Box>
                <Box>COVID-19 in India</Box>
              </Grid>
              <Grid lg={'4'} md={'4'}>
                <Box sx={{ alignItems:"center", ml:"32px",p:"2", width:'43px',height:'43px'}} bgcolor={'white'}></Box>
              </Grid>
          </Box>
          <Box mt={'28px'}display={'flex'} sx={{p:"2",'&:hover': {bgcolor:"black", opacity: [0.9, 0.8, 0.7],}}} >
              <Grid ml="20px" lg={'8'} md={'4'}>
                <Box color={'gray'} fontSize={'15px'}> COVID-19 . Live</Box>
                <Box>COVID-19 in India</Box>
              </Grid>
              <Grid lg={'4'} md={'4'}>
                <Box sx={{ alignItems:"center", ml:"32px",p:"2", width:'43px',height:'43px'}} bgcolor={'white'}></Box>
              </Grid>
          </Box>
         <Box ml="15px" mt='22px'>
          <Button size={'small'} ml={'12px'} variant='text'>Show more</Button>
         </Box>
        </Box>

        </Grid> 
        </Hidden>
        </Grid>
        

    </div>
  )
}

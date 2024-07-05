import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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

export default function middle() {
  return (
    <div className={styles.container}>
      <Box
        sx={{
          color: "white",
          width: '100%',
          height: '1000px',
          backgroundColor: 'black',
          border: '3px solid yellow',
          overflowY:'scroll',
          scrollbarColor: none,
        }}>
          <Box
          sx={{border:'2px solid yellow',
          width:'100%',
          height:'150px'}}>
              <Box display={'flex'} sx={{ml:'15px', mt:"15px"}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'gray', fontSize:'22px', mt:'15px', ml:'15px'}}>What's happening?</Box>
              </Box>
              <Box sx={{mt:'25px', ml:"40px", display:'flex'}}>
                <IconButton sx={{color:'lightblue'}}><ImageOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><GifBoxOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><PollOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><SentimentSatisfiedAltOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><CalendarMonthOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><LocationOnOutlinedIcon/></IconButton>
                <Button variant='contained' sx={{ml:"30%", borderRadius:'70px'}}>Tweet</Button>
              </Box>
          </Box>

          <Box sx={{border:'2px solid yellow',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
                <IconButton sx={{color:"gray", mb:'12px', ml:'62%'}}><MoreHorizOutlinedIcon/></IconButton>
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
          <Box sx={{border:'2px solid yellow',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
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
          <Box sx={{border:'2px solid yellow',
          width:'100%',
          height:'auto'}}
          >
            <Box sx={{ml:'15px', mt:"15px", }}>
              <Box sx={{display:'flex'}}>
                <Box sx={{bgcolor:'white', height:'60px', width:'60px', borderRadius:'50%', }}></Box>
                <Box sx={{color:'white', mt:'15px', ml:'15px'}} endIcon={<CheckCircleIcon />}>Ratan N. Tata</Box>
                <Box sx={{color:'gray', mt:'15px', ml:'3px'}}>@RNTata200 . May19</Box>
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
      

    </div>
  )
}


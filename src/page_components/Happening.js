import React from 'react'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function happening() {
  return (
    <div className={styles.container}>
      <Box
          sx={{
            color: "white",
            width: '100%',
            height: 450,
            backgroundColor: 'black',
            
          }}>
          <Box sx={{ml:"15px",fontSize :"32px", fontWeight: 800,}}> What's happening</Box>
          <Box  mt={'8px'} display={'flex'} sx={{p:"2",'&:hover': {bgcolor:"gray", opacity: [0.9, 0.8, 0.7],}}} >
              <Grid ml="20px" lg={'8'} md={'4'}>
                <Box color={'gray'} fontSize={'15px'}> COVID-19 . Live</Box>
                <Box>COVID-19 in India</Box>
              </Grid>
              <Grid lg={'4'} md={'4'}>
                <Box sx={{ alignItems:"center", ml:"92px",p:"2", width:'43px',height:'43px'}} bgcolor={'white'}></Box>
              </Grid>
          </Box>
          <Box  mt={'8px'} display={'flex'} sx={{p:"2",'&:hover': {bgcolor:"gray", opacity: [0.9, 0.8, 0.7],}}} >
              <Grid ml="20px" lg={'8'} md={'4'}>
                <Box color={'gray'} fontSize={'15px'}> COVID-19 . Live</Box>
                <Box>COVID-19 in India</Box>
              </Grid>
              <Grid lg={'4'} md={'4'}>
                <Box sx={{ alignItems:"center", ml:"92px",p:"2", width:'43px',height:'43px'}} bgcolor={'white'}></Box>
              </Grid>
          </Box>
          <Box mt={'8px'}display={'flex'} sx={{p:"2",'&:hover': {bgcolor:"black", opacity: [0.9, 0.8, 0.7],}}} >
              <Grid ml="20px" lg={'8'} md={'4'}>
                <Box color={'gray'} fontSize={'15px'}> COVID-19 . Live</Box>
                <Box>COVID-19 in India</Box>
              </Grid>
              <Grid lg={'4'} md={'4'}>
                <Box sx={{ alignItems:"center", ml:"92px",p:"2", width:'43px',height:'43px'}} bgcolor={'white'}></Box>
              </Grid>
          </Box>
         <Box>
          <Button size={'small'} ml={'12px'} variant='text'>Show more</Button>
         </Box>
        </Box>


    </div>
  )
}
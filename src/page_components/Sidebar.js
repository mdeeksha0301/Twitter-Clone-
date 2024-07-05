import React from 'react'
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function sidebar() {
  return (
    <div className={styles.container}>
      <Stack>
      <Button variant="text" startIcon={<HomeIcon />} size='small'>
            Home
        </Button>
        <Button variant="text" startIcon={<TagIcon />} size='small'>
            Explore
        </Button>
        <Button variant="text" startIcon={<NotificationsIcon />} size='small'>
          Notifications
        </Button>
        <Button variant="text" startIcon={<MailOutlineIcon />} size='small'>
            Messages
        </Button>
        <Button variant="text" startIcon={<BookmarkBorderIcon />} size='small'>
            Bookmarks
        </Button>
        <Button variant="text" startIcon={<FeaturedPlayListOutlinedIcon />} size='small'>
            Lists
        </Button>
        <Button variant="text" startIcon={<PermIdentityOutlinedIcon />} size='small'>
            Profile
        </Button>
        <Button variant="text" startIcon={<MoreHorizOutlinedIcon />} size='small'>
            More
        </Button>
      </Stack>
    </div>
  )
}

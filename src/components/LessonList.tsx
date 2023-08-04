import React from 'react'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Divider
} from '@mui/material'

import DraftsIcon from '@mui/icons-material/Drafts'
import InboxIcon from '@mui/icons-material/Inbox'

export const LessonList = () => {
  return (
    <Box sx={{ width: '500px' }}>
        <List>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Okunmuş mesajlar" />
            </ListItemButton>
        </ListItem>

        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Taslaklar" />
            </ListItemButton>
        </ListItem>
    </List>
    <Divider />
    </Box>
  )
}

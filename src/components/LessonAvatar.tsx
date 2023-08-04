import React from 'react'
import {Avatar,Stack,AvatarGroup} from '@mui/material'

export const LessonAvatar = () => {
  return (
    <Stack direction={'row'}>
        <AvatarGroup total={50} >
            <Avatar src="https://mui.com/static/images/avatar/1.jpg"/>
            <Avatar src="https://mui.com/static/images/avatar/2.jpg"/>
            <Avatar src="https://mui.com/static/images/avatar/3.jpg"/>
            <Avatar src="https://mui.com/static/images/avatar/4.jpg"/>
            <Avatar src="https://mui.com/static/images/avatar/5.jpg"/>
        </AvatarGroup>
    </Stack>
  )
}

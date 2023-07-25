import React from 'react'
import {Paper,Box, Stack} from '@mui/material'

export const LessonPaper = () => {
  return (
    <div>
        <Stack direction={'row'} spacing={2}>
        <Paper sx={{width:250 , height:250}} elevation={1} />
        <Paper sx={{width:250 , height:250}} elevation={0} />
        <Paper sx={{width:250 , height:250}} elevation={2} />
        <Paper sx={{width:250 , height:250}} elevation={3} />
        </Stack>
    </div>
  )
}

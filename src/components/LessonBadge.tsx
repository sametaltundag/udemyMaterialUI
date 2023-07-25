import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const LessonBadge = () => {
  return (
    <Badge badgeContent={999} color='primary' max={2}>
      <MailIcon />
    </Badge>
  )
}

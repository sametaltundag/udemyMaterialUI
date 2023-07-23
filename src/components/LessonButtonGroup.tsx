import React from 'react'
import { Button, ButtonGroup, Stack } from '@mui/material';


export const LessonButtonGroup = () => {
  return (
    <Stack flexDirection={'row'} marginTop={3} justifyContent={'center'}>

      <ButtonGroup variant='contained'>
        <Button>Tıkla</Button>
        <Button>Tıkla</Button>
        <Button>Tıkla</Button>
      </ButtonGroup>

      <ButtonGroup variant="outlined" orientation='vertical' >
        <Button>Tıkla</Button>
        <Button>Tıkla</Button>
        <Button>Tıkla</Button>
      </ButtonGroup>

      <ButtonGroup variant="text">
        <Button>Tıkla</Button>
        <Button>Tıkla</Button>
        <Button>Tıkla</Button>
      </ButtonGroup>
    </Stack>
  )
}

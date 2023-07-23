import React from 'react'
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
    return (
        <Stack>
            <Stack justifyContent={'center'} direction={'row'} spacing={2}>
                <Button variant='text'>Button</Button>
                <Button variant='outlined'>Button</Button>
                <Button variant='contained'>Button</Button>
            </Stack>
            
            {/* text button */}
            <Stack marginTop={4} direction={'row'} spacing={2} justifyContent={'center'}>
                <Button variant='text' color='primary'>Tıkla</Button>
                <Button variant='text' color='success'>Tıkla</Button>
                <Button variant='text' color='secondary'>Tıkla</Button>
                <Button variant='text' color='error'>Tıkla</Button>
                <Button variant='text' color='info' >Tıkla</Button>
                <Button variant='text' color='warning' >Tıkla</Button>
            </Stack>

            {/* contained button */}
            <Stack marginTop={4} direction={'row'} spacing={2} justifyContent={'center'}>
                <Button variant='contained' color='primary'>Tıkla</Button>
                <Button variant='contained' color='success'>Tıkla</Button>
                <Button variant='contained' color='secondary'>Tıkla</Button>
                <Button variant='contained' color='error'>Tıkla</Button>
                <Button variant='contained' color='info' >Tıkla</Button>
                <Button variant='contained' color='warning' >Tıkla</Button>
            </Stack>

            {/* outlined button */}
            <Stack marginTop={4} direction={'row'} spacing={2} justifyContent={'center'}>
                <Button variant='outlined' color='primary'>Tıkla</Button>
                <Button variant='outlined' color='success'>Tıkla</Button>
                <Button variant='outlined' color='secondary'>Tıkla</Button>
                <Button variant='outlined' color='error'>Tıkla</Button>
                <Button variant='outlined' color='info' >Tıkla</Button>
                <Button variant='outlined' color='warning' >Tıkla</Button>
            </Stack>

            <Stack marginTop={4} direction={'row'} spacing={2} justifyContent={'center'}>
                <Button variant='contained' color='warning' size='large'>Large</Button>
                <Button variant='contained' color='warning' size='medium'>Medium</Button>
                <Button variant='contained' color='warning' size='small'>Small</Button>
            </Stack>

            <Stack marginTop={4} direction={'row'} spacing={2} justifyContent={'center'}>
                <Button variant='contained' startIcon={<AddIcon />}>Ekle</Button>
                <Button variant='contained' endIcon={<AddIcon />}>Ekle</Button>
            </Stack>
        </Stack>
    )
}

import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'

export const LessonTextField = () => {
    const [password, setPassword] = useState('');
    return (
        <Stack>
            <Stack direction={'row'} spacing={2}>
                <TextField
                    label="outlined"
                    type='text'
                    variant='outlined' />

                <TextField
                    label="standard"
                    type='text'
                    variant='standard' />

                <TextField
                    label="filled"
                    type='text'
                    variant='filled' />
            </Stack>

            <Stack direction={'row'} spacing={2} marginTop={4}>
                <TextField
                    label="standard"
                    type='text'
                    variant='outlined'
                    helperText='Bu bir örnek metindir.' />

                <TextField
                    label="disabled"
                    type='text'
                    variant='outlined'
                    disabled />

                <TextField
                    label="disabled"
                    value={'Read Only'}
                    type='text'
                    variant='outlined'
                    inputProps={{ readOnly: true }} />
            </Stack>

            <Stack direction={'row'} spacing={2} marginTop={4}>

                <TextField
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">TC</InputAdornment>
                )
                }}
                label="Kullanıcı"
                variant='outlined'
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                helperText={!password ? 'Lütfen TC giriniz.' : 'TC Noyu kimseyle paylaşmayın!'}
                />

                <TextField
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">TL</InputAdornment>
                )
                }}
                label="Toplam"
                variant='outlined'
                />

            </Stack>
        </Stack>
    )
}

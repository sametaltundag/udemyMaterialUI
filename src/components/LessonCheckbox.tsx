import React from 'react'
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText
}
    from '@mui/material'

export const LessonCheckbox = () => {
    return (

        <Box>
            <Box>
            <FormControl>
                <FormLabel>İçecek seç</FormLabel>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Çay" />
                    <FormControlLabel control={<Checkbox />} label="Kahve" disabled />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Meyve Suyu" />
                </FormGroup>
            </FormControl>
        </Box>

        <hr />

        <Box>
            <FormControl>
                <FormLabel>Durum</FormLabel>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Kullanım koşullarını kabul ediyorum.." />
                </FormGroup>
            </FormControl>
        </Box>

        </Box>
        
    )
}

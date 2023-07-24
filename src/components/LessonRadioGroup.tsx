import React, { useState } from 'react'
import { Stack,
    RadioGroup, 
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormHelperText
 } from '@mui/material';


export const LessonRadioGroup = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);        
    }

  return (
    <Stack>
        <FormControl>
            <FormLabel>Maaş Beklentiniz</FormLabel>
            <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel value='2000' control={<Radio color='secondary' disabled />} label='2000 $' />
                <FormControlLabel value='3000' control={<Radio />} label='3000 $' />
                <FormControlLabel value='4000' control={<Radio color='warning' />} label='4000 $' />
            </RadioGroup>
        </FormControl>
        <FormHelperText>{!value ? 'Lütfen maaş seçiniz' : 'Seçiminizi dikkatli yapın.'}</FormHelperText>
    </Stack>
  )
}

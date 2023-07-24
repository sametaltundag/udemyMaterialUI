import { 
    Box,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select, 
    SelectChangeEvent} 
    from '@mui/material'
import React, { useState } from 'react'
export const LessonSelect = () => {
    const [age, setAge] = React.useState('');
    const [country, setCountry] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);}
  return (
    <Box sx={{ minWidth: 120 }}>
      {/* <FormControl fullWidth>
        <InputLabel>Your Age</InputLabel>
        <Select
          value={age}
          label="Your Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}

      <TextField
      SelectProps={{ multiple: true }}
      label="Ülke seç"
      select
      fullWidth
      value={country}
      onChange={(e) => {
        setCountry(
            typeof e.target.value === 'string'
            ? e.target.value.split(',')
            : e.target.value
        )
      }}>
        <MenuItem value="TR">TÜRKİYE</MenuItem>
        <MenuItem value="GE">ALMANYA</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
      </TextField>
    </Box>
  )
}

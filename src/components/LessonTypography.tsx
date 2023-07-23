import React from 'react'
import { Typography } from '@mui/material';

export const LessonTypography = () => {
  return (
    <div>
        <Typography variant='body1'>
          body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad voluptates modi esse impedit placeat, repudiandae saepe explicabo nisi, quae quam. Ex quas eligendi numquam aspernatur debitis eaque cumque alias.
        </Typography>

        <hr />

        <Typography variant='body2'>
          body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad voluptates modi esse impedit placeat, repudiandae saepe explicabo nisi, quae quam. Ex quas eligendi numquam aspernatur debitis eaque cumque alias.
        </Typography>
        <hr />
        <Typography variant='h1'>MATERIAL UI</Typography>

        {/* h1 işlemi uygular fakat html tarafında h5 olarak tanımla */}
        <Typography variant='h1' component='h5'>MATERIAL UI</Typography>

        {/* align ile sağ sola ve ortaya hizalar */}
        <Typography variant='h3' align='right'>MATERIAL UI</Typography>
        <Typography variant='h3' align='left'>MATERIAL UI</Typography>


        <Typography variant='subtitle1'>MATERIAL UI</Typography>
        <Typography variant='subtitle2'>MATERIAL UI</Typography>
    </div>
  )
}

import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack
} from '@mui/material'
import { url } from 'inspector'

const urfa = 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Urfa/sanliurfa-sehir-rehberi-urfa-kalesi.jpg';

const mardin = 'https://imgs.platinonline.com/Documents/Platin/images/2021/03/17/17032021161593842413f89c43.jpg';

const istanbul = 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507836-istanbul.jpg';

export const LessonCard = () => {
  return (

    <Stack direction={'row'} spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={urfa}/>
        <CardContent>
            <Typography variant='h3' component={'div'}>Şanlıurfa</Typography>
            <Typography variant='body2' component={'p'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi aut adipisci inventore, eveniet ab iste nihil voluptatum deleniti architecto delectus voluptatem error sint. Id esse odit hic ipsam corrupti?</Typography>
        </CardContent>

        <CardActions>
            <Button size='small'>Detaylı bilgi</Button>
            <Button size='small'>Paylaş</Button>
            <Button size='small' color='success' variant='contained'>Ara</Button>
        </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={mardin}/>
        <CardContent>
            <Typography variant='h3' component={'div'}>Mardin</Typography>
            <Typography variant='body2' component={'p'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi aut adipisci inventore, eveniet ab iste nihil voluptatum deleniti architecto delectus voluptatem error sint. Id esse odit hic ipsam corrupti?</Typography>
        </CardContent>

        <CardActions>
            <Button size='small'>Detaylı bilgi</Button>
            <Button size='small'>Paylaş</Button>
            <Button size='small' color='success' variant='contained'>Ara</Button>
        </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={istanbul}/>
        <CardContent>
            <Typography variant='h3' component={'div'}>İstanbul</Typography>
            <Typography variant='body2' component={'p'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi aut adipisci inventore, eveniet ab iste nihil voluptatum deleniti architecto delectus voluptatem error sint. Id esse odit hic ipsam corrupti?</Typography>
        </CardContent>

        <CardActions>
            <Button size='small'>Detaylı bilgi</Button>
            <Button size='small'>Paylaş</Button>
            <Button size='small' color='success' variant='contained'>Ara</Button>
        </CardActions>
    </Card>
    </Stack>
  )
}

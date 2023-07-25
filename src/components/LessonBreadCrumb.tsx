import React from 'react'
import { Breadcrumbs, Link, Stack } from '@mui/material'

export const LessonBreadCrumb = () => {
    return (
        <Stack>
            <Breadcrumbs separator="/" maxItems={2}>
                <Link>Anasayfa</Link>
                <Link>Ürünler</Link>
                <Link>Aksesuarlar</Link>
                <Link>Powerbank</Link>
                <Link>Xiaomi Powerbank</Link>
            </Breadcrumbs>
        </Stack>
    )
}

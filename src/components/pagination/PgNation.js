
import { Box, CssBaseline, Container } from '@mui/material'
import { Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './pgNation.css'

function PgNation(props) {
    const [page, setPage] = useState(1)
    useEffect(() => {
        props.getPage(page)
    }, [page])
    return (
        <div className='pagination'>
            <CssBaseline />
            <Container component={Box} py={1}>
                <Pagination
                    count={10}
                    color='secondary'
                    variant='outlined'
                    defaultPage={page}
                    onChange={(event, value) => setPage(value)}
                />
            </Container>

        </div>
    )
}

export default PgNation
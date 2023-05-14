


import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PgNation(props) {
    const handleChange = (event, value) => {
        props.getPage(value);
    };
    return (
        <Stack spacing={2}>
            <Pagination count={10} color="primary" onChange={handleChange} />
        </Stack>
    );
}



/*
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

*/
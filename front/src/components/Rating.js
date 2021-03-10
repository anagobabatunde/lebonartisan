import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating({ rating }) {

    return (
        <div>
            <Box component="fieldset" borderColor="transparent">
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={rating} readOnly />
            </Box>
        </div>
    );
}
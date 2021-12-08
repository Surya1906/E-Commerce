import React from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import { Link} from 'react-router-dom';

const Confirmation = () => {
    return (
        <div >
            <div>
            <br />
            <br />
            <br />
            <br />
                <Typography variant="h5" >Thank you for your purchase John Wick ! </Typography>
                <Typography variant="subtitle2">Order ref: 123456789</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </div>
    )
}

export default Confirmation

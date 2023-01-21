import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






const HeroCard = ({ card }) => {
    const { name, date, percentage, number } = card
    return (
        <div>
            <React.Fragment>
                <CardContent sx={{ border: 1, boxShadow: 0, borderRadius: '16px', borderColor: 'grey.500' }}>
                    <Typography sx={{ borderBottom: 1, borderColor: 'grey.500', display: 'flex', justifyContent: 'center', }} variant='h5' color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="h3" color='#558b2f' component="div">
                        {number}
                    </Typography>
                    <Typography sx={{ borderTop: 1, borderColor: 'grey.500', display: 'flex', justifyContent: 'center' }} variant='h5' color="text.secondary" gutterBottom>
                        {date}
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant='h6' color="#558b2f" >
                        {percentage}
                    </Typography>
                </CardContent>

            </React.Fragment>

        </div >
    );
};

export default HeroCard;
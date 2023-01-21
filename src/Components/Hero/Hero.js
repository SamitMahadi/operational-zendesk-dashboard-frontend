import React from 'react';
import { Box } from '@mui/system';
import HeroCard from './HeroCard';
import { Grid } from '@mui/material';

const Hero = () => {
    const cardData = [
        {
            id: 1,
            name: 'Created',
            number: '593',
            date: 'to yesterday',
            percentage: '9%'
        },
        {
            id: 2,
            name: 'Unassigned',
            number: '7',
            date: 'to yesterday',
            percentage: '30%'
        },
        {
            id: 3,
            name: 'Open',
            number: '46',
            date: 'to yesterday',
            percentage: '13%'
        },
        {
            id: 4,
            name: 'Solved',
            number: '526',
            date: 'to yesterday',
            percentage: '8%'
        },
        {
            id: 5,
            name: 'Escalated',
            number: '2',
            date: 'to yesterday',
            percentage: '0%'
        },
        {
            id: 6,
            name: 'Sydney',
            number: '01:41 AM',
            date: 'Tuesday',
            percentage: '18 Dec 2018'
        },

    ]
  
    return (


 <Grid container item spacing={3} xs={8} md={12} sx={{justifyContent: 'space-around',alignSelf: 'center'}}> 
    
      
                {
                 cardData.map(card => <HeroCard
                     key={card.id}
                     card={card}
                 ></HeroCard>)
             }
   
          
  
    
  
 </Grid>









    );
};

export default Hero;

        // <Box sx={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignSelf: 'center',
            
           
        // }}>
        //     {
        //         cardData.map(card => <HeroCard
        //             key={card.id}
        //             card={card}
        //         ></HeroCard>)
        //     }
        // </Box>

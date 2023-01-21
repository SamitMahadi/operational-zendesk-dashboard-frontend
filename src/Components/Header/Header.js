import React from 'react';
import Box from '@mui/material/Box';
import logo from '../../Assets/logo50x30.png'
import { Typography } from '@mui/material';

const Header = () => {
    return (

        <Box
            sx={{

                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: '#558b2f',
                color: '#558b2f.contrastText',
                height: '25%',
                p: 1.5



            }}>
            <Box sx={{

                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
              
                
            }}>
                <img src={logo} alt="" />
                <Typography  color="common.white" sx={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                

                    
                }}>
                    Daily Operation
                </Typography>

            </Box>
            <Typography  color="common.white" sx={{
                justifyContent: 'center',
                alignSelf: 'center',
                
            }}>
                Berlin Local Time: Monday,17 Dec 2018 03:41 PM
            </Typography>



        </Box>

    );
};

export default Header;
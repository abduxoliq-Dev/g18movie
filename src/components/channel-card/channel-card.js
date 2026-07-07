import React from 'react';
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";


function ChannelCard({channel, marginTop}) {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '310px',
                height: '326px',
                background: 'linear-gradient(163deg,rgba(6, 41, 117, 1) 11%, rgba(0, 255, 212, 1) 46%, rgba(84, 43, 117, 1) 87%)',
                marginTop: marginTop
            }}
        >

            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white'
                }}
            >
                <CardMedia
                    image={channel?.snippet?.thumbnails.high.url}
                    alt={channel?.snippet?.title}
                    sx={{
                        borderRadius: '50%',
                        height: '180px',
                        width: '180px',
                        mb: 2,
                    }}
                />


                <Typography variant={'h6'}>
                    {channel?.snippet?.title}{' '}
                    <CheckCircle sx={{fontSize: '14px', color: 'white', ml: '5px'}}/>
                </Typography>
                {channel?.statistics?.subscriberCount && (
                    <Typography sx={{fontSize: '15px', fontWeight: 'bold', color: 'white'}}>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-Us')} Subscribers
                    </Typography>
                )}

            </CardContent>
        </Box>
    );

}

export default ChannelCard;
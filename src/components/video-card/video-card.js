import React from 'react';
import {Card, CardMedia, CardContent, Typography, Avatar, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import moment from "moment";
import {Link} from "react-router-dom";

function VideoCard({video}) {
    return (
        <Card
            sx={{width: {xs: '100%', sm: '270px', md: '290px', lg: '310px'}, boxShadow: 'none', borderRadius: '5px'}}
        >
            <Link to={`/video/${video?.id?.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{width: {xs: '100%', sm: '270px', md: '290px', lg: '310px'}, height: '180px'}}
                />
            </Link>

            <CardContent
                sx={{
                    background: 'linear-gradient(163deg,rgba(6, 41, 117, 1) 11%, rgba(0, 255, 212, 1) 46%, rgba(84, 43, 117, 1) 87%)',
                    height: '200px',
                    position: 'relative',
                    color: 'white'

                }}>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{opacity: '.4'}}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{opacity: '.6'}}>
                        {video?.snippet?.description.slice(0, 50)}
                    </Typography>
                </Link>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                        <Typography sx={{color: 'white'}} variant={'subtitle2'} color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Stack>
                </Link>

            </CardContent>
        </Card>
    );
}

export default VideoCard;
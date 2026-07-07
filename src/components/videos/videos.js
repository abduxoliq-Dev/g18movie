import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import VideoCard from "../video-card/video-card";
import ChannelCard from "../channel-card/channel-card";

const Videos = ({data}) => {
    return (
        <Stack width={'100%'}
               direction={'row'}
               flexWrap={'wrap'}
               justifyContent={'start'}
               alignItem={'center'}
               gap={1}
        >
            {data.map((item) => (
                <Box>
                    {item.id?.videoId && <VideoCard video={item}/>}
                    {item.id?.channelId && <ChannelCard channel={item}/>}
                </Box>
            ))}

        </Stack>
    );
}

export default Videos;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../api-service/api-service";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/videos";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";


const Channel = () => {
    const {id} = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideos, setChannelVideos] = useState([]);

    useEffect(() => {
        ApiService.fetching(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data.items[0]));
        ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(dataVideo => setChannelVideos(dataVideo.items))
    }, [id])


    return (
        <Box minHeight={'95vh'}>
            <Box>
                <Box width={'100%'}
                     height={'200px'}
                     zIndex={10}
                     sx={{
                         backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         display: 'flex',
                         justifyContent: 'center',
                         objectFit: 'cover',
                         backgroundRepeat: 'no-repeat'
                     }}
                >
                    <ChannelCard marginTop={'50px'} channel={channelDetail}/>
                </Box>

            </Box>
            <Container maxWidth={'100%'} sx={{marginTop: '250px',}}>
                <Videos data={channelVideos}/>
            </Container>
        </Box>
    );
}

export default Channel;
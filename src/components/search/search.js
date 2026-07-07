import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../api-service/api-service";
import Videos from "../videos/videos";
import {Typography, Box, Container} from "@mui/material";
import {colors} from "../constants/constants";

const Search = () => {
    const [searchVideo, setSearchVideo] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${id}`).then(data => setSearchVideo(data.items))
    }, [id])
    return (
        <Box p={2} mt={'50px'} height={'120vh'}>
            <Container maxWidth={'90%'}>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>Search for results <span
                    style={{color: colors.color}}>{id}</span> videos </Typography>
                <Videos data={searchVideo}/>
            </Container>
        </Box>

    );
}

export default Search;